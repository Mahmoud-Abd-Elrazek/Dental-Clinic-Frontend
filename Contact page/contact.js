const toggel = document.querySelector('.toggel');
const navBar = document.querySelector('.nav-bar');
toggel.addEventListener('click', _ => {
   navBar.classList.toggle('show-toggel') ;
   // Expand 
   const expandNav = document.querySelector(`.nav-bar > .expand`);
   if(! navBar.classList.contains('show-toggel')) {
      navBar.classList.remove(`expand-nav`);
   }
   expandNav.addEventListener('click',_ => {
      navBar.classList.toggle(`expand-nav`);
   });
});
window.addEventListener( 'scroll',_ => {
   if(navBar.classList.contains('show-toggel')) {
      toggel.click();
   }
});
// closed toggel 
document.querySelector(`.nav-bar > button`).addEventListener('click',_ => {
   toggel.click();
})
// ===============END TOGGELS==============================================


// Fixed Nav-bar
const header = document.querySelector('header') ; 
window.addEventListener('scroll', _ => { 
   const headerHeight = header.offsetHeight ; 
   // header.getBoundingClientRect().height
   // if(headerHeight < window.scrollY )
   //    header.classList.add(`fixed-header`) ;
   // else
   // header.classList.remove(`fixed-header`) ;
   header.classList.toggle(`fixed-header` , scrollY >= headerHeight ) ; 
});
// End Fixed Nav-bar

