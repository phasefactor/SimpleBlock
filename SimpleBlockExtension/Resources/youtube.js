//
// Inject a script into the main window execution context
//
// Based on code from:
// https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-using-a-content-script
// Specifically, answer: https://stackoverflow.com/a/9517879
//

var actualCode = '(' + function() {
    console.log("content.js running");
/*
    _fetch = fetch;
    let _vid = "";
    let _loc = "";
    
    fetch = function () {
        let url = "";
        
        if (arguments[0] instanceof Request) {
            url = arguments[0].url;
        } else {
            url = arguments[0];
        }
        
        
        if (url.includes("googlevideo.com/videoplayback")) {
            let params = new URLSearchParams(url);
            
            
            let id = params.get("id");
            
            if (_loc != window.location.href) {
                console.log("new location");
                _loc = window.location.href;
                _vid = "";
            }
            
            if (id != null) {
                if (_vid == "") {
                    _vid = id;
                    console.log("new id");
                }
                
                if (_vid != id) {
               //     arguments = [];
                    console.log("dropping fetch for ID:", id);
                } else {
                    console.log("fetching ID:", id);
                }
            }
        }
        
        return _fetch.apply(this, arguments);
    }
*/
    
} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

/*
 
 */
