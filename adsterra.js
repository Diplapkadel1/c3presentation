(function(){
  // --- List of all your ads ---
  var ads = [
    {key:'23a7306f3746baf5e282220accc0ec36', width:728, height:90},   // 728x90
    {key:'3c4c9775031a839da7419e0d8d29b487', width:468, height:60},   // 468x60
    {key:'024ef73d11637fd2fb436e014a8f4196', width:160, height:300},  // 160x300
    {key:'5b31a0ac1e236105d5f94ad3a54b4ea8', width:320, height:50},   // 320x50
    {key:'bffcc93df41448d6bbf447c64da8bb12', width:160, height:600}   // 160x600
  ];

  // --- Pick a random ad ---
  var ad = ads[Math.floor(Math.random()*ads.length)];

  // --- Create container box ---
  var box = document.createElement('div');
  box.style.cssText = `
    text-align:center;
    margin:20px auto;
    padding:10px;
    background:#fff8e1;
    border:1px solid #ffcc80;
    border-radius:8px;
    max-width:${ad.width}px;
    box-shadow:0 3px 6px rgba(0,0,0,0.1);
    font-family:Arial,sans-serif;
  `;

  // --- Label ---
  var label = document.createElement('div');
  label.innerText = "Advertisement";
  label.style.cssText = `
    font-weight:700;
    font-size:13px;
    color:#ff9800;
    margin-bottom:6px;
    letter-spacing:0.5px;
  `;
  box.appendChild(label);

  // --- Adsterra inline script ---
  var s1 = document.createElement('script');
  s1.type = "text/javascript";
  s1.innerHTML = `
    atOptions = {
      key:'${ad.key}',
      format:'iframe',
      height:${ad.height},
      width:${ad.width},
      params:{}
    };
  `;
  box.appendChild(s1);

  // --- Adsterra loader ---
  var s2 = document.createElement('script');
  s2.src = "//sponsorinserttimeout.com/"+ad.key+"/invoke.js";
  box.appendChild(s2);

  // --- Insert into first post or body ---
  var container = document.querySelector('#main') || document.body;
  container.insertBefore(box, container.firstChild);
})();
