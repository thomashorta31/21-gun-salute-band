const band = [
  {
    name: 'Mike',
    instrument: 'Drums',
    imgSrc: '/img/mike-drummer.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Joe',
    instrument: 'Guitar',
    imgSrc: '/img/joe-guitar.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Julian',
    instrument: 'Lead Singer',
    imgSrc: '/img/julian-singer.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Jerry',
    instrument: 'Bass',
    imgSrc: '/img/jerry-bass.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const bandContent = `
<div class="card-group">
   ${band.map(member => `
  <div class="card">
    <img class="card-img-top img-fluid" src="${member.imgSrc}" alt="${member.name}">
      <div class="card-block">
        <h4 class="card-title">${member.name}</h4>
        <p class="card-text">${member.bio}</p>
        <p class="card-text"><small class="text-muted">${member.instrument}</small></p>
      </div>
    </div>`).join('')}
</div>
`;

if (document.querySelector('.band')) {
  let bandPage = document.querySelector('.band');
  bandPage.innerHTML = bandContent;
} else {
  bandPage = `<p>No Content yet</p>`;
}
