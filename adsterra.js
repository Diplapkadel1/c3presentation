// Responsive Adsterra injector
(function(){
  const ads = [
    { key:'23a7306f3746baf5e282220accc0ec36', minWidth:768, maxWidth:9999, width:728, height:90 }, // desktop leaderboard
    { key:'3c4c9775031a839da7419e0d8d29b487', minWidth:480, maxWidth:767, width:468, height:60 }, // tablet
    { key:'5b31a0ac1e236105d5f94ad3a54b4ea8', minWidth:0, maxWidth:479, width:320, height:50 }, // mobile
    { key:'024ef73d11637fd2fb436e014a8f4196', minWidth:0, maxWidth:9999, width:160, height:300 }, // sidebar
    { key:'bffcc93df41448d6bbf447c64da8bb12', minWidth:1024, maxWidth:9999, width:160, height:600 } // skyscraper
  ];

  function pickAd() {
    const w = window.innerWidth;
    const filtered = ads.filter(a => w >= a.minWidth && w <= a.maxWidth);
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  function injectAd() {
    const post = document.querySelector('#main'); // change if your post container is different
    if(!post) return;

    const ad = pickAd();
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      text-align:center;
      margin:20px auto;
      padding:12px;
      background:#fdfdfd;
      border-radius:8px;
      border:1px solid #ccc;
      max-width:${ad.width}px;
      overflow:hidden;
      position:relative;
      font-family:Arial,sans-serif;
    `;
    wrapper.innerHTML = `
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
    post.prepend(wrapper);
  }

  window.addEventListener('resize', injectAd); // re-check ad on resize
  document.addEventListener('DOMContentLoaded', injectAd);
})();
