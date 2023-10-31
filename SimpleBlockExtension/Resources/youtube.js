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
    
    // script injection code
} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
