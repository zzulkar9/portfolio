// Typed

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 0,
    loop: true,
})

// LEFT STICKY
gsap.registerPlugin(ScrollTrigger);

// Function to check if it's a desktop device based on viewport width
function isDesktop() {
    return window.innerWidth > 1290; // Adjust this threshold as needed
}

// Execute the animation only if it's a desktop device
if (isDesktop()) {
    var stickySection = document.querySelector('.right-info');

    if (stickySection) {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.right-info',
                pin: '.left-sticky',
                start: 'top 20%',
                end: 'bottom',
                pinSpacing: false,
                scrub: true,
            }
        })
    }
}
