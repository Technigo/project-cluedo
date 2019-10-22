// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "rgba(48, 75, 59, 0.8)",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "rgba(69, 33, 68, 0.8)",
  description: "He is widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "rgba(153, 64, 62, 0.8)",
  description: "She is typically portrayed as young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "rgba(16, 29, 66, 0.8)",
  description: "She is an elderly yet still attractive woman who maintains her dignity in almost all cases",
  age: 60,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "rgba(228, 179, 99, 0.8)",
  description: "He is usually a military man both dignified and dangerous",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "rgba(232, 233, 235, 0.8)",
  description: "She is a frazzled servant",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: "Weight: 2kg",
  material: "Material: fiber",
  color: "rgba(132, 98, 61, 0.8)",
  image: "assets/rope.png"
}
const knife = {
  name: "Knife",
  weight: "Weight: 1kg",
  material: "Material: steel",
  color: "rgba(82, 75, 68, 0.8)",
  image: "assets/knife.png"
}
const candlestick = {
  name: "Candlestick",
  weight: "Weight: 2kg",
  material: "Material: gold",
  color: "rgba(160, 126, 78, 0.8)",
  image: "assets/candlestick.png"
}
const dumbbell = {
  name: "Dumbbell",
  weight: "Weight: 16kg",
  material: "Material: steel",
  color: "rgba(28, 25, 23, 0.8)",
  image: "assets/dumbbell.png"
}
const poison = {
  name: "Poison",
  weight: "Weight: 0.3kg",
  material: "Material: fluid",
  color: "rgba(48, 25, 53, 0.8)",
  image: "assets/poison.png"
}
const axe = {
  name: "Axe",
  weight: "Weight: 9kg",
  material: "Material: wood/steel",
  color: "rgba(86, 73, 58, 0.8)",
  image: "assets/axe.png"
}
const bat = {
  name: "Bat",
  weight: "Weight: 3kg",
  material: "Material: wood",
  color: "rgba(132, 59, 35, 0.8)",
  image: "assets/bat.png"
}
const trophy = {
  name: "Trophy",
  weight: "Weight: 2.5kg",
  material: "Material: silver",
  color: "rgba(130, 132, 137, 0.8)",
  image: "assets/trophy.png"
}
const pistol = {
  name: "Pistol",
  weight: "Weight: 0.6kg",
  material: "Material: steel",
  color: "rgba(54, 59, 56, 0.8)",
  image: "assets/pistol.png"
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

  //Declare constants 
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponMaterial = document.getElementById("weaponMaterial")
  const theWeaponImage = document.getElementById("weaponImage")

  // This will change the background color of the card and show info about chosen weapon.
  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponMaterial.innerHTML = mystery.weapon.material
  theWeaponImage.src = mystery.weapon.image
}

// FUNCTION ROOM invoked when you click on the card.
const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  //Declare constants 
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