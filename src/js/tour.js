const tour = [
  {
    city: 'Los Angeles',
    date: '3/29',
    venue: 'Shrine Expo',
    imgSrc: '/img/venue/shrine.gif',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },
  {
    city: 'San Diego',
    date: '3/30',
    venue: 'Soma Sports Arena',
    imgSrc: '/img/venue/soma.jpg',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },
  {
    city: 'Arizona',
    date: '4/1',
    venue: 'Comerica Theatre',
    imgSrc: '/img/venue/Comerica.gif',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },

];

// console.log(tour.map(tourDate => `${tourDate.city}`));
const tourContent = `
 <div class="card-group">
    ${tour.map(tourDate => `
   <div class="card">
     <img class="card-img-top img-fluid" src="${tourDate.imgSrc}" alt="${tourDate.city}">
       <div class="card-block">
         <h4 class="card-title">${tourDate.city}</h4>
         <p class="card-text">${tourDate.lineup}</p>
         <p class="card-text"><small class="text-muted">${tourDate.venue}</small></p>
       </div>
     </div>`).join('')}
 </div>
 `;

if (document.querySelector('.tour')) {
  let tourPage = document.querySelector('.tour');
  tourPage.innerHTML = tourContent;
} else {
  tourPage = `<p>No Content yet</p>`;
}
