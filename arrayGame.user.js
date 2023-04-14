// ==UserScript==
// @name         arrayGame
// @namespace    15x15
// @version      0.2
// @description  try to take over the world!
// @author       15x15
// @match        https://demonin.com/games/arrayGame/
// @icon         https://icons.duckduckgo.com/ip2/demonin.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case "a":
                buyUpgrade(1,4)
                for(let i=5;i>=1;i--){
                    buyMaxGenerators(1,i)
                }
                event.preventDefault();
                break;
            case "s":
                save()
                event.preventDefault();
                // code for "up arrow" key press.
                break;
            case "b":
                buyMaxABoosterators()
                for(let i=5;i>=1;i--){
                    buyMaxGenerators(2,i)
                }
                event.preventDefault();
                // code for "left arrow" key press.
                break;
            case "q":
                game.timeOfLastUpdate=game.timeOfLastUpdate-3600000
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    });
})();
