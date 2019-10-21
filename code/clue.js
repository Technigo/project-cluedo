// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.
const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  // missScarlet,
  // mrsPeacock,
  mrMustard
]

const weapons = [
  fork,
  knife,
  spoon
]

const rooms = [
  "Bathroom",
  "Living room",
  "Hallway"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer,
  weapon,
  room
}
// With a killer, a weapon and a room.
// The values will be set later.

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
  theKillerAge.innerHTML = "Age " + mystery.killer.age
  theKillerOccupation.innerHTML = "Occupation: " + mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  theWeapon.style.background = "#333"
  // theKillerImage.src = mystery.killer.image
  theWeaponName.innerHTML = "Weapon: " + mystery.weapon.name
  theWeaponWeight.innerHTML = "Weight: " + mystery.weapon.weight  
}
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")
  theRoom.style.background = "#991"
  // theKillerImage.src = mystery.killer.image
  theRoomName.innerHTML = mystery.room
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  alert(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.toLowerCase()} with a ${mystery.weapon.name.toLowerCase()}.`)
}
