// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#b6cdb1',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green2.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#b16889',
  description: 'He is a mathematical genius',
  age: 33,
  image: 'assets/plum2.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#ea5643',
  description: 'She will do anything to stay in the spotlight',
  age: 35,
  image: 'assets/scarlet2.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#7bccd4',
  description: 'A manners-freak with a nose for politics',
  age: 42,
  image: 'assets/peacock2.png',
  occupation: 'Politician'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#eeb736',
  description: 'A stiff-lipped gentleman',
  age: 34,
  image: 'assets/mustard2.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She will do anything for justice',
  age: 28,
  image: 'assets/white2.png',
  occupation: 'Lawyer'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  image: 'assets/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 6,
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: 12,
  image: 'assets/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 20,
  image: 'assets/dumbbell.png'
}

const poison = {
  name: 'Poison',
  weight: 5,
  image: 'assets/poison.png'
}

const axe = {
  name: 'Axe',
  weight: 15,
  image: 'assets/axe.png'
}

const bat = {
  name: 'Bat',
  weight: 9,
  image: 'assets/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: 18,
  image: 'assets/trophy.png'
}

const pistol = {
  name: 'Pistol',
  weight: 9,
  image: 'assets/pistol.png'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. (I chose to declare the room variables before adding them to the array)

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/diningroom.png'
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.png'
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.png'
}
const study = {
  name: 'Study',
  image: 'assets/study.png'
}

const library = {
  name: 'Library',
  image: 'assets/library.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiardroom.png'
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.png'
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.png'
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.png'
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.png'
}

const livingRoom = {
  name: 'Living Room',
  image: 'assets/livingroom.png'
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.png'
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.png'
}

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guesthouse.png'
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.png'
}

console.log(mrGreen.description)
console.log(rope.weight)
console.log(theater)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
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
  pistol,
]

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio,
]

console.log(suspects)
console.log(weapons)
console.log(rooms)

console.log(suspects[0])
console.log(rooms[rooms.length - 1])

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: '',
  weapon: '',
  room: '',
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById("killerImage");
  killerImage.src = mystery.killer.image;
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById("weaponImage");
  weaponImage.src = mystery.weapon.image;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById("weaponImage");
  roomImage.src = mystery.room.image;
}

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
}

document.getElementById('mysteryReveal').onclick = revealMystery