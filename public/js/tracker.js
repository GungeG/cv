const track = document.getElementById('image-track');
const images = track.getElementsByClassName("image");
const totalImages = images.length;

// Initialize the percentage
track.dataset.percentage = '0';
track.dataset.prevPercentage = '0';

window.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = (e) => {
    if(track.dataset.mouseDownAt === '0') return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
    // Calculate the maximum allowed movement to make the last image stop at center
    const maxMovement = -((totalImages - 1) * 100 + 50); // 50% to center the last image
    const constrainedPercentage = Math.max(Math.min(nextPercentage, 0), maxMovement);

    track.dataset.percentage = constrainedPercentage;
    track.style.transform = `translate(${constrainedPercentage}%, 0)`;
    
    for (let i = 0; i < totalImages; i++) {
        const image = images[i];
        const base = 50;
        // Increase the movement factor to make images move more
        const movement = constrainedPercentage * 0.3;
        const objectPos = `${base + movement}% center`;
        image.style.objectPosition = objectPos;
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
}

// Add touch support
window.ontouchstart = (e) => {
    track.dataset.mouseDownAt = e.touches[0].clientX;
}

window.ontouchmove = (e) => {
    if(track.dataset.mouseDownAt === '0') return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
    const maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
    const constrainedPercentage = Math.max(Math.min(nextPercentage, 0), -((totalImages + 1) * 100));

    track.dataset.percentage = constrainedPercentage;
    track.style.transform = `translate(${constrainedPercentage}%, 0)`;
    
    for (let i = 0; i < totalImages; i++) {
        const image = images[i];
        const base = 50;
        const movement = constrainedPercentage * 0.3;
        const objectPos = `${base + movement}% center`;
        image.style.objectPosition = objectPos;
    }
}

window.ontouchend = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
}


