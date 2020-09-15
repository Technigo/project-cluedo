//*** SUSPECTS ***//

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He is social',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He is shy',
  age: 67,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'oldlace',
  description: 'She is smart',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Developer'
}

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet
]

//*** WEAPONS ***//

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
  weight: 4
}

const weapons = [
  rope, 
  knife,
  candlestick
]

//*** ROOMS ***//

const rooms = [
  'kitchen', 
  'study',
  'library'
]

// Randomly selects array item
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Mystery object
let mystery =  {
  killer: null,
  weapon: null,
  room: null
}

//*** FUNCTIONS FOR KILLER CARD ***//

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// invokes pickKiller function when user clicks the killer-deck
document.getElementById("killerCard").addEventListener("click", pickKiller);



//*** FUNCTIONS FOR WEAPON CARD ***//

// This function will be invoked when you click on the killer card.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  console.log(mystery.weapon.name)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}

// invokes pickKiller function when user clicks the killer-deck
document.getElementById("weaponCard").addEventListener("click", pickWeapon);



//*** FUNCTIONS FOR ROOM CARD ***//

// This function will be invoked when you click on the killer card.
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

// invokes pickKiller function when user clicks the killer-deck
document.getElementById("roomCard").addEventListener("click", pickRoom);



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = (`It was ${mystery.killer.firstName} ${mystery.killer.lastName} with a ${mystery.weapon.name} in the ${mystery.room}.`)
}

document.getElementById('button').onclick = revealMystery;




/// if mystery. null... 
//styling
//reload
