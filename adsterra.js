(function(){
  const ads = [
    { key:'23a7306f3746baf5e282220accc0ec36', minWidth:768, maxWidth:9999, width:728, height:90 },
    { key:'3c4c9775031a839da7419e0d8d29b487', minWidth:480, maxWidth:767, width:468, height:60 },
    { key:'5b31a0ac1e236105d5f94ad3a54b4ea8', minWidth:0, maxWidth:479, width:320, height:50 },
    { key:'024ef73d11637fd2fb436e014a8f4196', minWidth:0, maxWidth:9999, width:160, height:300 },
    { key:'bffcc93df41448d6bbf447c64da8bb12', minWidth:1024, maxWidth:9999, width:160, height:600 }
  ];

  function pickAd() {
    const w = window.innerWidth;
    const filtered = ads.filter(a => w >= a.minWidth && w <= a.maxWidth);
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  function injectAd() {
    const post = document.querySelector('#main'); // Change to your post container
    if(!post) return;

    // Avoid injecting multiple times
    if(document.querySelector('.dynamic-adsterra')) return;

    const ad = pickAd();
    const wrapper = document.createElement('div');
    wrapper.className = 'dynamic-adsterra';
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

    // Label
    const label = document.createElement('div');
    label.style.cssText = 'font-weight:700;color:#ff9800;font-size:12px;margin-bottom:6px;';
    label.innerText = 'Advertisement';
    wrapper.appendChild(label);

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.style.cssText = 'position:absolute;top:2px;right:6px;font-size:14px;color:#999;cursor:pointer;';
    closeBtn.innerText = '✕';
    closeBtn.onclick = () => wrapper.style.display='none';
    wrapper.appendChild(closeBtn);

    // Create Adsterra script dynamically
    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.innerHTML = `atOptions = {
      key:'${ad.key}',
      format:'iframe',
      width:${ad.width},
      height:${ad.height},
      params:{}
    };`;
    wrapper.appendChild(adScript);

    const adInvoke = document.createElement('script');
    adInvoke.src = `//sponsorinserttimeout.com/${ad.key}/invoke.js`;
    wrapper.appendChild(adInvoke);

    // Inject into post
    post.prepend(wrapper);
  }

  window.addEventListener('resize', () => {
    // Optional: remove old ad and inject new
    const old = document.querySelector('.dynamic-adsterra');
    if(old) old.remove();
    injectAd();
  });

  document.addEventListener('DOMContentLoaded', injectAd);
})();
