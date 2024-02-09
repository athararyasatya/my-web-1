//toggle class active
const headerExtra = document.querySelector('.header-extra');
headerExtra.classList.remove('active');

//Pada saat buregr menu di click
//di tambahin event event) => {
    // event.preventDefault() biar ga ke atas pas di klik hamburgeernya
document.querySelector('#hamburger').onclick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari link
    headerExtra.classList.toggle('active');
}; 

//clik di luar sidbar biar ga muncul side bar
const burger = document.querySelector ('hamburger');

document.addEventListener('click',function(e) {
    
    if(!hamburger.contains(e.target) &&!headerExtra.contains(e.target)) {
        headerExtra.classList.remove('active');
    }
    
});


