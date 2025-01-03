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

// Crad values
const values = [
   {
      id:1,
      counter:1,
      name:"Compassion",
      dicription:`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Distinctio ipsam cumque 
      facilis qui dolorem laboriosam pariatur, 
      minus vel.`
   },
   {
      id:2,
      counter:2,
      name:"Progression",
      dicription:`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Distinctio ipsam cumque 
      facilis qui dolorem laboriosam pariatur, 
      minus vel.`
   },
   {
      id:3,
      counter:3,
      name:"Respect",
      dicription:`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Distinctio ipsam cumque 
      facilis qui dolorem laboriosam pariatur, 
      minus vel.`
   },
   {
      id:4,
      counter:4,
      name:"Courage",
      dicription:`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Distinctio ipsam cumque 
      facilis qui dolorem laboriosam pariatur, 
      minus vel.`
   },
];

const cards = document.querySelector(`.cards`) ; 
let cardsContent = values.map(card => {
   return`
   <div class="card">
      <span class="count">${card.counter}.</span>
      <h2>${card.name}</h2>
      <p>${card.dicription}</p>
   </div>
   `;
}).reduce((acc, card) => {
   return acc + card ; 
}); 
cards.innerHTML=cardsContent ; 


// End Crad values

// testonomail
const testonomailCards = document.querySelector(`.testonomail-cards`);
const users = [
   {
      id:1,
      name: 'Grace Hill',
      img:`../Img Folder/About-img/testimonial1.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
   {
      id:2,
      name: 'Jamie Carter',
      img:`../Img Folder/About-img/testimonial2.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
   {
      id:3,
      name: 'Robert Owens',
      img:`../Img Folder/About-img/testimonial3.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
   {
      id:4,
      name: 'Rachel Walters',
      img:`../Img Folder/About-img/testimonial4.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
   {
      id:5,
      name: 'Sandra Perry',
      img:`../Img Folder/About-img/testimonial5.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
   {
      id:6,
      name: 'Charles Mason',
      img:`../Img Folder/About-img/testimonial6.jpg`,
      dicription: `Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. 
      Dolore ratione non quas optio magnam 
      odit suscipit.`
   },
];

let content = users.map((user) => {
   return`
   <div class="user-card">
      <div class="user-profile">
         <img src="${user.img}" >
         <h3 class="name">${user.name}</h3>
      </div>
      <p class="disc">${user.dicription}</p>
    </div>
   `;
}).reduce((acc, user) => {
   return acc + user ; 
});

testonomailCards.innerHTML = content; 























// Copyright year
document.querySelector(`.date-year`).innerHTML = new Date().getFullYear(); 

