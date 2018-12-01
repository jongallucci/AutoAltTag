chrome.browserAction.onClicked.addListener(clicked);

function clicked(tab) {
  console.log("background");

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "begin");
  });
}