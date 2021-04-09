const iconMenu = document.querySelector('.menu-burger');
const bodyMenu = document.querySelector('.header__list');
const header = document.querySelector('.header');


// Menu-burger

iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');

  if(document.body.classList.contains('_lock')){
    document.body.style.overflow = "hidden";
  }
  if(!document.body.classList.contains('_lock')){
    document.body.style.overflow = "scroll";
  }
});

// Fixed Menu

document.addEventListener('scroll', () => {
  if(window.scrollY > 0) {

    header.classList.add("shadow");
 }
 else
    header.classList.remove("shadow");

});
