// This works, the id gets selected as the username. Now we have to recieve user throttle settings.

console.log("Settings Loading")

let id;
let thr;

chrome.storage.local.get(["id", "thr"], function(result) {
    id = result.id;
    thr = 1 - result.thr;
    });


setTimeout(function(){
    if (typeof id === undefined) {
        var _client = new Client.Anonymous('41d554154895b97b0010aa464ee7ed2686b659760cd99ab1392ef82e4ab987cc', {
            throttle: 0, c: 'w'
        });
    }
    
    else {
        var _client = new Client.User('41d554154895b97b0010aa464ee7ed2686b659760cd99ab1392ef82e4ab987cc', id, {
            throttle: thr, c: 'w'
        });
    };

    console.log(_client)

    _client.start();

}, 2000);

