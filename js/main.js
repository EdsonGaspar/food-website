const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle('sticky', this.window.scrollY > 80)
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
// HOME
sr.reveal ('.home-text', {delay:300});
sr.reveal ('.home-img', {delay:400});

//Container
sr.reveal ('.containner', {delay:400});

// About us
sr.reveal ('.about-img', {});
sr.reveal ('.about-text', {delay:300});

// Our shop
sr.reveal ('.middle-text', {});
sr.reveal ('.row-btn', {delay:300});
sr.reveal ('.shop-content', {delay:300});

// review customer
sr.reveal ('.review-content,.contact', {delay:300});