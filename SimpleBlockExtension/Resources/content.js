/*
 
 browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
 console.log("Received response: ", response);
 });
 
 browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
 console.log("Received request: ", request);
 });
 
 */

// this is an affront to decency, but we have little control over timing
(function(i) {
    if (i) {
        document.body.querySelectorAll("div.ytp-ad-skip-button-text").forEach( (el) => {el.click();} );
        setTimeout(() => {arguments.callee(--i);}, 100);
    } else {
        document.body.querySelectorAll("div.ytp-ad-module").forEach( (el) => {el.remove();} );
    }
})(50);

