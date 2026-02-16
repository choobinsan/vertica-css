const mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    document.documentElement.style.setProperty('--mouse-x', `${mouse.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouse.y}px`);
});

// const dot = document.querySelector(".dot");

// function updateDomTrail() {
    
//   dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;

//   requestAnimationFrame(updateDomTrail);
// }

// updateDomTrail();
