// OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#DA22FF",
  description: "He was a teacher of archaeology at Harvard University",
  age: 32,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She began relationships with wealthy older men to inherit their money",
  age: 24,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#3a7bd5",
  description: "She constantly tries to live up to her reputation that she would rather forget",
  age: 38,
  image: "assets/peacock.png",
  occupation: "Senator"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#e9d362",
  description: "He believes that casualties are inevitable in war and is usually the sole survivor in battle",
  age: 62,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She is a loyal housekeeper and a devoted confidant",
  age: 57,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// OBJECTS FOR ALL THE WEAPONS:

const rope = {
  name: "rope",
  weight: 10,
  image:"assets/rope.png"
}

const knife = {
  name: "knife",
  weight: 70,
  image:"assets/knife.png"
}

const candlestick = {
  name: "candlestick",
  weight: 30,
  image:"assets/candlestick-4.png"
}

const dumbbell = {
  name: "dumbbell",
  weight: 40,
  image:"assets/dumbbell-1.png"
}

const poison = {
  name: "poison",
  weight: 100,
  image:"assets/poison.png"
}

const axe = {
  name: "axe",
  weight: 70,
  image:"assets/axe-1.png"
}

const bat = {
  name: "bat",
  weight: 20,
  image:"assets/bat.png"
}

const trophy = {
  name: "trophy",
  weight: 30,
  image:"assets/trophy.png"
}

const pistol = {
  name: "pistol",
  weight: 100,
  image:"assets/pistol.png"
}

// SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
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
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

console.log(suspects, weapons, rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// OBJECT THAT KEEPS THE MYSTERY.

const mystery = {}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById("killer")
  const theKillerColor = document.querySelectorAll(".killer-color")
  const theKillerName = document.getElementById("killerName")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.borderColor = mystery.killer.color
  theKiller.style.background = "#f6e591"
  theKillerColor.forEach((el)=> {
    el.style.background = "#000"
    el.style.color = mystery.killer.color
  })  
  
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerImage.src = mystery.killer.image
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerDescription.innerHTML = mystery.killer.description
}

// FUNCTION pickWeapon 

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponColor = document.querySelectorAll(".weapon-color")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = "#f6e591"
  theWeaponColor.forEach((el) => {
    el.style.background = "#000"
  })


  theWeaponName.innerHTML =
    mystery.weapon.name
  theWeaponWeight.innerHTML =
    mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
}

// FUNCTION pickRoom

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("room")
  const theRoomColor = document.querySelectorAll(".room-color")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = "#f6e591"

  theRoomColor.forEach((el) => {
    el.style.background = "#000"
  })

  theRoomName.innerHTML =
    mystery.room
}

// FUNCTION revealMystery that will be invoked when the button is clicked

const revealMystery = () => {
  const theRevealMystery = document.getElementById("mystery")
  const theBeforeSection = document.querySelector(".before-section")
  const theRoom = document.getElementById("room")
  const theWeapon = document.getElementById("weapon")
  const theKiller = document.getElementById("killer")
  const theKillerColor = document.querySelectorAll(".killer-color")

  if (mystery.killer === undefined|| mystery.weapon === undefined || mystery.room === undefined) {
    theRevealMystery.innerHTML = 'No mystery has been revealed yet.'
  } else {
    theRevealMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
    theBeforeSection.style.backgroundImage = "url(./assets/defoliation.jpg)"
    theRoom.style.background = "#870000"
    theWeapon.style.background = "#870000"
    theKiller.style.background = "#870000"
    theKiller.style.borderColor = "#000"

    theKillerColor.forEach((el)=> {
      el.style.color = "#fff"
    })
    
  }
}
