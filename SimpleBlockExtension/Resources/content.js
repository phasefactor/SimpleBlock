
// this is an affront to decency, but we have little control over timing
/*
(function(i) {
    if (i) {
        document.body.querySelectorAll("div.ytp-ad-skip-button-text").forEach( (el) => {el.click();} );
        setTimeout(() => {arguments.callee(--i);}, 100);
    } else {
        document.body.querySelectorAll("div.ytp-ad-module").forEach( (el) => {el.remove();} );
    }
})(50);
*/


//
// Based on code from:
// https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-using-a-content-script
// Specifically, answer: https://stackoverflow.com/a/9517879
//

var actualCode = '(' + function() {
    _XMLHttpRequest = XMLHttpRequest;

    XMLHttpRequest = function () {
        var x = new _XMLHttpRequest();

        var _open = x.open;
        var _setRequestHeader = x.setRequestHeader;
        
        x.open = function() {
            
            arguments[1] = arguments[1].split("?")[0];
            
            if (arguments[1].includes("youtube.com/api/stats/")) {
                console.log("XHR", arguments[1]);
            }
                
            return _open.apply(this, arguments);
        }
        
        x.setRequestHeader = function() {
         //   if (arguments[0] == "X-YouTube-Ad-Signals") {
         //       console.log("dropping");
                return;
       //     }
            
       //     return _setRequestHeader.apply(this, arguments);
        }
        
        return x;
    };
} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();


