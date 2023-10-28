
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
    console.log("content.js running");

    
} + ')();';

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

/*
 
 {"id":1000,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/error_204.*",}},
 {"id":1001,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/generate_204.*",}},
 {"id":1002,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?googlevideo\\.com/generate_204.*",}},
 {"id":1003,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/pagead/.*",}},
 {"id":1004,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/ad.*",}},
 {"id":1005,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/qoe.*",}},
 {"id":1006,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/atr.*",}},
 {"id":1007,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/watchtime.*",}},
 {"id":1008,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/delayplay.*",}},
 {"id":1009,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/api/stats/playback.*",}},
 {"id":1010,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/ptracking.*",}},
 {"id":1017,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/youtubei/v1/log_even.*",}},
 {"id":1018,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?play\\.google\\.com/log.*",}},
 {"id":1019,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?google\\.com/pagead/.*",}},
 {"id":1020,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?youtube\\.com/pcs/activeview.*",}},
 {"id":1001,"priority":1,"action":{"type":"block"},"condition":{"regexFilter":"http(s)?://(.*\\.)?ytimg\\.com/generate_204.*",}},
 
 */
