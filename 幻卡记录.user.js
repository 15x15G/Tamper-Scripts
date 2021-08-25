// ==UserScript==
// @name         幻卡记录
// @namespace    undefined
// @version      0.8
// @description  在灰机维基的幻卡页加上记录功能
// @author       Alien_tao
// @match        http://ff14.huijiwiki.com/wiki/%E4%B9%9D%E5%AE%AB%E5%B9%BB%E5%8D%A1%E5%8D%A1%E7%89%8C
// @match        https://ff14.huijiwiki.com/wiki/%E4%B9%9D%E5%AE%AB%E5%B9%BB%E5%8D%A1%E5%8D%A1%E7%89%8C
// @grant        none
// ==/UserScript==

(function()
{
    var show_has = true;
    var is_import = false;
    $("body").append(
        "<div class='' style= 'z-index: 100; bottom: -4px;position: fixed; color:white; display: inline; left: 2px;right: auto;'>" +
        "幻卡数量" +
        "<p id='card_num'></p>" +
        "<button id='hide_card' style='color:#000;'>隐藏获得幻卡</button>" +
        "</div>" +
        "<div style= 'z-index: 100; bottom: -4px;position: fixed; color:white; display: inline; right: 2px;left: auto;'>" +
        "<button id='record_import' style='display: block;color: #000;'>导入</button><button id='record_export' style='color: #000;'>导出</button></div>" +
        "<div id='message_box' style='background-color: rgba(128,128,128,.5); display: none; z-index: 100; position: fixed; top:50%; left: 50%;height: 30rem;width: 40rem;padding: .8rem;'>" +
        "<form style='width:100%;height: 80%;padding: .2rem;'><p id='message_tips' style='color:white;font-size: 2rem;'></p><textarea id='message_string' style='height: 100%;width: 100%'></textarea></form>" +
        "<p style='float: right;margin: 0.6rem;bottom:0;right:0;position: absolute;'><button id='message_confirm'>确定</button><button id='message_cancel'>取消</button></p>" +
        "</div>"
    );
    var has_num = 0;
    var total_num = 0;
    var is_hidden = false;
    $("#hide_card").click(function()
    {
        is_hidden = !is_hidden;
        var has_group = $("tbody > tr").find(":checked");
        if (is_hidden)
        {
            has_group.parents("tr").hide();
        }
        else
        {
            $(".filter-div--button.filter-div--button-style.selected").trigger("click");
        }
        $(this).text(is_hidden ? "显示获得幻卡" : "隐藏获得幻卡");
    });
    $(".filter-div--button.filter-div--button-style").click(function()
    {
        if (is_hidden)
        {
            setTimeout(function()
            {
                $("tbody > tr").find(":checked").parents("tr").hide();
            }, 180);
        }
    });
    $("#record_export").click(function()
    {
        var tr = $(".wikitable").children("tbody").children("tr");
        total_num = tr.length;
        var record_result = {};
        tr.each(function()
        {
            var name = $(this).find('img').attr('alt') + "";
            var id = name.substr(0, name.lastIndexOf('.'));
            var data = localStorage.getItem(id);
            if (data != null && data == 1)
            {
                record_result[id] = 1;
            }
        });
        //prompt("当前存储数据，请自行复制！", (JSON.stringify(record_result)));
        $("#message_box").css("display", "inline");
        $("#message_string").text(JSON.stringify((record_result)));
        $("#message_tips").text("以下为当前存储数据，请自行复制！");
        is_import = false;
    });
    $("#record_import").click(function()
    {
        $("#message_box").css("display", "inline");
        $("#message_string").text("");
        $("#message_tips").text("请粘贴导出的数据，并确认。");
        is_import = true;
    });
    $("#message_confirm").click(function()
    {
        $("#message_box").css("display", "none");
        if (is_import)
        {
            var str = $("#message_string").val();
            try
            {
                var record = JSON.parse(str);
                for (var i in record)
                {
                    localStorage.setItem(i, record[i]);
                }
                alert("导入成功");
                location.reload();
            }
            catch (e)
            {
                console.log(e);
                alert("导入失败，请打开控制台查看详情。");
                location.reload();
            }
        }
    });
    $("#message_cancel").click(function()
    {
        $("#message_box").css("display", "none");
    });

    window.onload = function()
    {
        setTimeout(function()
        {
            var thead_tr = $(".wikitable").children("thead").children("tr");
            var tr = $(".wikitable").children("tbody").children("tr");
            if (thead_tr.length != 0)
            {
                thead_tr.prepend('<th>记录</th>');
            }
            else
            {
                $(".wikitable > thead").append($(tr[0]));
                tr = $(".wikitable").children("tbody").children("tr");
                $("thead > tr").prepend('<th>记录</th>');
            }

            total_num = tr.length;
            tr.each(function()
            {
                var name = $(this).find('img').attr('alt') + "";
                var id = name.substr(0, name.lastIndexOf('.'));
                var data = localStorage.getItem(id);
                var isChecked = data != null && data == 1;
                if (isChecked)
                {
                    $(this).css("cssText", "opacity:0.3 !important;");
                    has_num++;
                }
                $(this).prepend('<td><input class="havecard" id="{0}" value="{0}" type="checkbox" {1}/></td>'.format(id, (isChecked ? 'checked="checked"' : '')));
            });
            $(".havecard").change(function()
            {
                var id = $(this).attr('id');
                var checked = $(this).prop('checked');
                has_num += checked ? +1 : -1;
                localStorage.setItem(id, checked ? 1 : 0);
                $(this).parents("tr").css(
                {
                    "opacity": (checked ? "0.3" : "1"),
                    "display": is_hidden ? "none" : "table-row"
                });
                Load_Num();
            });
            Load_Num();
        }, 250);
    };

    function Load_Num()
    {
        $("#card_num").html("{0}/{1}<br/>{2}%".format(has_num, total_num, Math.round((has_num / total_num) * 10000) / 100));
    }

    String.prototype.format = function(args)
    {
        var result = this;
        if (arguments.length > 0)
        {
            if (arguments.length == 1 && typeof(args) == "object")
            {
                for (var key in args)
                {
                    if (args[key] != undefined)
                    {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else
            {
                for (var i = 0; i < arguments.length; i++)
                {
                    if (arguments[i] != undefined)
                    {
                        var reg = new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    };
})();