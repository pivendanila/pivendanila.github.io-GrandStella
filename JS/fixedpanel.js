window.addEventListener('scroll', function() {
    var hiddenObject = document.querySelector('.fixed_panel');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight

    if (scrollPosition >= windowHeight * 1) {
        hiddenObject.style.opacity = '1';
        hiddenObject.style.transform = 'translateY(0)';
    }
    if (scrollPosition >= windowHeight * 6 || scrollPosition < windowHeight * 1) {
        hiddenObject.style.opacity = '0';
        hiddenObject.style.transform = 'translateY(-100px)';
    }
});
function scrollToMain() {
    const element = document.querySelector('.menu');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToAbout() {
    const element = document.querySelector('.about');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToRooms() {
    const element = document.querySelector('.rooms');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToEvents() {
    const element = document.querySelector('.events');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToContacts() {
    const element = document.querySelector('.footer');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
