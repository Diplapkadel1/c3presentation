(function() {
    const TARGET_URL = "https://robeheadlong.com/nhr0t2ewi3?key=9db44ef69b69e083cab6f7c77a238a6d";
    const BASE_URL = "https://www.saishuu-hentai.net/hmoviepic/";
    const IMAGE_API = "https://c3.unaux.com/images.php";
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

    // Fetch image list
    window.initGKGadget = async function(btnId, txtId, wrapperId) {
        const btn = document.getElementById(btnId);
        const txt = document.getElementById(txtId);
        const wrap = document.getElementById(wrapperId);

        try {
            const res = await fetch(IMAGE_API);
            const files = await res.json();
            images = files.map(f => BASE_URL + decodeURIComponent(f));
        } catch (e) {
            console.error("Failed to load images", e);
            images = [];
        }

        // Function to update the button image and message
        function update() {
            if (!images.length) return;

            const img = images[Math.floor(Math.random() * images.length)];
            const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

            // Smooth background change effect
            btn.style.transition = "background-image 1s ease-in-out";
            btn.style.backgroundImage = `url('${img}')`;

            // Update the message on the button
            txt.innerText = msg;
        }

        // Keep updating the image every 5-7 seconds (let's use 6 seconds)
        setInterval(update, 6000);

        // Initial update
        update();

        // Don't show the "I TOLD YOU" message, just keep showing images after the first click
        btn.onclick = function() {
            localStorage.setItem('gk_clicked', 'true');
            // Prevent refresh, just keep showing images
            window.location.href = TARGET_URL;
        };
    };
})();
