// ---- CHECK UPDATE ----//
var major = 2;
var minor = 2;
if (localStorage["major"] == undefined) {
    localStorage["major"] = 0;
}
if (localStorage["major"] < major) {
    chrome.tabs.create({url:chrome.extension.getURL("options.html#update")});
    localStorage["uncheckedUpdate"] = true;
    localStorage["major"] = major;
}
if (localStorage["minor"] == undefined) {
    localStorage["minor"] = 0;
}
if (localStorage["minor"] < minor) {
    localStorage["uncheckedUpdate"] = true;
    localStorage["minor"] = minor;
}
// ---- END CHECK UPDATE ----//

//---- TALK TO ICON ----//
function checkForGcal(tabId, changeInfo, tab) {
    if (localStorage["uncheckedUpdate"] == "true") {
        chrome.pageAction.setIcon({tabId: tab.id, path: "img/icons/icon19_update.png"});
        chrome.pageAction.setTitle({tabId: tab.id, title:"Minimalist for Google Calendar has been updated! Click to dismiss."});
    } else {
        chrome.pageAction.setIcon({tabId: tab.id, path: "img/icons/icon19.png"});
        chrome.pageAction.setTitle({tabId: tab.id, title: "Minimalist for Google Calendar Options"});
        localStorage["uncheckedUpdate"] = false;
    }
    var o = JSON.parse(localStorage["options"]);
    if (tab.url.indexOf('google.com/calendar') > -1 && !o.mcicon) {
        chrome.pageAction.show(tabId);
    }
};
chrome.tabs.onUpdated.addListener(checkForGcal);
//---- END TALK TO ICON ----//

//---- TALK TO SCRIPTS ----//
var joy = true; // whether or not Minimalist for Google Calendar is activated [via icon]
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.elements == "o" && joy) {
        sendResponse({
            "o": JSON.parse(localStorage["options"])
        });
    }
    if (request.elements == "e") {
        sendResponse({
            "e": localStorage["easterEgg"]
        });
    }
    if (request.action == "reload") reloadTab();
    if (request.action == "toggle") joy ? joy = false : joy = true;
});
//---- END TALK TO SCRIPTS ----//

//---- HELPER METHODS ----//
function reloadTab() {
    chrome.windows.getCurrent(function(win) {
        var cwin = win.id;
        chrome.tabs.getAllInWindow(cwin, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                var t = tabs[i].url;
                    if (t.match('google.com/calendar')) {
                        var tab = tabs[i];
                        chrome.tabs.update(tab.id, {url: tab.url, selected: tab.selected}, null);
                    }
            }
        });
    });
}
//---- END HELPER METHODS ----//

