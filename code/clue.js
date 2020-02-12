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

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'Loyal housekeeper and devoted confidant',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'The militant and athletic colonel of the game',
  age: 52,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'The sinister and political senator of the game',
  age: 40,
  image: 'assets/peacock.png',
  occupation: 'Senator'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'The uptight and intelligent professor of the game',
  age: 61,
  image: 'assets/plum.png',
  occupation: 'Professor',
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The sultry and beautiful actress',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 2
}

const candlestick = {
  name: 'candlestick',
  weight: 5
}

const dumbbell = {
  name: 'dumbbell',
  weight: 15
}

const poison = {
  name: 'posion',
  weight: 1
}

const axe = {
  name: 'axe',
  weight: 25
}

const bat = {
  name: 'bat',
  weight: 17
}

const trophy = {
  name: 'trophy',
  weight: 4
}

const pistol = {
  name: 'pistol',
  weight: 3
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: 'Dining room',
  image
}

const conservatory = {
  name: 'Conservatory',
  image:
}

const kitchen = {
  name: 'Kitchen',
  image:
}

const study = {
  name: 'Study',
  image:
}

const library = {
  name: 'Library',
  image:
}

const billiardRoom = {
  name: 'Billiard room',
  image:
}

const lounge = {
  name: 'Lounge',
  image:
}

const ballroom = {
  name: 'Ballroom',
  image:
}

const hall = {
  name: 'Hall',
  image:
}

const spa = {
  name: 'Spa',
  image:
}

const livingRoom = {
  name: 'Living room',
  image:
}

const observatory = {
  name: 'Observatory',
  image:
}

const theater = {
  name: 'Theater',
  image:
}

const guestHouse = {
  name: 'Guest house',
  image:
}

const patio = {
  name: 'Patio',
  image:
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  colMustard,
  mrsPeacock,
  profPlum,
  missScarlet,
  // ...  and the rest
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

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  console.log('I am clicking the card')


  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.description}`
}
document.getElementById('killerCard').onclick = pickKiller

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}
document.getElementById('weaponCard').onclick = pickWeapon

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'room'
  ).innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was comitted by ${mystery.killer.name}, in the ${mystery.room}
  with a ${mystery.weapon.name}`
  // console.log(`The murder was by ${mystery.killer.name}, in the ${mystery.room} with a ${mystery.weapon.name}`)

}

document.getElementById('button').onclick = revealMystery

// const revealButton = document.getElementById('button')
// const mysteryReveal = document.getElementById('button')