chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({'file': 'div_extractor.js'});
});
