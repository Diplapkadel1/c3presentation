// Adsterra Universal Ads for Non-AMP Pages
(function(){
  // skip AMP pages
  if(window.location.search.indexOf('amp=1') !== -1) return;

  function injectAd(key, width, height){
    // container div for each ad
    var container = document.createElement('div');
    container.style.textAlign = "center";
    container.style.margin = "10px auto";

    // ad label
    var label = document.createElement('div');
    label.innerText = "Advertisement";
    label.style.fontWeight = "700";
    label.style.color = "#ffb74d";
    label.style.fontSize = "14px";
    label.style.marginBottom = "4px";
    container.appendChild(label);

    // create the Adsterra script
    var s1 = document.createElement('script');
    s1.type = 'text/javascript';
    s1.innerHTML = "atOptions = {key:'"+key+"',format:'iframe',height:"+height+",width:"+width+",params:{}};";

    var s2 = document.createElement('script');
    s2.type = 'text/javascript';
    s2.src = "//sponsorinserttimeout.com/"+key+"/invoke.js";

    container.appendChild(s1);
    container.appendChild(s2);

    document.body.appendChild(container);
  }

  // Inject Banner 468x60
  injectAd('3c4c9775031a839da7419e0d8d29b487', 468, 60);

  // Inject Banner 728x90
  injectAd('23a7306f3746baf5e282220accc0ec36', 728, 90);

})();
