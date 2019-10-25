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
  color: "Purple",
  description: "He is a weird old man",
  age: 70,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Red",
  description: "She is a smart young woman",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Student"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "A vain high society lady",
  age: 50,
  image: "assets/peacock.png",
  occupation: "Singer"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Orange",
  description: "A sneaky old man",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Lily",
  lastName: "White",
  color: "lightgrey",
  description: "A charming old woman with a lot of kids",
  age: 70,
  image: "assets/white.png",
  occupation: "Mother"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.


const rope = {
  name: "Rope",
  weight: 10,
  image: "assets/rope.jpg"
}

const knife = {
  name: "Knife",
  weight: 20,
  image: "assets/knife.jpg"
}

const candlestick = {
  name: "Candlestick",
  weight: 40,
  image: "assets/candlestick.jpg"
}

const dumbbell = {
  name: "Dumbbell",
  weight: 90,
  image: "assets/dumbbell.jpg"
}

const poison = {
  name: "Poison",
  weight: 15,
  image: "assets/poison.png"
}

const axe = {
  name: "Axe",
  weight: 50,
  image: "assets/axe.jpg"
}

const bat = {
  name: "Bat",
  weight: 45,
  image: "assets/bat.jpg"
}

const trophy = {
  name: "Trophy",
  weight: 60,
  image: "assets/trophy.jpg"
}

const pistol = {
  name: "Pistol",
  weight: 55,
  image: "assets/pistol.jpg"
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
  "Living-room",
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

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: "",
  weapon: "",
  room: ""
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
  const theKillerOccup = document.getElementById("killerOccupation")
  const theKillerDescript = document.getElementById("killerDescription")
  const theKillerImage = document.getElementById("killerImage")


  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccup.innerHTML = mystery.killer.occupation
  theKillerDescript.innerHTML = mystery.killer.description
  theKillerImage.src =  mystery.killer.image

}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWepaonWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")
 

  theWeaponName.innerHTML = mystery.weapon.name
  theWepaonWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
  theWeapon.style.background = "white";

}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = "gold"
  theRoomName.innerHTML = mystery.room
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const pickMystery = () => {

  mystery.killer = randomSelector(suspects)
  mystery.weapon = randomSelector(weapons)
  mystery.room = randomSelector(rooms)
  

}



const revealMystery = () => {
  if (mystery.killer || mystery.weapon || mystery.room === onclick) {
    document.getElementById("mystery").innerHTML = `The murder was commited by ${mystery.killer.firstName + " " + mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`
    document.getElementById("allCards").style.display = "none"
    document.getElementById("mystery").style.fontSize = "50px"
    document.getElementById("mystery").style.color = "red"
    document.getElementById("mystery").style.textTransform = "uppercase"
    document.getElementById("mystery").style.fontWeight = "bold"
    document.getElementById("mystery").style.fontFamily = "Luckiest Guy"
    document.getElementById("startOver").style.display = "block"
  } else {
    alert(`You have to pick the cards to reveal the mystery`)
  }
  
}


const reloadPage = () => {
  location.reload()
}







