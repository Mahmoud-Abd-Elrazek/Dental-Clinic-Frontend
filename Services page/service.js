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

// services box 
const servicesBoxes = document.querySelector('.services-box');
const servicesBox = [
   {
      img:"../Img Folder/Home-img/service-1-1.jpg",
      title:"Cosmetic Dentistry",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corrupti, laborum non, fugiat porro facilis excepturi`
   },
   {
      img:"../Img Folder/Home-img/service-3.jpg",
      title:"Dental X-Rays",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corrupti, laborum non, fugiat porro facilis excepturi`
   },
   {
      img:"../Img Folder/Home-img/service-5.jpg",
      title:"Root Canals",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Corrupti.`
   },
   {
      img:"../Img Folder/Service-img/service-4.jpg",
      title:"Teeth Whitening",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Corrupti.`
   },
   {
      img:"../Img Folder/Service-img/service-2.jpg",
      title:"Dental Implants",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Corrupti.`
   },
   {
      img:"../Img Folder/Service-img/service-6.jpg",
      title:"Braces & Implants",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Corrupti.`
   }
];

let contentService = servicesBox.map( box => {
   return`
   <div class="box">
      <img src="${box.img}">
      <h2>${box.title}</h2>
      <p>${box.disc}</p>
   </div> 
   `; 
}).reduce((acc , box) => {
   return acc + box ; 
});
servicesBoxes.innerHTML = contentService ; 



