///*** VARIABLES ***//

const killerName = document.getElementById("killerName")
const killerAge = document.getElementById("killerAge")
const killerOccupation = document.getElementById("killerOccupation")

const weaponName = document.getElementById("weaponName")
const weaponWeight = document.getElementById("weaponWeight")

const roomName = document.getElementById("roomName")
const roomColor = document.getElementById("roomColor")

const mysteryButton = document.getElementById("mysteryButton")

const killerCard = document.getElementById("killerCard")
const weaponCard = document.getElementById("weaponCard")
const roomCard = document.getElementById("roomCard")

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

const mystery =  {
  killer: null,
  weapon: null,
  room: null
}

//*** FUNCTIONS ***//

// Randomly selects array value
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Changes card background when clicked
const changeCard = (card) => {
  document.getElementById(card).style.background = "#ff7ee3"
}

// Changes button when card is clicked
const changeButton = () => {
  mysteryButton.innerHTML = "?"
  
  if (mystery.killer !== null && mystery.weapon !== null && mystery.room !== null) {
    mysteryButton.style.background = "#EFF066"
  } else {
    mysteryButton.style.background = "transparent"
  }
}

//*** FUNCTION FOR KILLER CARD and how it is invoked***//

const pickKiller = () => {
  mystery.killer = randomSelector(killers)

  killerName.innerHTML = `${mystery.killer.fullName()}`
  killerAge.innerHTML = `Age: ${mystery.killer.age}`
  killerOccupation.innerHTML = `Occupation: ${mystery.killer.occupation}`

  changeCard("killerCard")
  changeButton()
}

killerCard.addEventListener("click", pickKiller);

//*** FUNCTION FOR WEAPON CARD and how it is invoked ***//

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  weaponName.innerHTML = `${mystery.weapon.name}`
  weaponWeight.innerHTML = `Weight: ${mystery.weapon.weight} kg`

  changeCard("weaponCard")
  changeButton()
}

weaponCard.addEventListener("click", pickWeapon);

//*** FUNCTION FOR ROOM CARD and how it is invoked ***//

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  roomName.innerHTML = `${mystery.room.name}`
  roomColor.innerHTML = `Color: ${mystery.room.color}`

  changeCard("roomCard")
  changeButton()
}

roomCard.addEventListener("click", pickRoom);
 
//*** FUNCTION THAT REVEALS THE MYSTERY (or tells the user to pick a killer/weapon/room) - invoked by button onclick in HTML ***//

const revealMystery = () => {

  const revealMysteryNow = () => {
    mysteryButton.innerHTML = (`It was ${mystery.killer.fullName()} with a ${mystery.weapon.name} in the ${mystery.room.name}.`)
    mysteryButton.style.background = "transparent"
    mysteryButton.style.opacity = 1.0;
    textClass.forEach(text => text.innerHTML = "")
    cardClass.forEach(card => card.style.background = "#30F2C6")
    Object.keys(mystery).forEach(key => mystery[key] = null)  
  }

  const pickCard = () => {
    if (mystery.killer === null) {
      killerName.innerHTML = "Pick a killer"
    }
    if (mystery.weapon === null) {
      weaponName.innerHTML = "Pick a weapon"
    }
    if (mystery.room === null) {
      roomName.innerHTML = "Pick a room"
    }
  }

  if (mystery.killer !== null && mystery.weapon !== null && mystery.room !== null) {
    revealMysteryNow()
  } else {
    pickCard()
  }

}