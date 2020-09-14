// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections.',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is widely seen as the intellectual.',
  age: 36,
  image: './assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a real femme fatale.',
  age: 25,
  image: './assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'An attractive woman who maintaing her dignity in almost all cases.',
  age: 32,
  image: './assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A military man both dignified and dangerous.',
  age: 56,
  image: './assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She has a grandmotherly appearance.',
  age: 67,
  image: './assets/white.png',
  occupation: 'Housekeeper'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, 
//ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 18
}

const candlestick = {
  name: 'candlestick',
  weight: 48
}

const dumbbell = {
  name: 'dumbbell',
  weight: 98
}

const poison = {
  name: 'poison',
  weight: 3
}

const axe = {
  name: 'axe',
  weight: 91
}

const bat = {
  name: 'bat',
  weight: 43
}

const trophy = {
  name: 'trophy',
  weight: 33
}

const pistol = {
  name: 'pistol',
  weight: 57
}

// Just testing the above objects with some 'console.log'
console.log(mrGreen.description);
console.log(bat.weight);
console.log(missScarlet.firstName);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
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
  "diningroom",
  "conservatory",
  "kitchen",
  "studyroom",
  "libraryroom",
  "billiardroom",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingroom",
  "observatory",
  "theater",
  "guestHouse",
  "patio"
]

// Just testing the above arrays with some 'console.log'
console.log(suspects);
console.log(weapons);
console.log(rooms);
console.log(suspects[2]);
console.log(rooms[6]);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const theMystery = {

}

const killerImage = document.getElementById('killerImage');

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  killerImage.src = mystery.killer.image
}
document.getElementById('killerCard').onclick = pickKiller

// Function to be invoked when you click on Weapon card - in the similar way as pickKiller.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
 // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
 document.getElementById('weaponCard').style.background = mystery.weapon.color // Need to change styling
 document.getElementById(
   'weaponName'
 ).innerHTML = `${mystery.weapon.name}`
}
document.getElementById('weaponCard').onclick = pickWeapon

// Function to be invoked when you click on Room card - in the similar way as pickKiller.
const pickRoom = () => {
  mystery.room = randomSelector(rooms)
 // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
 document.getElementById('roomCard').style.background = mystery.room.color // Need to change styling
 document.getElementById(
   'roomName'
 ).innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 
// It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
revealMystery = () => {
  mystery.killer = randomSelector(suspects)
  mystery.weapon = randomSelector(weapons)
  mystery.room = randomSelector(rooms)
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  // console.log(`The murder was commited by ${mystery.killer.firstName}, in the ${mystery.room} with a ${mystery.weapon.name}.`)
  document.getElementById("killerCard").innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} <br>Description: ${mystery.killer.description} <br>Age: ${mystery.killer.age} <br>Occupation: ${mystery.killer.occupation} <br>${mystery.killer.image}`
  document.getElementById("killerCard").style.background = mystery.killer.color
}
