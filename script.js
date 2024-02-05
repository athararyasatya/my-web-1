//toggle class active
const headerExtra = document.querySelector('.header-extra');
//Pada saat buregr menu di click
document.querySelector('#hamburger').onclick = () =>{headerExtra.classList.toggle('active')}; 
//clik di luar sidbar biar ga muncul side bar
const ham = document.querySelector ('hamburger');

document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) &&!headerExtra.contains(e.target)) {
        headerExtra.classList.remove('active');
    }
    
});