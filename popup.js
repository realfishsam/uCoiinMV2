window.onload = function() {
    throttle = document.getElementById("throttle");

    chrome.storage.local.get(["id", "thr"], function(result) {
        thr = result.thr;
        throttle.value = thr;

        id = result.id;
        async function getUSD(usrid) {
            usdconversion = await fetch("http://ucoiin.com/convert");
            usdconversion = await usdconversion.json();
            usdconversion = usdconversion.price

            ting = await fetch(`http://ucoiin.com/user?id=${usrid}`)
            ting = await ting.json();
            console.log(ting.message.pending);
    
            // tenmillion = 10000000
    
            // now convert hashes to mintme
            mint = ting.message.pending / 10000000
    
            usd = Math.round(mint * usdconversion * 100) / 100;
            console.log(usd);

            money = document.getElementById("money");
            money.innerHTML = `$${usd}`; 
            money.setAttribute("class", "white-text");

        }        
        usd = getUSD(id);


        if(typeof id === undefined) {
            console.log("User is not signed in.")
            document.getElementById("main").innerHTML = "Please sign in via https://ucoiin.com/signin"

        }

        else {
            return;
        };

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
