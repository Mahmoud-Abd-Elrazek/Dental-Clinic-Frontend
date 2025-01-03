
const header = document.querySelector('header') ; 
// .fixed-header
window.addEventListener('scroll', _ => { 
   const headerHeight = header.offsetHeight ; 
   // header.getBoundingClientRect().height
   // if(headerHeight < window.scrollY )
   //    header.classList.add(`fixed-header`) ;
   // else
   // header.classList.remove(`fixed-header`) ;
   header.classList.toggle(`fixed-header` , scrollY >= headerHeight ) ; 
});


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
      title:"Cosmetic Dentistry",
      disc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corrupti, laborum non, fugiat porro facilis excepturi`
   },
   {
      img:"../Img Folder/Home-img/service-5.jpg",
      title:"Cosmetic Dentistry",
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


// testonomail
const users = [
   {
      discription:
      `Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Adipisci, officia 
         necessitatibus? Facere suscipit adipisci 
         officiis laboriosam eum recusandae!`,
      img:"../Img Folder/Home-img/testimonial1.jpg",
      name:"Grace Hill" 
   },
   {
      discription:
      `Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Adipisci, officia 
         necessitatibus? Facere suscipit adipisci 
         officiis laboriosam eum recusandae!`,
      img:"../Img Folder/Home-img/testimonial2.jpg",
      name:"Grace Hill" 
   },
   {
      discription:
      `Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Adipisci, officia 
         necessitatibus? Facere suscipit adipisci 
         officiis laboriosam eum recusandae!`,
      img:"../Img Folder/Home-img/testimonial3.jpg",
      name:"Grace Hill" 
   },
];

const testonomail = document.querySelector('.testonomail-box > div:nth-child(1)');

window.addEventListener('DOMContentLoaded', _ => {
   showData(0);
});

// document.querySelectorAll(`..testonomail-box > button`) ; 
const btns = document.querySelectorAll(`.testonomail-box > button`);
let count = 0 ;
btns.forEach(btn => {
   btn.addEventListener('click' , _ => {
      if(!btn.classList.contains('pre')) { // previous btn
         count++ ; 
         if(count >= users.length)
            count = 0 ; 
         showData(count); 
      }
      else {
         count-- ; 
         if(count < 0 )
            count =  users.length-1 ; 
         showData(count); 
      }
   })
});
function showData(idx){
   testonomail.innerHTML = `
   <p>${users[idx].discription}</p>
   <div class="person-profile">
      <img src="${users[idx].img}">
      <h2>${users[idx].name}</h2>
   </div>`
}

// Copyright year
document.querySelector(`.date-year`).innerHTML = new Date().getFullYear(); 




