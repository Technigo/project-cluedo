// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#7FAE79',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#806E8A',
  description: '',
  age: 60,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#AE4646',
  description: '',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#689DAD',
  description: 'Mother of Miss Scarlet',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Lawyer'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#D4A04C',
  description: '',
  age: 30,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Jennie',
  lastName: 'White',
  color: 'white',
  description: '',
  age: 75,
  image: 'assets/white.png',
  occupation: 'retired'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 6
}

const candlestick = {
  name: 'Candlestick',
  weight: 8
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 3
}

const poison = {
  name: 'Poison',
  weight: 2
}

const axe = {
  name: 'Axe',
  weight: 8
}

const bat = {
  name: 'Bat',
  weight: 5
}

const trophy = {
  name: 'Trophy',
  weight: 5
}

const pistol = {
  name: 'Pistol',
  weight: 4
}


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mystery = {
  killer: 'who',
  weapon: 'whith what',
  room: 'where'
}

// This function will be invoked when you click on the killer card.

// document.getElementById('killerTitle').style.display = 'none';
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerAge').innerHTML = 'Age: ' + mystery.killer.age
  document.getElementById('killerOccupation').innerHTML = 'Occupation: ' + mystery.killer.occupation
  document.getElementById('killerHeadline').style.display = 'none'
  document.getElementById('killerTitle').style.display = 'block'
  document.getElementById('killerDecoration').style.display = 'block'
  document.getElementById('killerDecoration').style.border = '0px'
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = 'rgb(129, 164, 175)'
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponWeight').innerHTML = 'Weight: ' + mystery.weapon.weight
  document.getElementById('weaponHeadline').style.display = 'none'
  document.getElementById('weaponTitle').style.display = 'block'
  document.getElementById('weaponDecoration').style.display = 'block'
  document.getElementById('weaponDecoration').style.border = '0px'
  document.getElementById('weaponContent').style.justifyContent = 'center'
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = 'rgb(129, 164, 175)'
  document.getElementById('roomName').innerHTML = mystery.room
  document.getElementById('roomHeadline').style.display = 'none'
  document.getElementById('roomTitle').style.display = 'block'
  document.getElementById('roomDecoration').style.display = 'block'
  document.getElementById('roomDecoration').style.border = '0px'
  document.getElementById('roomContent').style.justifyContent = 'center'
}

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').style.display = 'block'
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}
document.getElementsByTagName("button")[0].onclick = revealMystery;