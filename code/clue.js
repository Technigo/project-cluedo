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
  weight: 2
}

const knife = {
  name: 'Knife',
  weight: 1
}

const candlestick = {
  name: 'Candlestick',
  weight: 6
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 10
}

const poison = {
  name: 'Poison',
  weight: 0
}

const axe = {
  name: 'Axe',
  weight: 12
}

const bat = {
  name: 'Bat',
  weight: 8
}

const trophy = {
  name: 'Trophy',
  weight: 16
}

const pistol = {
  name: 'Pistol',
  weight: 9
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

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Randomly selects one item from passed in array
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Removes icon on card when deck is clicked
const removeDeckIcon = () => {
  const deckIcon = event.target.querySelector('.icon')
  if (typeof (deckIcon) !== 'undefined' && deckIcon !== null) deckIcon.remove()
}

const mystery = {
  killer: '',
  weapon: '',
  room: '',
  date: ''
}

// Killer card
const pickKiller = () => {
  removeDeckIcon()

  // Randomly selects a killer from the suspects & adds it to the mystery object.
  mystery.killer = randomSelector(suspects)

  document.querySelector('#killerCard').classList.add('flipped-card');

  document.querySelector('#killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.querySelector('#killerAge').innerHTML = `${mystery.killer.age} years`
  document.querySelector('#killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.querySelector('#killerImage').src = `${mystery.killer.image}`
}

document.querySelector('#killerCard').addEventListener('click', pickKiller)

// Weapon card
const pickWeapon = () => {
  removeDeckIcon()

  // Randomly selects a weapon from the weapons array & adds it to the mystery object.
  mystery.weapon = randomSelector(weapons)

  document.querySelector('#weaponCard').classList.add('flipped-card');
  document.querySelector('#weaponName').innerHTML = `${mystery.weapon.name}`
  document.querySelector('#weaponWeight').innerHTML = `${mystery.weapon.weight} kg`
}

document.querySelector('#weaponCard').addEventListener('click', pickWeapon)

// Room card
const pickRoom = () => {
  removeDeckIcon()

  // Randomly selects a room from the rooms array & adds it to the mystery object.
  mystery.room = randomSelector(rooms)

  document.querySelector('#roomCard').classList.add('flipped-card');
  document.querySelector('#roomName').innerHTML = `${mystery.room}`
}

document.querySelector('#roomCard').addEventListener('click', pickRoom)

// Date card
const pickDate = () => {
  removeDeckIcon()

  // Generated a andom number between 1 & 30
  let randomNumber = Math.ceil(Math.random() * 30);

  // Randomly selects a month from the months array & adds it + date to the mystery object.
  mystery.date = randomSelector(months) + ` ${randomNumber}`


  document.querySelector('#dateCard').classList.add('flipped-card');
  document.querySelector('#date').innerHTML = `${mystery.date}`
}

document.querySelector('#dateCard').addEventListener('click', pickDate)


// Reveals the mystery when reveal button is clicked
const revealMystery = () => {

  const message = document.querySelector('#mystery');
  let allCardsClicked = '';

  // Loops through mystery object to see if there are any empty values
  Object.keys(mystery).forEach(function (item) {
    if (mystery[item] === '') allCardsClicked = false;

    if (allCardsClicked === false) {
      message.innerHTML = "No mystery is yet to be revealed."
    } else {
      message.innerHTML = `The murder was committed on ${mystery.date} by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`
      document.querySelector('#revealButton').remove()
    }
  });
}

document.querySelector('#revealButton').addEventListener('click', revealMystery)