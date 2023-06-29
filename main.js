const de = document.querySelector('.menu-button');
const sd = document.querySelector('.slidediv');
const ham = document.querySelector('.ham');

de.addEventListener('click', () => {
  sd.classList.toggle('active-slide');
  ham.classList.toggle('action-slide');
});

const artistcontent = [
  {
    artistImg: './media/artists/artistonetile.png',
    artistName: 'Mphastso Taichi Dircks',
    artistPosition: 'Lead Vocalist',
    artistInfo: 'The main vocalist\'s voice that stands out from the others. The melody from his voice is well known in the industry and a 3 years grammy winner.',
  },
  {
    artistImg: './media/artists/artisttwotile.png',
    artistName: 'Gautier Alcides Everly',
    artistPosition: 'Lead Guitarist',
    artistInfo: 'The one usually play the melody of the song. the riffs from the artist are famous around the place and has many records for the music covers',
  },
  {
    artistImg: './media/artists/artistthreetile.png',
    artistName: 'Irati Aliaksandra Mayer',
    artistPosition: 'Lead Singer, Lyricist',
    artistInfo: 'Irati is a music prodigy who has perfect pitch. with her skills she impresses every one that sees her and listens to her soothing voice. She has a guiness record for writing over 500 songs.',
  },
  {
    artistImg: './media/artists/artistfourtile.png',
    artistName: 'Helmo Bence Wiater',
    artistPosition: 'Rhythm Guitarist',
    artistInfo: 'while the lead guitarist playing the melody, rhythm guitarist comes in with melody foundation. Helmo runs a music school which is very popular for having prestigeous awards and titles',
  },
  {
    artistImg: './media/artists/artistfivetile.png',
    artistName: 'Archelaus Joel Kalmar',
    artistPosition: 'Drummer',
    artistInfo: 'Archelaus is famous for his one man Drum piece show. He will always have a sold out shows. He also works for various Artists for special shows.',
  },
  {
    artistImg: './media/artists/artistsixtile.png',
    artistName: 'Olga Korinna Biermann',
    artistPosition: 'Keyboardist, singer',
    artistInfo: 'Newest member of the band. Olga majored in piano from a prestigeous music school in NewYork. She has a talent to play any instrument that challenges her and new she is a Keyboardist for the WOS band',
  },
];

const artistsInnerdiv = document.querySelector('.artists-section');
artistsInnerdiv.innerHTML = `
  <div class='inner-artists-section'>
    <div class='artists-section-heading'>
      <h4 class='artists-heading'>Featured Artists</h4>
      <hr class='artists-div-bar'>
    </div>
    <div class='artists-grid'>
    </div>
    <button class='moreButton'>MORE<ion-icon name="chevron-down-outline" class='dropdown'></ion-icon></button>
  </div>
`;

const artistTiles = document.querySelector('.artists-grid');
for (let i = 0; i < artistcontent.length; i += 1) {
  artistTiles.innerHTML += `
    <div class='artist'>
      <div class='artist-img'>
        <img src='${artistcontent[i].artistImg}'>
      </div>
      <div class='artist-description'>
        <h4 class='artist-name'>${artistcontent[i].artistName}</h4>
        <p class='artist-position'>${artistcontent[i].artistPosition}</p>
        <hr class='artisttile-div-bar'>
        <p class='artist-info'>${artistcontent[i].artistInfo}</p>
      </div>
    </div>
  `;
}
