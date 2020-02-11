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
const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'red',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'orange',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}




// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}
const knife = {
  name: 'Knife',
  weight: 5
}
const candlestick = {
  name: 'Candlestick',
  weight: 2
}
const dumbbell = {
  name: 'Dumbbell',
  weight: 15
}
const poison = {
  name: 'Poison',
  weight: 1
}
const axe = {
  name: 'Axe',
  weight: 20
}
const bat = {
  name: 'Bat',
  weight: 12
}
const trophy = {
  name: 'Trophy',
  weight: 10
}
const pistol = {
  name: 'Pistol',
  weight: 8
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
]

const weapons = [rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol]

const rooms = ["Dining Room",
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
  "Patio"]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
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


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer 
  // and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  console.log(mystery.killer);
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`

  document.getElementById(
    'weaponWeight'
  ).innerHTML = `Weight: ${mystery.weapon.weight}`

  console.log(mystery.weapon);
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
  console.log(mystery.room);
}


document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 
// It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

console.log(mrGreen.description)
console.log(weapons[weapons.length - 1])

const revealMystery = () => {
  consol.log('Clicking reveal button')
  consol.log(`the murder {$mystery.killer.name} with...`)
  document.getElementById('mystery').innerHTML = `the murder {$mystery.killer.name} with...`
}

//document.getElementById('button').onclick = revealMystery


//
//const revealButton = document.getElementById('button')
//const mysteryMessage =

// revealButton.onclick = revealMystery