// SUSPECTS AS OBJECTS

const mrGreen = {
  title: "Mr",
  lastName: "Green",
  color: "green",
  description: "Hypocritical Anglican priest",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const mrsWhite = {
  title: "Mrs",
  lastName: "White",
  color: "white",
  description: "Frazzled",
  age: 54,
  image: "assets/white.png",
  occupation: "Servant"
}

const mrsPeacock = {
  title: "Mrs",
  lastName: "Peacock",
  color: "blue",
  description: "An elderly, still-attractive woman who nearly always maintains her dignity",
  age: 68,
  image: "assets/peacock.png",
  occupation: "Retired"
}

const profPlum = {
  title: "Professor",
  lastName: "Plum",
  color: "purple",
  description: "A quick-witted, young professor with a bow tie and glasses",
  age: 43,
  image: "assets/plum.png",
  occupation: "Professor"
}

const colMustard = {
  title: "Colonel",
  lastName: "Mustard",
  color: "yellow",
  description: "A dignified, dapper and dangerous military man",
  age: 62,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const missScarlet = {
  title: "Miss",
  lastName: "Scarlet",
  color: "red",
  description: "A stock femme fatale, young, cunning and attractive",
  age: 36,
  image: "assets/scarlet.png",
  occupation: "Unknown"
}

// WEAPONS AS OBJECTS

const candelStick = {
  name: "candelstick",
  weight: 10
}

const dagger = {
  name: "dagger",
  weight: 2
}

const pipe = {
  name: "pipe",
  weight: 8
}

const revolver = {
  name: "revolver",
  weight: 4
}

const rope = {
  name: "rope",
  weight: 6
}

// ARRAYS FOR SUSPECTS, WEAPONS AND ROOMS

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard
]

const weapons = [
  candelStick,
  dagger,
  pipe,
  revolver,
  rope
]

const rooms = [
  'kitchen',
  'ballroom',
  'conservatory',
  'billiard room',
  'library',
  'study',
  'hall',
  'lounge',
  'dining room'
]

let windowKiller = null 
let windowWeapon = null
let windowRoom = null


// SELECTING RANDOM 
function randomOptionSelector (optionsArray) {
  const randomIndex = Math.floor(Math.random() * optionsArray.length)
  return optionsArray[randomIndex]
}

 //PICKING RANDOM KILLER

const pickKiller = () => {
 
  const killer = randomOptionSelector(suspects)
  windowKiller = killer

  const killerDiv = document.getElementById("killer")
  const killerNameParagraf = document.getElementById("killerName")
  const killerAgeParagraf = document.getElementById("killerAge")
  const killerOccupationParagraf = document.getElementById("killerOccupation")
  const killerDescriptionParagraf = document.getElementById("killerDescription")
  
  killerDiv.style.background = killer.color
  killerNameParagraf.innerHTML = killer.title + " " + killer.lastName
  killerAgeParagraf.innerHTML = killer.age
  killerOccupationParagraf.innerHTML = killer.occupation
  killerDescriptionParagraf.innerHTML = killer.description
}

 //PICKING RANDOM WEAPON

const pickWeapon = () => {
  const weapon = randomOptionSelector(weapons)
  windowWeapon = weapon

  const weaponNameParagraf = document.getElementById("weaponName")
  const weaponWeightParagraf = document.getElementById("weaponWeight")

  weaponNameParagraf.innerHTML = weapon.name
  weaponWeightParagraf.innerHTML = weapon.weight
}

 //PICKING RANDOM ROOM

const pickRoom = () => {
  const room = randomOptionSelector(rooms)
  windowRoom = room

  const roomNameParagraf = document.getElementById("roomName")

  roomNameParagraf.innerHTML = room
}

const revealMystery = () => {
  const mysteryH1 = document.getElementById("mystery")
  mysteryH1.innerHTML = (`The murder was committed by ${windowKiller.title + " " + windowKiller.lastName}, in the ${windowRoom} with the ${windowWeapon.name}.`)
}