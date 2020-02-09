// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is psychic',
  age: 43,
  image: 'assets/plum.png',
  occupation: 'Author'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is very smart',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Detective'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is a dramaqueen',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Actress'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'blue',
  description: 'He suffers from memory loss',
  age: 68,
  image: 'assets/mustard.png',
  occupation: 'Military officer'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is very determined',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Nurse'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 8
}

const candlestick = {
  name: 'candlestick',
  weight: 14
}

const dumbbell = {
  name: 'dumbbell',
  weight: 20
}

const poison = {
  name: 'poison',
  weight: 2
}

const axe = {
  name: 'axe',
  weight: 25
}

const bat = {
  name: 'bat',
  weight: 6
}

const trophy = {
  name: 'trophy',
  weight: 9
}

const pistol = {
  name: 'pistol',
  weight: 12
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

console.log(mrsWhite.color)
console.log(missScarlet.occupation)
console.log(mrsPeacock.description)
console.log(colonelMustard.occupation)
console.log(pistol.weight)
console.log(trophy.weight)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  "mrGreen",
  "professorPlum",
  "missScarlet",
  "mrsPeacock",
  "colonelMustard",
  "mrsWhite"
]

const weapons = [
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

const rooms = [
  "diningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theater",
  "gusetHouse",
  "patio"
]


let suspectsName = name => {
  console.log(name);
};
suspects.forEach(suspectsName);

let weponsWeight = weight => {
  console.log(weight);
};
weapons.forEach(weponsWeight);

console.log(suspects)
console.log(weapons)
console.log(rooms)

console.log(suspects[0]);
console.log(rooms[rooms.length - 1]);



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  document.getElementById("killerName").innerHTML = `${mystery.killer}`
}
// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
//document.getElementById('killerCard').style.background = mystery.killer.color
//document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponName").innerHTML = `${mystery.weapon}`
}

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  document.getElementById("roomName").innerHTML = `${mystery.room}`
}


document.getElementById('killerCard').addEventListener('click', pickKiller)
document.getElementById('weaponCard').addEventListener('click', pickWeapon)
document.getElementById('roomCard').addEventListener('click', pickRoom)





// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'