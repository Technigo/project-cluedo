
///*** VARIABLES ***//

const killerNameElement = document.getElementById("killerName")
const killerAgeElement = document.getElementById("killerAge")
const killerOccupationElement = document.getElementById("killerOccupation")

const weaponNameElement = document.getElementById("weaponName")
const weaponWeightElement = document.getElementById("weaponWeight")

const roomNameElement = document.getElementById("roomName")
const roomColorElement = document.getElementById("roomColor")

const mysteryElement = document.getElementById("mystery")

const killerCardElement = document.getElementById("killerCard")
const weaponCardElement = document.getElementById("weaponCard")
const roomCardElement = document.getElementById("roomCard")

const textClass = document.querySelectorAll(".text") 
const cardClass = document.querySelectorAll(".card")

//*** KILLERS ***//

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  age: 45,
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  age: 67,
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassy',
  lastName: 'Scarlet',
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  age: 32,
  occupation: 'Developer'
}

const killers = [
  mrGreen,
  professorPlum,
  missScarlet
]

//*** WEAPONS ***//

const rope = {
  name: 'Rope',
  weight: 10,
}

const knife = {
  name: 'Knife',
  weight: 2
}

const candlestick = {
  name: 'Candlestick',
  weight: 4
}

// Weapons array
const weapons = [
  rope, 
  knife,
  candlestick
]

//*** ROOMS ***//

const kitchen = {
  name: 'Kitchen',
  color: 'Yellow'
}

const study = {
  name: 'Study',
  color: 'Blue'
}

const library = {
  name: 'Library',
  color: 'Green'
}

// Room array
const rooms = [
  kitchen, 
  study,
  library
]

//*** MYSTERY OBJECT ***//

let mystery =  {
  killer: null,
  weapon: null,
  room: null
}

//*** FUNCTIONS ***//

// Randomly selects array item
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Changes card color
const changeCard = (card) => {
  document.getElementById(card).style.background = "#ff7ee3"
}

// Changes button content and background
const changeButton = () => {
  mysteryElement.innerHTML = "?"
  mysteryElement.style.background = "#EFF066"
}

//*** FUNCTION FOR KILLER CARD and how it is invoked***//

const pickKiller = () => {
  mystery.killer = randomSelector(killers)

  killerNameElement.innerHTML = `${mystery.killer.fullName()}`
  killerAgeElement.innerHTML = `Age: ${mystery.killer.age}`
  killerOccupationElement.innerHTML = `Occupation: ${mystery.killer.occupation}`

  changeCard("killerCard")
  changeButton()
}

killerCardElement.addEventListener("click", pickKiller);

//*** FUNCTION FOR WEAPON CARD and how it is invoked ***//

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  weaponNameElement.innerHTML = `${mystery.weapon.name}`
  weaponWeightElement.innerHTML = `Weight: ${mystery.weapon.weight} kg`

  changeCard("weaponCard")
  changeButton()
}

weaponCardElement.addEventListener("click", pickWeapon);

//*** FUNCTION FOR ROOM CARD and how it is invoked ***//

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  roomNameElement.innerHTML = `${mystery.room.name}`
  roomColorElement.innerHTML = `Color: ${mystery.room.color}`

  changeCard("roomCard")
  changeButton()
}

roomCardElement.addEventListener("click", pickRoom);
 
//*** FUNCTION THAT REVEALS THE MYSTERY (or tells the user to pick a killer/weapon/room) - invoked by button onclick in HTML ***//

const revealMystery = () => {

  const pickKiller = () => {
    killerNameElement.innerHTML = "Pick a killer"
  }
  const pickWeapon = () => {
    weaponNameElement.innerHTML = "Pick a weapon"
  }
  const pickRoom = () => {
    roomNameElement.innerHTML = "Pick a room"
  }

  if (mystery.killer === null && mystery.weapon === null && mystery.room === null) {
    pickKiller()
    pickWeapon()
    pickRoom()
  } else if (mystery.killer === null && mystery.weapon === null && mystery.room !== null) {
    pickKiller()
    pickWeapon()
  } else if (mystery.killer === null && mystery.weapon !== null && mystery.room === null) {
    pickKiller()
    pickRoom()
  } else if (mystery.killer !== null && mystery.weapon === null && mystery.room === null) {
    pickWeapon()
    pickRoom()
  } else if (mystery.killer === null && mystery.weapon !== null && mystery.room !== null) {
    pickKiller()
  } else if (mystery.killer !== null && mystery.weapon === null && mystery.room !== null) {
    pickWeapon()
  } else if (mystery.killer !== null && mystery.weapon !== null && mystery.room === null) {
    pickRoom()
  } else {
    mysteryElement.innerHTML = (`It was ${mystery.killer.fullName()} with a ${mystery.weapon.name} in the ${mystery.room.name}.`)
    
    mysteryElement.style.background = "transparent"
    textClass.forEach(text => text.innerHTML = "")
    cardClass.forEach(card => card.style.background = "#30F2C6")

    Object.keys(mystery).forEach(key => mystery[key] = null)
  }
}