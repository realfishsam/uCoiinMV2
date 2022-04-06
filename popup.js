window.onload = function() {
    foo = document.getElementById("throttle");
    // foo.value = 40; // This works

    chrome.storage.local.get(["id", "thr"], function(result) {
        thr = result.thr;

        foo.value = thr;

        });

}

document.getElementById("withdraw").onclick = function () {
    window.open("https://ucoiin.com/withdraw");
}

document.getElementById("throttle").oninput = function () {
    thr = document.getElementById("throttle").value;
    console.log(thr)

    chrome.storage.local.set({thr: thr}, function() {
      });
}
