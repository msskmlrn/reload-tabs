//call the reloadTabs function when the extension icon is clicked
chrome.browserAction.onClicked.addListener(reloadTabs);

//reload all of the current window's tabs
function reloadTabs() {
	chrome.tabs.query({currentWindow: true}, function(tabs) {
    	for (var i = 0; i < tabs.length; i++) {
       		chrome.tabs.reload(tabs[i].id);
    	}    	
    });
};

//listen for key presses
chrome.commands.onCommand.addListener(function(command) {
    if (command == "reload-tabs") {
	    reloadTabs();
	}    
});
