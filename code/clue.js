const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He specialises in chemistry',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Academic'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'She has a way with words',
  age: 38,
  image: 'assets/scarlet.png',
  occupation: 'Divorce lawyer'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'peacock',
  description: 'She is a woman of property',
  age: 51,
  image: 'assets/peacock.png',
  occupation: 'Philanthropist'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: 'He can handle his weapons alright',
  age: 68,
  image: 'assets/mustard.png',
  occupation: 'colonel'
}
const mrsWhite = {
  firstName: 'unknown',
  lastName: 'White',
  color: 'white',
  description: 'She is good at cleaning up',
  age: 66,
  image: 'assets/white.png',
  occupation: 'housekeeper'
}

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 5
}
const candlestick = {
  name: 'candlestick',
  weight: 11
}
const dumbbell = {
  name: 'dumbbell',
  weight: 20
}
const poison = {
  name: 'poison',
  weight: 3
}
const axe = {
  name: 'axe',
  weight: 17
}
const bat = {
  name: 'bat',
  weight: 13
}
const trophy = {
  name: 'trophy',
  weight: 12
}
const pistol = {
  name: 'pistol',
  weight: 9
}

console.log(mrsWhite.firstName)
console.log(mrsPeacock.occupation)
console.log(missScarlet.description)
console.log(pistol.weight)


const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

console.log(rooms[0])
console.log(weapons.name[2])


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById('killerCard').style.background = mystery.killer.color;
  killerImage.src = mystery.killer.image;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `occupation: ${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = mystery.killer.description;
}
document.getElementById('killerCard').addEventListener('click', pickKiller)

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.killer.color;
  document.getElementById('weaponName').innerHTML = mystery.weapon.name;
  document.getElementById('weaponWeight').innerHTML = `weight: ${mystery.weapon.weight}`;
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon)

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.killer.color;
  document.getElementById('roomName').innerHTML = mystery.room;
}
document.getElementById('roomCard').addEventListener('click', pickRoom)

const revealMystery = () => {
  document.getElementById('revealAnswer').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}
document.getElementById('revealAnswer').addEventListener('click', revealMystery)

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
// This will randomly select a killer from the suspects. And add that to the mystery object.
// This function will be invoked when you click on the killer card.
// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'



