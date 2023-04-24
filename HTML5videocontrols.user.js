// ==UserScript==
// @name         HTML5videocontrols
// @namespace    15x15
// @version      0.1
// @description  Adds controls to HTML5 videos
// @match        *://*/*
// @grant        none
// ==/UserScript==

// https://www.reddit.com/comments/861sot/comment/dw20hdm
(function() {
    'use strict';

    function addVideoControls(videoNode) {
        videoNode.setAttribute("controls", "");
        console.log("*** Enabled HTML 5 video controls for", videoNode);
    }

    for (let el of document.getElementsByTagName("video")) {
        addVideoControls(el);
    }

    const observer = new MutationObserver(mutations => {
        for (let i = 0, mLen = mutations.length; i < mLen; ++i) {
            let mutation = mutations[i];
            if (mutation.type === "childList") {
                for (let j = 0, aLen = mutation.addedNodes.length; j < aLen; ++j) {
                    let addedNode = mutation.addedNodes[j];
                    if (addedNode.nodeType === 1 && addedNode.tagName === "VIDEO") {
                        addVideoControls(addedNode);console.log("***VIDEO");
                    }
                    else if(addedNode.nodeType === 1){
                        addedNode.querySelectorAll("video").forEach(node=>{
                            addVideoControls(node);
                        });
                    }
                }
            }
        }
    });


    observer.observe(document.body, {childList: true, subtree: true});
})();
