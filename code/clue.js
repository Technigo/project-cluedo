// Suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'seagreen',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'rebeccapurple',
  description: 'He is a fellow with a bow tie and glasses',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'orangered',
  description: 'She is highly attractive',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'royalblue',
  description: 'She an elderly yet still attractive woman',
  age: 70,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'goldenrod',
  description: 'He is a retired military man',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'oldlace',
  description: 'She is a stiff matronly housekeeper',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}


// Weapons

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 5
}

const candlestick = {
  name: 'Candlestick',
  weight: 8
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 15
}

const poison = {
  name: 'Poison',
  weight: 1
}

const axe = {
  name: 'Axe',
  weight: 30
}

const bat = {
  name: 'Bat',
  weight: 20
}

const trophy = {
  name: 'Trophy',
  weight: 45
}

const pistol = {
  name: 'Pistol',
  weight: 36
}

// Arrays of suspects, weapons & rooms

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

const mystery = {
  killer: '',
  weapon: '',
  room: ''
}

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
}

document.getElementById('killerCard').addEventListener('click', pickKiller)


const pickWeapon = () => {
  // Randomly selects a weapon from the weapons array
  mystery.weapon = randomSelector(weapons)

  // Adds the weapon name
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
}

document.getElementById('weaponCard').addEventListener('click', pickWeapon)


const pickRoom = () => {
  // Randomly selects a room from the rooms array
  mystery.room = randomSelector(rooms)

  // Adds the room name
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').addEventListener('click', pickRoom)

// Reveals the mystery when reveal button is clicked
const revealMystery = () => {

  const message = document.getElementById('mystery');
  let allCardsClicked = '';

  Object.keys(mystery).forEach(function (item) {
    if (mystery[item] === '') allCardsClicked = false;

    if (allCardsClicked === false) {
      message.innerHTML = "No mystery is yet to be revealed."
    } else {
      message.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`
    }
  });
}

document.getElementById('revealButton').addEventListener('click', revealMystery)