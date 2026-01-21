(function() {
    const TARGET_URL = "https://robeheadlong.com/nhr0t2ewi3?key=9db44ef69b69e083cab6f7c77a238a6d";
    const BASE_URL = "https://www.saishuu-hentai.net/hmoviepic/";
    const IMAGE_API = "https://nepalwebsite.ct.ws/images.php";
    const MESSAGES = [
        "Are you alone?",
        "Don't click me",
        "Are you afraid?",
        "Can you resist?",
        "Touch to see",
        "What's inside?",
        "Are you brave?",
        "Look closer..."
    ];

    let images = [];

    window.initGKGadget = async function(btnId, txtId, wrapperId) {
        const btn = document.getElementById(btnId);
        const txt = document.getElementById(txtId);
        const wrap = document.getElementById(wrapperId);

        // Fetch images
        try {
            const res = await fetch(IMAGE_API);
            const files = await res.json();
            images = files.map(f => BASE_URL + decodeURIComponent(f));
        } catch(e) {
            console.error("Failed to load images", e);
            images = [];
        }

        function showScold() {
            btn.style.display = 'none';
            wrap.innerHTML = '<div style="color:#ff0055;font-size:14px;font-weight:900;padding:5px;text-align:center;">I TOLD YOU.</div>';
            setTimeout(() => location.reload(), 5000); // refresh after 5s
        }

        if(localStorage.getItem('gk_clicked') === 'true') {
            showScold();
            return;
        }

        function update() {
            if(!images.length) return;
            const img = images[Math.floor(Math.random() * images.length)];
            const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            btn.style.backgroundImage = `url('${img}')`;
            txt.innerText = msg;
        }

        btn.onclick = function() {
            localStorage.setItem('gk_clicked', 'true');
            showScold();
            window.location.href = TARGET_URL;
        }

        update();
        setInterval(update, 5000); // slow down rotation to every 5 seconds
    };
})();
