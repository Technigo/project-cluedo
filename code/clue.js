// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

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
  color: 'purple',
  description: 'He speaks seven languages',
  age: 38,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a trained ninja',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Programmer'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She claims she can speak with animals.',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Zoo-owner'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'His biggest hobby is playing chess',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Retired'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She has many secrets',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Occupation Unknown'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  material: 'textile',
}

const knife = {
  name: 'knife',
  weight: 10,
  material: 'steel',
}

const candlestick = {
  name: 'candlestick',
  weight: 10,
  material: 'brass',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  material: 'iron',
}

const poison = {
  name: 'poison',
  weight: 2,
  material: 'chemical',
}

const axe = {
  name: 'axe',
  weight: 30,
  material: 'steel',
}

const bat = {
  name: 'bat',
  weight: 25,
  material: 'wood',
}

const trophy = {
  name: 'trophy',
  weight: 30,
  material: 'silver',
}

const pistol = {
  name: 'pistol',
  weight: 10,
  material: 'steel',
}

const diningRoom = {
  name: 'Dining Room'
}

const conservatory = {
  name: 'Conservatory'
}

const kitchen = {
  name: 'Kitchen'
}

const study = {
  name: 'Study'
}

const library = {
  name: 'Library'
}

const billiardRoom = {
  name: 'Billiard Room'
}

const lounge = {
  name: 'Lounge'
}

const ballroom = {
  name: 'Ballroom'
}

const hall = {
  name: 'Hall'
}

const spa = {
  name: 'Spa'
}

const livingRoom = {
  name: 'Living Room'
}

const observatory = {
  name: 'Observatory'
}

const theater = {
  name: 'Theater'
}

const guestHouse = {
  name: 'Guest House'
}

const patio = {
  name: 'Patio'
}
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
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

// PICK KILLER when killerCard is clicked.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
}
document.getElementById('killerCard').addEventListener('click', pickKiller)

// PICK WEAPON when weaponCard is clicked.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponMaterial').innerHTML = mystery.weapon.material
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon)

// PICK ROOM when roomCard is clicked.

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room.name
}
document.getElementById('roomCard').addEventListener('click', pickRoom)

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope. */

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`)
}
document.getElementById('btn').addEventListener('click', revealMystery)