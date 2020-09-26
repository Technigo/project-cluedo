///*** VARIABLES ***//

const killerCardElement = document.getElementById("killerCard")
const weaponCardElement = document.getElementById("weaponCard")
const roomCardElement = document.getElementById("roomCard")

const killerNameElement = document.getElementById("killerName")
const weaponNameElement = document.getElementById("weaponName")
const roomNameElement = document.getElementById("roomName")

const mysteryButtonElement = document.getElementById("mysteryButton")

//*** KILLERS ***//

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  age: 45,
  occupation: "Entrepreneur",
}

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  age: 67,
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassy",
  lastName: "Scarlet",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  age: 32,
  occupation: "Developer"
}

const killers = [
  mrGreen,
  professorPlum,
  missScarlet
]

//*** WEAPONS ***//

const rope = {
  name: "Rope",
  weight: 10,
}

const knife = {
  name: "Knife",
  weight: 2
}

const candlestick = {
  name: "Candlestick",
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
  name: "Kitchen",
  color: "Yellow"
}

const study = {
  name: "Study",
  color: "Blue"
}

const library = {
  name: "Library",
  color: "Green"
}

// Room array
const rooms = [
  kitchen,
  study,
  library
]

//*** MYSTERY OBJECT ***//

const mystery = {
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
const changeCard = card => document.getElementById(card).style.background = "#ff7ee3"

// Changes button when card is clicked
const changeButton = () => {
  mysteryButtonElement.innerHTML = "?"

  if (mystery.killer && mystery.weapon && mystery.room) {
    mysteryButtonElement.style.background = "#EFF066"
  } else {
    mysteryButtonElement.style.background = "transparent"
  }
}

//*** FUNCTION FOR KILLER CARD ***//

const pickKiller = () => {

  const killerAgeElement = document.getElementById("killerAge")
  const killerOccupationElement = document.getElementById("killerOccupation")

  mystery.killer = randomSelector(killers)

  killerNameElement.innerHTML = `${mystery.killer.fullName()}`
  killerAgeElement.innerHTML = `Age: ${mystery.killer.age}`
  killerOccupationElement.innerHTML = `Occupation: ${mystery.killer.occupation}`

  changeCard("killerCard")
  changeButton()
}

//*** FUNCTION FOR WEAPON CARD ***//

const pickWeapon = () => {

  const weaponWeightElement = document.getElementById("weaponWeight")

  mystery.weapon = randomSelector(weapons)

  weaponNameElement.innerHTML = `${mystery.weapon.name}`
  weaponWeightElement.innerHTML = `Weight: ${mystery.weapon.weight} kg`

  changeCard("weaponCard")
  changeButton()
}

//*** FUNCTION FOR ROOM CARD ***//

const pickRoom = () => {

  const roomColorElement = document.getElementById("roomColor")

  mystery.room = randomSelector(rooms)

  roomNameElement.innerHTML = `${mystery.room.name}`
  roomColorElement.innerHTML = `Color: ${mystery.room.color}`

  changeCard("roomCard")
  changeButton()
}

//*** FUNCTION THAT REVEALS THE MYSTERY ***//
//invoked by button onclick in index.html

const revealMystery = () => {

  const cardElements = document.querySelectorAll(".card")
  const nameAndInfoElements = [
    ...document.querySelectorAll(".name"),
    ...document.querySelectorAll(".info")
  ]

  const revealMysteryNow = () => {
    mysteryButtonElement.innerHTML = `It was ${mystery.killer.fullName()} with a ${mystery.weapon.name} in the ${mystery.room.name}.`
    mysteryButtonElement.style.background = "transparent"
    nameAndInfoElements.forEach(info => info.innerHTML = "")
    cardElements.forEach(card => card.style.background = "#30F2C6")
    Object.keys(mystery).forEach(key => mystery[key] = null)
  }

  const pickCard = () => {
    if (!mystery.killer) {
      killerNameElement.innerHTML = "Pick a killer"
    }
    if (!mystery.weapon) {
      weaponNameElement.innerHTML = "Pick a weapon"
    }
    if (!mystery.room) {
      roomNameElement.innerHTML = "Pick a room"
    }
  }

  if (mystery.killer && mystery.weapon && mystery.room) {
    revealMysteryNow()
  } else {
    pickCard()
  }

}

//*** INVOKES FUNCTIONS ***//

killerCardElement.addEventListener("click", pickKiller)
weaponCardElement.addEventListener("click", pickWeapon)
roomCardElement.addEventListener("click", pickRoom)