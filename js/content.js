chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  // user has clicked the button, begin parsing img tags

  var allImg = document.getElementsByTagName("img");



  // nice
}