// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections.',
  age: 'Age: ' + 45,
  image: 'assets/green.png',
  occupation: 'Occupation: entrepreneur',
  favouriteWeapon: 'knife'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is an old-school military man.',
  age: 'Age: ' + 62,
  image: 'assets/mustard.png',
  occupation: 'Occupation: officer',
  favouriteWeapon: 'dumbbell'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has many secrets.',
  age: 'Age: ' + 43,
  image: 'assets/peacock.png',
  occupation: 'Occupation: artist',
  favouriteWeapon: 'candlestick'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He loves his bees.',
  age: 'Age: ' + 29,
  image: 'assets/plum.png',
  occupation: 'Occupation: biologist',
  favouriteWeapon: 'poison'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'pink',
  description: 'She is super-smart.',
  age: 'Age: ' + 26,
  image: 'assets/scarlet.png',
  occupation: 'Occupation: journalist',
  favouriteWeapon: 'bat'
}

const mrsWhite = {
  firstName: 'Evie',
  lastName: 'White',
  color: 'white',
  description: 'She is no old biddy.',
  age: 'Age: ' + 62,
  image: 'assets/white.png',
  occupation: 'Occupation: housekeeper',
  favouriteWeapon: 'axe'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  id: 'knife',
  weight: 5
}

const candlestick = {
  name: 'candlestick',
  weight: 25
}

const dumbbell = {
  name: 'dumbbell',
  id: 'dumbbell',
  weight: 30
}

const poison = {
  name: 'poison',
  id: 'poison',
  weight: 5
}

const axe = {
  name: 'axe',
  id: 'axe',
  weight: 25
}

const bat = {
  name: 'bat',
  id: 'bat',
  weight: 20
}

const trophy = {
  name: 'trophy',
  weight: 30
}

const pistol = {
  name: 'pistol',
  weight: 25
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrPlum,
  msScarlet,
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
  pistol
]

const rooms = [
  'diningroom', 
  'conservatory', 
  'kitchen', 
  'study', 
  'library', 
  'billiardroom', 
  'lounge', 
  'ballroom', 
  'hall', 
  'spa', 
  'livingroom', 
  'observatory', 
  'theatre', 
  'guesthouse', 
  'patio'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This will randomly select a killer from the suspects. And add that to the mystery object.

/*const mystery = {
  killer: '',
  weapon: '',
  room: ''
};
*/

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  document.getElementById('killerCard').innerHTML
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}` 
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}` 
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}` 
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}` 
  document.getElementById('favouriteWeapon').innerHTML = `${mystery.killer.favouriteWeapon}` 
  document.getElementById('loader').style.display = 'block';
}
// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  document.getElementById('weaponCard').innerHTML
  // This will randomly select a weapon from the weapon array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen weapon and show the full name of the weapon. Feel free to add more things to show about the weapon.
  //document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('loader').style.display = 'block';
}

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  document.getElementById('roomCard').innerHTML

  // This will randomly select a room from the room array. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  document.getElementById("loader").style.display = "block";
}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom


//STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
const revealMystery = () => {
    if (mystery.killer.firstName === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    document.getElementById('revealButton').innerHTML = 'Please, pick killer, weapon and room.';
  }  else {
    document.getElementById('revealButton').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`
    document.getElementById('loader').style.display = 'none';
}
  }


