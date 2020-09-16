// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#006a71',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#ffd571',
  description: 'Dijon mustard hoarder',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsPeacock= {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#1e5f74',
  description: 'Illegal is her middle name',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Exotic birds trafficker'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#654062',
  description: 'Loves to (un)fix things',
  age: 50,
  image: 'assets/plum.png',
  occupation: 'PLUMber'
}

const mrsScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: '#931a25',
  description: 'Scars hearts with no mercy',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'TikTok celebrity'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ecf4f3',
  description: 'Knows all the secrets',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'knife'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  color: 'brown',
  image:'assets/rope.jpg'
}

const knife = {
  name: 'Knife',
  color: 'grey',
  image: 'assets/knife.jpg'
}

const candlestick = {
  name: 'Candlestick',
  color: 'white',
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  color: 'black',
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  color: 'green',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  color: 'red',
  image: 'assets/axe.jpg'
}

const bat = {
  name: 'Bat',
  color: 'light brown',
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  color: 'yellow',
  image: 'assets/trophy.jpg'
}

const pistol = {
  name: 'Pistol',
  color: 'blue',
  image: 'assets/gun.jpg'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningroom = { 
  name: 'Dining Room',
  image: 'assets/diningroom.jpg'
}

const conservatory = { 
  name: 'Conservatory',
  image: 'assets/conservatory.jpg'
}

const kitchen = {
  name: 'Kitchen', 
  image: 'assets/kitchen.jpg'
}

const study = { 
  name: 'Study',
  image: 'assets/study.jpg'
}

const library = { 
  name: 'Library',
  image: 'assets/library.jpg'
}

const billiardsroom = { 
  name: 'Billiards Room',
  image: 'assets/billiardsroom.jpg'
}

const lounge = { 
  name: 'Lounge',
  image: 'assets/lounge.jpg'
}

const ballroom = { 
  name: 'Ballroom',
  image: 'assets/ballroom.jpg'
}

const hall = { 
  name: 'Hall',
  image: 'assets/hall.jpg'
}

const spa = { 
  name: 'Spa',
  image: 'assets/spa.jpg'
}

const livingroom = { 
  name: 'Living Room',
  image: 'assets/livingroom.jpg'
}

const observatory = { 
  name: 'Observatory',
  image: 'assets/observatory.jpg'
}

const theater = { 
  name: 'Theater',
  image: 'assets/theater.jpg'
}

const guesthouse = { 
  name: 'Guest House',
  image: 'assets/guesthouse.jpg'
}

const patio = { 
  name: 'Patio',
  image: 'assets/patio.jpg'
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  mrPlum,
  mrsScarlet,
  mrsWhite 
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  diningroom,
  conservatory,
  kitchen,
  study,
  library,
  billiardsroom,
  lounge,
  ballroom,
  hall,
  spa,
  livingroom,
  observatory,
  theater,
  guesthouse,
  patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {

  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
  
}
document.getElementById('killerCard').onclick = pickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => { 
  mystery.weapon = randomSelector(weapons)
  console.log(mystery.weapon)

  document.getElementById('weaponCard').style.background = '#FFFFFF';
  document.getElementById('weaponImage').src = mystery.weapon.image;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
}
document.getElementById('weaponCard').onclick = pickWeapon;


const pickRoom = () => { 
  mystery.room = randomSelector(rooms)

  document.getElementById('roomCard').style.background = '#FFFFFF';
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
  document.getElementById('roomImage').src = mystery.room.image;
}
document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`
}
