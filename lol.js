function accepted() {
    document.querySelector('.container').innerHTML = `
        <h1>Yayyy ❤️</h1>
        <p>Cảm ơn m đã đồng ý,m sẽ thành loli của t💗=)))).</p>
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG80dmE2djVqMXZwMmRzYmU3aDZ0cWV2N3R0dTVmM3U5aHQxY2R2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif" width="200">
    `;
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    // Giới hạn trong phạm vi màn hình để không bị mất nút
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);
