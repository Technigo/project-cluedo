// STEP 1 - OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#105e3b', // Green
  description: 'He has a lot of connections.',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: '' 
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#5a3278', // Purple
  description: 'He is widely seen as the intellectual.',
  age: 36,
  image: './assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: ''
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#b30e0e', // Red
  description: 'She is a real femme fatale.',
  age: 25,
  image: './assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: ''
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#110557', // Blue
  description: 'She maintains her dignity in almost all cases.',
  age: 32,
  image: './assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: ''
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#b3870e', // Mustard yellow
  description: 'A military man both dignified and dangerous.',
  age: 56,
  image: './assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: ''
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#f5f3f0', // White
  description: 'She has a grandmotherly appearance.',
  age: 67,
  image: './assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: ''
};

// OBJECTS FOR ALL THE WEAPONS 
const rope = {
  name: 'Rope',
  weight: 10,
  id: 'rope',
  image: './assets/rope.png'
};

const knife = {
  name: 'Knife',
  weight: 18,
  id: 'knife',
  image: './assets/knife.png'
};

const candlestick = {
  name: 'Candlestick',
  weight: 48,
  id: 'candlestick',
  image: './assets/candlestick.png'
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 98,
  id: 'dumbbell',
  image: './assets/dumbbell.png'
};

const poison = {
  name: 'Poison',
  weight: 3,
  id: 'poison',
  image: './assets/poison.png'
};

const axe = {
  name: 'Axe',
  weight: 91,
  id: 'axe',
  image: './assets/axe.png'
};

const bat = {
  name: 'Bat',
  weight: 43,
  id: 'bat',
  image: './assets/bat.png'
};

const trophy = {
  name: 'Trophy',
  weight: 33,
  id: 'trophy',
  image: './assets/trophy.png'
};

const pistol = {
  name: 'Pistol',
  weight: 57,
  id: 'pistol',
  image: './assets/pistol.png'
};

// OBJECTS FOR ALL THE ROOMS. Added since I wanted Images
const diningRoom = {
  name: 'Dining Room',
  image: 'https://i.pinimg.com/564x/bc/e1/12/bce1125345e211137a3384c5d245b748.jpg'
};

const conservatory = {
  name: 'Conservatory',
  image: 'https://www.germy.co.uk/images/projects/conservatory26.JPG'
};

const kitchen = {
  name: 'Kitchen',
  image: 'https://i.pinimg.com/474x/b5/14/31/b5143157ea7361b503e5a9fcb83f6356.jpg'
};

const studyRoom = {
  name: 'Study room',
  image: 'https://i5.walmartimages.com/asr/903edd24-c5f6-4b03-b337-496fe699db2b.a36e87cc654a3a629f75fa39a32e09d2.png'
};

const libraryRoom = {
  name: 'Library Room',
  image: 'https://i.pinimg.com/474x/6f/4f/55/6f4f5570f5abf34ddbbd23f09878041a.jpg'
};

const billiardRoom = {
  name: 'Billiard Room',
  image: 'https://imgproxy.geocaching.com/a308ed3322b4a879e42c8a79c46599c38decb956?url=http%3A%2F%2Ffarm4.static.flickr.com%2F3025%2F2684464802_4f2276f1c6_o.jpg'
};

const lounge = {
  name: 'Lounge',
  image: 'https://i.pinimg.com/474x/63/03/19/630319400f1fcc7032e1667ee3672491.jpg'
};

const ballRoom = {
  name: 'Ballroom',
  image: 'https://i.pinimg.com/originals/18/cc/05/18cc059f3aa976ddd543222a533a2f5f.jpg'
};

const hall = {
  name: 'Hall',
  image: 'https://st.hzcdn.com/simgs/6961a9ba0d4331b3_4-4724/home-design.jpg'
};

const spa = {
  name: 'Spa',
  image: 'https://www.teamtoyboxes.com.au/wp-content/uploads/2019/05/Spa-card.jpg'
};

const livingRoom = {
  name: 'Living Room',
  image: 'https://cdn.concreteplayground.com/content/uploads/2019/03/Baedeker_FB-1920x1440.jpg'
};

const observatory = {
  name: 'Observatory',
  image: 'https://i.pinimg.com/originals/87/ef/6c/87ef6c8d51be485eb9a5e2129de04fb4.jpg'
};

const theater = {
  name: 'Theater',
  image: 'https://i.pinimg.com/originals/0e/f6/e6/0ef6e620320017d4c4f9b4b0e931dc77.jpg'
};

const guestHouse = {
  name: 'Guest House',
  image: 'https://www.thesun.co.uk/wp-content/uploads/2019/12/60a659b1-5983-43ae-a6c0-5a2624d0384bjpg-JS550206142.jpg'
};

const patio = {
  name: 'Patio',
  image: 'https://steveandamysly.tannerworld.com/databank/2009/image_clue_reinvention04.jpg'
};

// GROUPING OF ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

const rooms = [ 
  diningRoom, 
  conservatory, 
  kitchen, 
  studyRoom, 
  libraryRoom,
  billiardRoom, 
  lounge, 
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory, 
  theater, 
  guestHouse, 
  patio
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATES AN OBJECT THAT KEEPS THE MYSTERY. With a killer, a weapon and a room. The values are set later down.
let theMystery = { 
 killer: null,
 weapon: null,
 room: null
};

// Variables for the pictures 
const killerImage = document.getElementById('killerImage');
const weaponImage = document.getElementById('weaponImage');
const roomImage = document.getElementById('roomImage');

// PICK-KILLER-FUNCTION! This function will be invoked when you click on the killer card.
const onKillerCardClicked = () => { // Shows loading animation
  document.getElementById('killerLoader').style.display = 'block';
  setTimeout(pickKiller, 1000); // Delays the realPickKiller function and calls it after 1.5 sec.
};
document.getElementById('killerCard').addEventListener('click', onKillerCardClicked);

const pickKiller = () => { // The REAL function getting the values for the suspects
  document.getElementById('killerLoader').style.display = 'none';
  document.getElementById('killerCard').removeEventListener('click', onKillerCardClicked); // So the loader doesn't pops up in next click
 
  mystery.killer = randomSelector(suspects);  // This will randomly select a killer from the suspects and add that to the mystery object.

  // This function does randomly select a favourite weapon.
  shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons); 
  };
  shuffleFavouriteWeapon();

  // Variables with connection to the HTML. 
  // This will change the background color of the card to the one connected 
  // to the choosen killer and show the different properties of the killer. 
  const killerCardstyle =  document.getElementById('killerCard');
  killerCardstyle.style.background = mystery.killer.color;
  const killerName = document.getElementById('killerName');
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  const killerAge = document.getElementById('killerAge');
  killerAge.innerHTML = `Age: ${mystery.killer.age}`;
  const killerOccupation = document.getElementById('killerOccupation')
  killerOccupation.innerHTML = `Occupation: ${mystery.killer.occupation}`;
  killerImage.src = mystery.killer.image;
  const killerDescription = document.getElementById('killerDescription');
  killerDescription.innerHTML = `Description: ${mystery.killer.description}`;
  const favouriteWeapon = document.getElementById('favouriteWeapon')
  favouriteWeapon.innerHTML = `Favourite weapon: ${mystery.favouriteWeapon.name}`;

  document.getElementById('killerCard').onclick = pickKiller;
};

// PICK-WEAPON-FUNCTION! This function will be invoked when you click on the weapon card.- in the similar way as pickKiller.
const onWeaponCardClicked = () => { // Shows loading animation
  document.getElementById('weaponLoader').style.display = 'block';
  setTimeout(pickWeapon, 1000); // Delays the real pickWeapon function and calls it after 1.5 sec.
};
document.getElementById('weaponCard').addEventListener('click', onWeaponCardClicked);

const pickWeapon = () => { // The REAL function getting the values for the weapons
  document.getElementById('weaponLoader').style.display = 'none';
  document.getElementById('weaponCard').removeEventListener('click', onWeaponCardClicked); // So the loader doesn't pops up in next click, it looks a bit weird if that happens

  mystery.weapon = randomSelector(weapons); // Randomly selects a weapon
      

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} pounds`;
  weaponImage.src = mystery.weapon.image;

  document.getElementById('weaponCard').onclick = pickWeapon;
};

// PICK-ROOM-FUNCTION! This function will be invoked when you click on the room card.- in the similar way as pickKiller.
const onRoomCardClicked = () => { // Shows loading animation
  document.getElementById('roomLoader').style.display = 'block';
  
  setTimeout(pickRoom, 1000); // Delays the real pickRoom function and calls it after 1.5 sec.
};
document.getElementById('roomCard').addEventListener('click', onRoomCardClicked);

const pickRoom = () => { // The REAL function getting the values for the rooms
  document.getElementById('roomLoader').style.display = 'none';
  document.getElementById('roomCard').removeEventListener('click', onRoomCardClicked); // So the loader doesn't pops up in next click

  mystery.room = randomSelector(rooms); // Randomly selects a room

  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
  roomImage.src = mystery.room.image;

  document.getElementById('roomCard').onclick = pickRoom;
};

// STEP 4 - A FUNCTION that will be invoked when you click that button. 
revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`;  
  document.getElementById('weaponCard').style.background = mystery.killer.color; // All decks get the color from the mystery.killer when revealing the mystery
  document.getElementById('roomCard').style.background = mystery.killer.color; // All decks get the color from the mystery.killer when revealing the mystery
};