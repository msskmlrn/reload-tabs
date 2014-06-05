function reloadTabs() {
	chrome.tabs.query({currentWindow: true}, function(tabs) {
    	for (var i = 0; i < tabs.length; i++) {
       		chrome.tabs.reload(tabs[i].id);
    	}    	
    });
}

// When the browser action is clicked, call the function
chrome.browserAction.onClicked.addListener(reloadTabs);
