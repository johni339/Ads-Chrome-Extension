chrome.browserAction.setBadgeText({text: "On"});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if(tab.url.indexOf("thetimecave.com") != -1 || tab.url.indexOf("dailygreatest.com") != -1 || tab.url.indexOf("wittyfeed.com") != -1){
        insertScripts(tab);
    }
});

function insertScripts(tab){
    if (tab.status == 'complete') {
        chrome.tabs.executeScript(tab.id, {file: "js/ChromeJQuery.js"});
        chrome.tabs.executeScript(tab.id, {file: "js/ChromeScript.js"});
    }
}