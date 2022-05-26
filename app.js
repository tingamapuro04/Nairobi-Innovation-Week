const ham = document.getElementById('ham');
const close = document.getElementById('close');
const pages = document.getElementById('pages');

ham.addEventListener('click', () => {
  pages.style.display = 'flex';
  ham.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  pages.style.display = 'none';
  close.style.display = 'none';
  ham.style.display = 'block';
});

const speakers = [
  {
    check: './imgs/check.png',
    image: './imgs/ndegwa.jpg',
    fullName: 'Peter Ndegwa',
    position: 'Safaricom Kenya CEO, Economist',
    description: 'Peter Ndegwa is a Kenyan businessman, accountant and corporate executive, who serves as the chief executive officer at Safaricom, the largest telecommunications company in the countries of the East African Community, with approximately 35.6 million subscribers in December 2020.',
  },
  {
    check: './imgs/check.png',
    image: './imgs/magoha.jpg',
    fullName: 'George Magoha',
    description: 'Professor George Chiyeth Magoha, is a Kenyan consultant surgeon, academic administrator and technocrat, who serves as the Cabinet Secretary of Education in the Cabinet of Kenya, effective 26 March 2019.',
  },
];

const speakers1 = [
  {
    check: './imgs/check.png',
    image: './imgs/njoroge.jpg',
    fullName: 'Patrick Njoroge',
    position: 'Central Bank Of Kenya governor, Economist',
    description: 'Patrick Ngugi Njoroge is a Kenyan economist, banker and the ninth governor of the Central Bank of Kenya.',
  },
  {
    check: './imgs/check.png',
    image: './imgs/koome.jpg',
    fullName: 'Martha Koome',
    position: 'Kenyan Chief Justice',
    description: 'Martha Karambu Koome is a Kenyan advocate, currently serving as the Chief Justice of Kenya, and is the first woman to occupy the post.',
  },
  {
    check: './imgs/check.png',
    image: './imgs/mary_kinoti.jpg',
    fullName: 'Mary Kinoti',
    position: 'The former vice chancellor University of Nairobi',
    description: 'Professor Mary Wanjiru Kinoti is a certified behavioural scientist and Axiologist from the United States of America and former Associate Dean of Graduate Studies in charge of the graduate programmes in the School of Business, University of Nairobi.',
  },
  {
    check: './imgs/check.png',
    image: './imgs/kiama.jpg',
    fullName: 'Stephen Kiama',
    position: 'The vice chancellor University of Nairobi',
    description: 'Stephen Gitahi Kiama is a Kenyan veterinary surgeon and academic who, effective 3 January 2020, serves as the 8th vice chancellor of the University of Nairobi, the oldest public university of Kenya.',
  },
];

function speaker(item) {
  return `
  <div class="guests">
    <div class="speaker-img">
    <img class="profile" src="${item.image}" alt="profile-picture">
    </div>
    <div class="speaker-det">
      <h2 class="speaker-name">${item.fullName}</h2>
      <h3 class="speaker-bio">${item.position}</h3>
      <hr class="speaker-hr">
      <p class="speaker-shortbrief">${item.description}</p>
    </div>
  </div>
  `;
}

document.getElementById('wageni').innerHTML = `
${speakers.map(speaker).join('')}
`;

function speaker1(item) {
  return `
  <div class="guests1" id="guest-hid">
    <div class="speaker-img">
      <img class="profile" src="${item.image}" alt="profile-picture">
    </div>
    <div class="speaker-det">
      <h2 class="speaker-name">${item.fullName}</h2>
      <h3 class="speaker-bio">${item.position}</h3>
      <hr class="speaker-hr">
      <p class="speaker-shortbrief">${item.description}</p>
    </div>
  </div>
  `;
}

document.getElementById('wageni1').innerHTML = `
${speakers1.map(speaker1).join('')}
`;

const hideGuest = document.getElementById('wageni1');
const moreBtn = document.getElementById('more-btn');
const lessBtn = document.getElementById('less-btn');

moreBtn.addEventListener('click', () => {
  hideGuest.style.display = 'block';
  lessBtn.style.display = 'block';
  moreBtn.style.display = 'none';
});

lessBtn.addEventListener('click', () => {
  hideGuest.style.display = 'none';
  moreBtn.style.display = 'block';
  lessBtn.style.display = 'none';
});