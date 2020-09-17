// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#006a71',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'trophy'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#ffd571',
  description: 'Dijon mustard hoarder',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe'
}

const mrsPeacock= {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#1e5f74',
  description: 'Illegal is her middle name',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Exotic birds trafficker',
  favouriteWeapon: 'poison'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#654062',
  description: 'Loves to (un)fix things',
  age: 50,
  image: 'assets/plum.png',
  occupation: 'PLUMber',
  favouriteWeapon: 'candlestick'
}

const mrsScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: '#931a25',
  description: 'Scars hearts with no mercy',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'TikTok celebrity',
  favouriteWeapon: 'bat'
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
  id:'rope',
  color: 'brown',
  image:'assets/rope.jpg'
}

const knife = {
  name: 'Knife',
  id:'knife',
  color: 'grey',
  image: 'assets/knife.jpg'
}

const candlestick = {
  name: 'Candlestick',
  id:'candlestick',
  color: 'white',
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  id:'dumbbell',
  color: 'black',
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  id:'poison',
  color: 'green',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  id:'axe',
  color: 'red',
  image: 'assets/axe.jpg'
}

const bat = {
  name: 'Bat',
  id:'bat',
  color: 'light brown',
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  id:'trophy',
  color: 'yellow',
  image: 'assets/trophy.jpg'
}

const pistol = {
  name: 'Pistol',
  id:'pistol',
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
};

// RANDOM KILLER FUNCTION

const delayPickKiller = () => {
  document.getElementById('loaderKiller').style.display = 'block'
  setTimeout(pickKiller, 1000)
}

document.getElementById('killerCard').addEventListener('click', delayPickKiller);

const pickKiller = () => {
  document.getElementById('loaderKiller').style.display = 'none'
  document.getElementById('killerCard').removeEventListener('click', delayPickKiller) // So the loader doesn't show in next click

  mystery.killer = randomSelector(suspects) // This will randomly select a killer from the suspects. And add that to the mystery object.


  // This will change what information about the killer is displayed
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`

  // SHUFFLE FAVOURITE WEAPON
  const shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons)
    document.getElementById('favouriteWeapon').innerHTML = `Favourite Weapon: ${mystery.favouriteWeapon.name}`
  }
  shuffleFavouriteWeapon()
}




// RANDOM WEAPON FUNCTION

const delayPickWeapon = () => {
  document.getElementById('loaderWeapon').style.display = 'block'
  setTimeout(pickWeapon, 1000)
}

document.getElementById('weaponCard').addEventListener('click', delayPickWeapon);

const pickWeapon = () => { 
  document.getElementById('loaderWeapon').style.display = 'none'
  document.getElementById('weaponCard').removeEventListener('click', delayPickWeapon)
  
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponCard').style.background = '#FFFFFF';
  document.getElementById('weaponImage').src = mystery.weapon.image;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
}


// RANDOM ROOM FUNCTION

const delayPickRoom = () => {
  document.getElementById('loaderRoom').style.display = 'block'
  setTimeout(pickRoom, 1000)
}
document.getElementById('roomCard').addEventListener('click', delayPickRoom)

const pickRoom = () => { 
  document.getElementById('loaderRoom').style.display = 'none'
  document.getElementById('roomCard').removeEventListener('click', delayPickRoom)
  
  mystery.room = randomSelector(rooms)

  document.getElementById('roomCard').style.background = '#FFFFFF';
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
  document.getElementById('roomImage').src = mystery.room.image;
}

// MYSTERY REVEAL FUNCTION 

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`
}
