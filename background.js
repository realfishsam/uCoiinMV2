chrome.runtime.onInstalled.addListener(() => {
    // on install here (open ucoiin.com/signin)
    chrome.tabs.create({ url: "https://ucoiin.com/signin" });
    // we need to close this as soon as the user signs in.

  });

  // This recieves information from content.js if url == ucoiin.com/signin.
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    usr = request;
    console.log(usr)

    if (request.id_token === undefined) { // this is a facebook user
      // This should store usr json in users local and synced storage so in miner we can set username.
      console.log("Facebook Client")
      
      chrome.storage.local.set(
        { id: request.id,
          name: request.name,
          thr: 1
        },
         function() {
        console.log("User Stored")
      });

      return;
    }

    if (request.id_token != undefined) { // this is a google user
      console.log("Google Client")
      /*
      chrome.storage.local.set(usr, function() {
        console.log("User Stored")
      });
      */
      return;
    }
  });
