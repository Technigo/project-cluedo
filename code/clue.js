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

// Killers array
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

//*** OTHER OBJECTS AND ARRAYS ***//

// Mystery object
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

// Updates card style
const changeCard = (name, card) => {
  document.getElementById(name).style.fontFamily = "Ranchers"
  document.getElementById(name).style.fontSize = "30px"
  document.getElementById(card).style.background = "#ff7ee3"
}

// Updates button style
const changeButton = () => {
  document.getElementById('mystery').innerHTML = "?"
  document.getElementById('mystery').style.fontFamily = "Ranchers"
  document.getElementById('mystery').style.background = "#EFF066"
}

//*** FUNCTION FOR KILLER CARD and how it is invoked***//

const pickKiller = () => {
  mystery.killer = randomSelector(killers)

  document.getElementById('killerName').innerHTML = `${mystery.killer.fullName()}`
  document.getElementById("killerAge").innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById("killerOccupation").innerHTML = `Occupation: ${mystery.killer.occupation}`

  changeCard("killerName", "killerCard")
  changeButton()
}

document.getElementById("killerCard").addEventListener("click", pickKiller);

//*** FUNCTION FOR WEAPON CARD and how it is invoked ***//

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight} kg`

  changeCard("weaponName", "weaponCard")
  changeButton()
}

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

//*** FUNCTION FOR ROOM CARD and how it is invoked ***//

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById("roomColor").innerHTML = `Color: ${mystery.room.color}`

  changeCard("roomName", "roomCard")
  changeButton()
}

document.getElementById("roomCard").addEventListener("click", pickRoom);
 
//*** FUNCTION THAT REVEALS THE MYSTERY - invoked by button onclick in HTML ***//

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = (`It was ${mystery.killer.fullName()} with a ${mystery.weapon.name} in the ${mystery.room.name}.`)

  document.getElementById("mystery").style.background = "transparent"

  properties = ["killerName", "weaponName", "roomName","killerAge", "killerOccupation", "weaponWeight", "roomColor"]
  for (let i = 0; i < properties.length; i++) {
    document.getElementById(properties[i]).innerHTML = ""
  }
 
  cards = ["killerCard", "weaponCard", "roomCard"]
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(cards[i]).style.background = "#30F2C6"
  }

  Object.keys(mystery).forEach(key => {
    mystery[key] = null;
  })

}