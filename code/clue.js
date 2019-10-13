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
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She is a social genius",
  age: 30,
  image: "assets/white.png",
  occupation: "Librarian"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is always singing",
  age: 25,
  image: "assets/plum.png",
  occupation: "Singer/songwriter"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is strong",
  age: 65,
  image: "assets/scarlet.png",
  occupation: "Ex athlet"
}
const mrsPeacock = {
  firstName: "Eleonor",
  lastName: "Peacock",
  color: "blue",
  description: "She is extremly introvert",
  age: 45,
  image: "assets/peacock.png",
  occupation: "Programmer"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a narcissist",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Entrepreneur"
}

// CREATE OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: "rope",
  weight: 10
}
const knife = {
  name: "knife",
  weight: 9
}
const candlestick = {
  name: "candlestick",
  weight: 8
}
const dumbbell = {
  name: "dumbbell",
  weight: 7
}
const poison = {
  name: "poison",
  weight: 6
}
const axe = {
  name: "axe",
  weight: 5
}
const bat = {
  name: "bat",
  weight: 4
}
const trophy = {
  name: "trophy",
  weight: 3
}
const pistol = {
  name: "pistol",
  weight: 2
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

let suspects = [
  "mrGreen", "mrsWhite", "profPlum", "missScarlet", "mrsPeacock", "mrMustard"
]

let weapons = [
  "rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol"
]

let rooms = [
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
const randomSelector = (randomArray) => {
  return randomArray[Math.floor(Math.random() * randomArray.length)]
}


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room. 

const mystery = {killer:"Miss Scarlet", weapon:"axe", room:"Ballroom"};

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
  // This will randomly select a weapon. 
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")

 theWeapon.style.background = mystery.weapon.color
 theWeaponName.innerHTML =
    mystery.weapon.firstName + " " + mystery.weapon.lastName
}

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen room.
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

   theRoom.style.background = mystery.killer.color
   theRoomName.innerHTML =
     mystery.killer.firstName + " " + mystery.killer.lastName
}


// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = (`The murder was comitted by ${killer}, with an ${weapon} in the ${room}.`);
}
