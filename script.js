document.getElementById('showHearts').addEventListener('click', function(event) {
    event.preventDefault();
    for (let i = 0; i < 20; i++) {
        createEffect('heart');
    }
});

document.getElementById('showBitcoin').addEventListener('click', function(event) {
    event.preventDefault();
    for (let i = 0; i < 20; i++) {
        createEffect('bitcoin');
    }
});

function createEffect(className) {
    const particle = document.createElement('div');
    particle.classList.add(className);
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = (window.innerHeight + window.scrollY) + 'px'; // Start position adjusted for scroll
    particle.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}
