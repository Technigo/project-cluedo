// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

class Suspect {
  constructor(firstName, lastName, color, description, age, image, occupation) {
    this.firstName = firstName
    this.lastName = lastName
    this.color = color
    this.description = description
    this.age = age
    this.image = image
    this.occupation = occupation
  }

}

const mrGreen = new Suspect("Jackob", "Green", "green", "He has a lot of connections", 45, "assets/green.png", "Entrepreneur")
const profPlum = new Suspect("Victor", "Plum", "violet", "The uptight and intelligent professor", 50, "assets/plum.png", "Profesor")
const missScarlet = new Suspect("Vivienne", "Scarlet", "red", "The sultry and beautiful actress", 30, "assets/scarlet.png", "Actress")
const mrsPeacock = new Suspect("Elizabeth", "Peacock", "blue", "The sinister and political senator", 42, "assets/peacock.png", "Senator")
const mrMustard = new Suspect("Michael", "Mustard", "yellow", "The militant and athletic colonel", 33, "assets/mustard.png", "Soldier")
const mrsWhite = new Suspect("Blanche", "White", "white", "The intrusive and kindly maid", 67, "assets/white.png", "Maid")

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

class Weapon {
  constructor(name, weight, image) {
    this.name = name
    this.weight = weight
    this.image = image
  }
}

const rope = new Weapon("rope", 10, "assets/rope.png")
const knife = new Weapon("knife", 15, "assets/knife.png")
const candlestick = new Weapon("candlestick", 40, "assets/candlestick.png")
const dumbbell = new Weapon("dumbbell", 12, "assets/dumbbell.png")
const poison = new Weapon("poison", 5, "assets/poison.png")
const axe = new Weapon("axe", 35, "assets/axe.png")
const bat = new Weapon("bat", 13, "assets/bat.png")
const trophy = new Weapon("trophy", 8, "assets/trophy.png")
const pistol = new Weapon("pistol", 20, "assets/pistol.png")

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

class Room {
  constructor(name, image) {
    this.name = name
    this.image = image
  }
}

const dinningRoom = new Room("dinning room", "assets/dinningroom.png")
const conservatory = new Room("conservatory", "assets/conservatory.png")
const kitchen = new Room("kitchen", "assets/kitchen.png")
const study = new Room("study", "assets/study.png")
const library = new Room("library", "assets/library.png")
const billiardRoom = new Room("billiard room", "assets/billiardroom.png")
const lounge = new Room("lounge", "assets/lounge.png")
const ballroom = new Room("ballroom", "assets/ballroom.png")
const hall = new Room("hall", "assets/hall.png")
const spa = new Room("spa", "assets/spa.png")
const livingRoom = new Room("living room", "assets/livingroom.png")
const observatory = new Room("observatory", "assets/observatory.png")
const theater = new Room("theater", "assets/theater.png")
const guesttHouse = new Room("guest house", "assets/guesthouse.png")
const patio = new Room("patio", "assets/patio.png")

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

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
  dinningRoom,
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
  guesttHouse,
  patio
]

// console.log(suspects)
// console.log(weapons)
// console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer,
  weapon,
  room
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeapon.style.background = "#999"
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = "#ff5577"
  theRoomName.innerHTML = mystery.room.name
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const theMystery = document.getElementById("mystery")

  theMystery.innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}. `
}