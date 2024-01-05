//
// Inject a script into the main window execution context
//
// Based on code from:
// https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-using-a-content-script
// Specifically, answer: https://stackoverflow.com/a/9517879
//

var actualCode = '(' + function() {
    
    // injected code
    console.log("content.js running");
    
    _fetch = fetch;
    
    fetch = function () {
        let url = "";
        
        if (arguments[0] instanceof Request) {
            url = arguments[0].url;
        } else {
            url = arguments[0];
        }
            
        // attempting to identity what is an ad
     //   if (url.includes("googlevideo.com/videoplayback")) {
            // let params = new URLSearchParams(url.split("?")[1]);
            // url = url.split("?")[0] + "?" + params.toString();
     //       if (url.split("?")[1].includes("ctier=")) {
           //     console.log("DROPPING FETCH", arguments[0]);
          //      url = "http://127.0.0.1";
     //       }
     //   }
        
        
        if (arguments[0] instanceof Request) {
            arguments[0].url = url;
        } else {
            arguments[0] = url;
        }
        
        return _fetch.apply(this, arguments);
    }
    
    
    // cleans up the stream of error messages in the console
    setTimeout(() => {
        if (yt) {
            // setting these null seems to stop the console spam
            yt.ads = null;
            yt.ads_ = null;
        }
    }, 2000);
    
/*
    let waitForAd = function () {
        if (!document.querySelectorAll(".html5-video-player:not(.ad-showing):not(.ytp-ad-overlay-open)").length) {
            // showing an ad
            console.log("Ad running");
            console.log("trying to clear ad");
            let button = document.querySelectorAll(".ytp-ad-skip-button-slot");
            
            if (button.length) {
                button[0].click();
            }
            
        } else {
            // keep waiting
            console.log("No ad");
        }
        
        setTimeout(waitForAd, 1000);
    };
    
    setTimeout(waitForAd, 1000);
 */
 
 
// script injection code
} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
