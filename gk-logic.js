(function() {
    const targetUrl = "https://robeheadlong.com/nhr0t2ewi3?key=9db44ef69b69e083cab6f7c77a238a6d";
    const BASE_URL = "https://www.saishuu-hentai.net/hmoviepic/";
    let images = [];
    const messages = [
        "Are you alone?",
        "Don't click me",
        "Are you afraid?",
        "Can you resist?",
        "Touch to see",
        "What's inside?",
        "Are you brave?",
        "Look closer..."
    ];

    window.initGKGadget = async function(btnId, txtId, wrapperId) {
        const btn = document.getElementById(btnId);
        const txt = document.getElementById(txtId);
        const wrap = document.getElementById(wrapperId);

        try {
            const res = await fetch('https://nepalwebsite.ct.ws/images.php');
            if (!res.ok) throw new Error("Failed to load images");
            images = await res.json();
        } catch(e) {
            images = [];
            console.error(e);
        }

        if (localStorage.getItem('gk_clicked') === 'true') {
            btn.style.display = 'none';
            wrap.innerHTML = '<div style="color:#ff0055; font-size:24px; font-weight:900; padding:20px;">I TOLD YOU.</div>';
            return;
        }

        function update() {
            if(images.length === 0) return;
            const randomImg = BASE_URL + images[Math.floor(Math.random() * images.length)];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];

            btn.style.opacity = 0.7;
            setTimeout(() => {
                btn.style.backgroundImage = `url('${randomImg}')`;
                txt.innerText = randomMsg;
                btn.style.opacity = 1;
            }, 400);
        }

        btn.onclick = function() {
            localStorage.setItem('gk_clicked', 'true');
            window.location.href = targetUrl;
        };

        setInterval(update, 2200);
        update();
    };
})();
