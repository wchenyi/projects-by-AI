// js/effects.js

// --- 鼠标点击爱心特效 ---
export function initClickEffect() {
    const body = document.body;
    body.addEventListener("click", function(e) {
        const hearts = [];
        const x = e.pageX;
        const y = e.pageY;
        
        for (let i = 0; i < 5 + Math.round(Math.random() * 5); i++) {
            const heart = document.createElement("span");
            heart.innerHTML = "❤";
            heart.style.cssText = "position: absolute; left: -100%; top: -100%; font-size: 16px; color: red; user-select: none; pointer-events: none; z-index: 9999;";
            body.appendChild(heart);
            hearts.push(heart);
        }

        requestAnimationFrame(function animate() {
            for (let i = 0; i < hearts.length; i++) {
                const heart = hearts[i];
                if (heart.style.opacity <= 0) {
                    heart.remove();
                    hearts.splice(i, 1);
                    continue;
                }
                heart.style.opacity = heart.style.opacity || 1;
                heart.style.left = (heart.style.left.replace('%', '') * 1 || x) + (i % 2 == 0 ? 1 : -1) * i * Math.random() + "px";
                heart.style.top = (heart.style.top.replace('%', '') * 1 || y) - (2 + Math.random() * 4) + "px";
                heart.style.opacity -= 0.01;
            }
            if (hearts.length > 0) {
                requestAnimationFrame(animate);
            }
        });
    });
}

// --- 樱花飘落特效 ---
export function initSakuraEffect() {
    const sakuraContainer = document.createElement('div');
    sakuraContainer.className = 'fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden';
    document.body.appendChild(sakuraContainer);

    const sakuraCount = 30;

    for (let i = 0; i < sakuraCount; i++) {
        const sakura = document.createElement('div');
        sakura.innerHTML = '🌸';
        sakura.style.position = 'absolute';
        sakura.style.fontSize = `${10 + Math.random() * 20}px`;
        sakura.style.left = `${Math.random() * 100}%`;
        sakura.style.top = `${-50 + Math.random() * 50}px`;
        sakura.style.opacity = `${0.5 + Math.random() * 0.5}`;
        sakura.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
        sakura.style.animationDelay = `${Math.random() * 5}s`;
        sakuraContainer.appendChild(sakura);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(0) translateX(0) rotate(0deg); }
            100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 720}deg); }
        }
    `;
    document.head.appendChild(style);
}
