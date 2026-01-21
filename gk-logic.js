(function() {
    let images = [];
    const messages = [
        "Are you alone?", "Don't click me", "Are you afraid?", 
        "Can you resist?", "Touch to see", "What's inside?", 
        "Are you brave?", "Look closer..."
    ];

    window.initGKGadget = async function(btnId, txtId) {
        const btn = document.getElementById(btnId);
        const txt = document.getElementById(txtId);

        // Fetch images from your PHP
        try {
            const res = await fetch('https://nepalwebsite.ct.ws/images.php');
            images = await res.json();
        } catch(e) {
            console.error("Image fetch failed");
        }

        function update() {
            if(!images || images.length === 0) return;
            const randomImg = images[Math.floor(Math.random() * images.length)];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];

            btn.style.opacity = 0.8;
            setTimeout(() => {
                btn.style.backgroundImage = `url('${randomImg}')`;
                txt.innerText = randomMsg;
                btn.style.opacity = 1;
            }, 400);
        }

        if (images.length > 0) update();
        setInterval(update, 2200);
    };
})();
