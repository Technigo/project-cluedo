// SUSPECTS//////////////////////////

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const proffesorPlum = {
    firstName: "Victor",
    lastName: "Plum",
    color: "orange",
    description: "Selfmade video-game billionaire",
    age: 36,
    image: "assets/plum.png",
    occupation: "Video-game designer"
  }

const missScarlet = {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "Center of every social event",
    age: 25,
    image: "assets/scarlet.png",
    occupation: "Movie star"
  }

const mrsPeacock = {
  firstName: "Elizabeth",
    lastName: "Peacock",
    color: "blue",
    description: "Elegant aristocrat with Queen-like resemblance",
    age: 32,
    image: "assets/peacock.png",
    occupation: "Socialite"
}

const colonelMustard {
firstName: "Michael",
    lastName: "Mustard",
    color: "Yellow",
    description: "Dignified and dangerous",
    age: 60,
    image: "assets/mustard.png",
    occupation: "Military"
} 
 
const mrsWhite {
  firstName: "Blance",
  lastName: "White",
  color: "White",
  description: "Cheerful",
  age: 55,
  image: "assets/white.png",
  occupation: "Household cook"
}
// WEAPONS //////////////////

const rope = {
  name: "rope",
  identifier: "from the stables" 
}

const knife ={
  name: "knife",
  identifier:"chefs knife",
}

const candlestick = {
  name: "candlestick",
  identifier: 20
}

const dumbbell ={
  name: "dumbbell",
  identifier: "heavy"
}

const poison = {
  name: "poison",
  identifier: "tasteless",
}
const axe ={
  name: "axe",
  identifier: "antics"
}

const bat = {
  name: "bat",
  identifier: "made of aluminium",
}
const trophy = {
  name: "trophy",
  identifier: "Mrs Peacocks trophy for volunteering"
}
const pistol = {
  name: "pistol",
  identifier: "magnum",
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  proffesorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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
pistol,
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
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

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
console.log("The murder was comitted by", mystery.killer.lastName, "in the", mysteryRoom, "with the", mystery.weapon"." )