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
  color: "violet",
  description: "He knows alot",
  age: 55,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "darkred",
  description: "She is smart",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Moviestar"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is smart",
  age: 65,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "goldenrod",
  description: "He is in the army",
  age: 35,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She is a frazzled servant",
  age: 35,
  image: "assets/white.png",
  occupation: "Servant"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  image: "assets/noun_Rope_1120005.png"
}

const knife = {
  name: "Knife",
  image: "assets/noun_Knife_147948.png"
}
const candlestick = {
  name: "Candlestick",
  image: "assets/noun_Candlestick_16264.png"
}
const dumbbell = {
  name: "Dumbbell",
  image: "assets/noun_Dumbbell_1649895.png"
}
const poison = {
  name: "Poison",
  image: "assets/noun_Poison_1869112.png"
}
const axe = {
  name: "Axe",
  image: "assets/noun_Axe_192916.png"
}
const bat = {
  name: "Bat",
  image: "assets/noun_Bat_2639631.png"
}
const trophy = {
  name: "Trophy",
  image: "assets/noun_ancient ruins_2087414.png"
}
const pistol = {
  name: "Pistol",
  image: "assets/noun_Pistol_605747.png"
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
  "dining room",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "living room",
  "observatory",
  "theater",
  "guestHouse",
  "patio"
]

//IS EVERYTHING THERE?
console.log(suspects, weapons, rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: "",
  weapon: "",
  room: ""
}

console.log(mystery)

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
//PICKKILLER
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
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription = ""

}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
//PICKWEAPON
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML =
    mystery.weapon.name
  theWeaponImage.src = mystery.weapon.image
}

//PICKROOM
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = mystery.room
}



// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


//det här är det som funkar som sammafattande meddelande
// const revealMystery = () => {
//   document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName}  ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`
// }

//här kommer conditional-satsen om man inte valt kort:
const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    document.getElementById("mystery").innerHTML =
      "No mystery is yet to be revealed, select three cards first!"
  }
  else {
    document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName}  ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}. Did you know: ${mystery.killer.description}!`
  }
}

