chrome.runtime.onInstalled.addListener(() => {
    // on install here (open ucoiin.com/signin)
    chrome.tabs.create({ url: "https://ucoiin.com/signin" });
    // we need to close this as soon as the user signs in.

  });

// This gets injected through manifest.json hence the below code is not needed.
  /*
chrome.tabs.onUpdated.addListener(function (tabId , info) {
  if (info.status === 'complete') {
    chrome.tabs.executeScript({
      file: 'q8sc.js'
    });
  }
});
*/
