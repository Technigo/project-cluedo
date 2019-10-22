// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

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
  color: "purple",
  description: "He is widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is typically portrayed as young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is an elderly yet still attractive woman who maintains her dignity in almost all cases",
  age: 60,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is usually a military man both dignified and dangerous",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She is a frazzled servant",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: "8",
  material: "fiber",
  color: "tan"
}
const knife = {
  name: "knife",
  weight: "1",
  material: "steel",
  color: "darkgray"
}
const candlestick = {
  name: "candlestick",
  weight: "3",
  material: "gold",
  color: "goldenrod"
}
const dumbbell = {
  name: "dumbbell",
  weight: "12",
  material: "steel",
  color: "black"
}
const poison = {
  name: "poison",
  weight: "1",
  material: "fluid",
  color: "darkseagreen"
}
const axe = {
  name: "axe",
  weight: "10",
  material: "wood",
  color: "burlywood"
}
const bat = {
  name: "bat",
  weight: "7",
  material: "wood",
  color: "saddlebrown"
}
const trophy = {
  name: "trophy",
  weight: "8",
  material: "silver",
  color: "lightgray"
}
const pistol = {
  name: "pistol",
  weight: "2",
  material: "steel",
  color: "darkgray"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

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
  "Dining Room",
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

//Console.log too see that the objects is correct
console.log(suspects, weapons, rooms)

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
//FUNCTION KILLER invoked when you click on the card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  //Declare constants 
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  //Changes background
  theKiller.style.background = mystery.killer.color
  //Changes name
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  //Changes age
  theKillerAge.innerHTML = mystery.killer.age
  //Changes occupation
  theKillerOccupation.innerHTML = mystery.killer.occupation
  //Changes image
  theKillerImage.src = mystery.killer.image
  //CHanges description
  theKillerDescription.innerHTML = mystery.killer.description
}

// FUNCTION WEAPON invoked when you click on the card.
const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponMaterial = document.getElementById("weaponMaterial")

  // This will change the background color of the card and show info about chosen weapon.
  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponMaterial.innerHTML = mystery.weapon.material
}

// FUNCTION ROOM invoked when you click on the card.
const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  //Not needed if not supposed to change color
  // const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  // The rooms are not supposed to have colors?
  // theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = mystery.room
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

//Just shows the cards user chosen, not the randoms
const revealMystery = () => {
  const theMystery = document.getElementById("mystery")
  theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}