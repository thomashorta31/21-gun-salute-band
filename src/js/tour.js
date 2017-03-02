const tour = [
  {
    city: 'Los Angeles',
    dates: '3/29'
    venue: 'Shrine Expo',
    imgSrc: '/img/venue/shrine.gif',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },
  {
    city: 'San Diego',
    dates: '3/30'
    venue: 'Soma Sports Arena',
    imgSrc: '/img/venue/soma.jpg',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },
  {
    city: 'Arizona',
    dates: '4/1'
    venue: 'Comerica Theatre',
    imgSrc: '/img/venue/Comerica.gif',
    lineup: 'Bring Me The Horizon, The American Nightmare, Underoath, Beartooth',
  },

];

const markup = `
<div class="card-group">
   ${tour.map(dates => `
  <div class="card">
    <img class="card-img-top img-fluid" src="${dates.imgSrc}" alt="${dates.city}">
      <div class="card-block">
        <h4 class="card-title">${dates.city}</h4>
        <p class="card-text">${dates.lineup}</p>
        <p class="card-text"><small class="text-muted">${dates.venue}</small></p>
      </div>
    </div>`).join('')}
</div>
`;

const featured = document.querySelector('.tour');
featured.innerHTML = markup;
