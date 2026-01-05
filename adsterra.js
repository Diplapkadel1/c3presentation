// adsterra.js - universal post ad injector
(function(){
  const ads = [
    { key: '23a7306f3746baf5e282220accc0ec36', width: 728, height: 90 },
    { key: '3c4c9775031a839da7419e0d8d29b487', width: 468, height: 60 },
    { key: '024ef73d11637fd2fb436e014a8f4196', width: 160, height: 300 },
    { key: '5b31a0ac1e236105d5f94ad3a54b4ea8', width: 320, height: 50 },
    { key: 'bffcc93df41448d6bbf447c64da8bb12', width: 160, height: 600 }
  ];

  // pick a random ad
  function pickAd() {
    return ads[Math.floor(Math.random() * ads.length)];
  }

  function injectAd() {
    const post = document.querySelector('#main'); // change to post container ID/class
    if(!post) return;

    const ad = pickAd();
    const adWrapper = document.createElement('div');
    adWrapper.style.cssText = `
      text-align:center;
      margin:20px auto;
      padding:12px;
      background:#fafafa;
      border-radius:8px;
      border:1px solid #ccc;
      max-width:${ad.width}px;
      overflow:hidden;
      position:relative;
      font-family:Arial,sans-serif;
    `;
    adWrapper.innerHTML = `
      <div style="font-weight:700;color:#ff9800;font-size:12px;margin-bottom:6px;">Advertisement</div>
      <script type="text/javascript">
        atOptions = {
          key:'${ad.key}',
          format:'iframe',
          width:${ad.width},
          height:${ad.height},
          params:{}
        };
      </script>
      <script type="text/javascript" src="//sponsorinserttimeout.com/${ad.key}/invoke.js"></script>
      <span onclick="this.parentElement.style.display='none'" style="position:absolute;top:2px;right:6px;font-size:14px;color:#999;cursor:pointer;">✕</span>
    `;

    post.prepend(adWrapper); // inject at top of post
  }

  // auto-refresh every 60 seconds
  setInterval(function(){
    injectAd();
  }, 60000);

  // initial injection
  document.addEventListener('DOMContentLoaded', injectAd);
})();
