chrome.runtime.onInstalled.addListener(() => {
    // on install here (open ucoiin.com/signin)
    chrome.tabs.create({ url: "https://ucoiin.com/signin" });
    // we need to close this as soon as the user signs in.

  });

  // This recieves information from content.js if url == ucoiin.com/signin.
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    usr = request;

    if (usr.id.length <= 128) { // this is a facebook user
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

    if (usr.id.length > 128) { // this is a google user
      console.log("Google Client")
      id = request.id;
      if (id.length > 128) {
        id = id.slice(0, 128);
      }
      else {
        id = request.id;
      };
      id = id.replace(".", "");

      chrome.storage.local.set(
        { id: id,
          name: request.name,
          thr: 1
        },
        
         function() {
        console.log("User Stored")
      });

      return;
    }
  });
