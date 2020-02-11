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

const mrsWhite = {
  firstName: 'Grace',
  lastName: 'White',
  color: 'white',
  description: 'She is wealthy',
  age: 82,
  image: 'assets/white.png',
  occupation: 'Housewife'
}

const mrMustard = {
  firstName: 'James',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is not who you think he is',
  age: 59,
  image: 'assets/mustard.png',
  occupation: 'Captain'
}

const msPeacock = {
  firstName: 'Jane',
  lastName: 'Peacock',
  color: 'pink',
  description: 'She talkes a lot',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Shop owner'

}

const drPlum = {
  firstName: 'Christopher',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is afraid of the dark',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Medical doctor'
}

const msScarlet = {
  firstName: 'Rita',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a master of seduction',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Dancer'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  color: 'brown',
  image: 'assets/rope.jpg'
}

const knife = {
  name: 'knife',
  color: 'grey',
  image: 'assets/knife.jpg'
}

const poison = {
  name: 'poison',
  color: 'red',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'axe',
  color: 'grey',
  image: 'assets/axe.jpg'
}

const plasticBag = {
  name: 'plastic bag',
  color: 'white',
  image: 'assets/plastic_bag.jpg'
}

const rock = {
  name: 'rock',
  color: 'grey',
  image: 'assets/rock.jpg'
}

const kitchen = {
  name: 'kitchen',
  color: 'yellow',
  image: 'assets/kitchen.jpg'
}

const livingroom = {
  name: 'livingroom',
  color: 'blue',
  image: 'assets/livingroom.jpg'
}

const hallway = {
  name: 'hallway',
  color: 'grey',
  image: 'assets/hallway.jpg'
}

const bathroom = {
  name: 'bathroom',
  color: 'white',
  image: 'assets/bathroom.jpg'
}

const basement = {
  name: 'basement',
  color: 'brown',
  image: 'assets/basement.jpg'
}

const bedroom = {
  name: 'bedroom',
  color: 'pink',
  image: 'assets/bedroom.jpg'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrMustard,
  msPeacock,
  drPlum,
  msScarlet
]

const weapons = [
  rope,
  knife,
  poison,
  axe,
  plasticBag,
  rock
]

const rooms = [
  kitchen,
  livingroom,
  hallway,
  bathroom,
  basement,
  bedroom
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}



// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: '',
  weapon: '',
  room: '',
  color: 'grey'
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image;
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name} `
  document.getElementById('weaponImage').src = mystery.weapon.image;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room.name} `
  document.getElementById('roomImage').src = mystery.room.image;
}

document.getElementById('killerCard').addEventListener('click', pickKiller)
document.getElementById('weaponCard').addEventListener('click', pickWeapon)
document.getElementById('roomCard').addEventListener('click', pickRoom)

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`)
  document.getElementById('mystery').style.background = mystery.color
}

document.getElementById('reveal').onclick = revealMystery
