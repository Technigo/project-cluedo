//OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 70,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'A professor in history and criminal technology',
  age: 62,
  image: 'assets/plum.png',
  occupation: 'Detective'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A famous actor, been in many movies. Love antrophology',
  age: 47,
  image: 'assets/scarlet.png',
  occupation: 'Actor'
}
const mrsPeacock = {
  firstName: 'Eleonor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Degree in criminal history and writing. Love tea and cookies',
  age: 59,
  image: 'assets/peacock.png',
  occupation: 'Author'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Passion of the military and hunting on his free time',
  age: 76,
  image: 'assets/mustard.png',
  occupation: 'Military Officer'
}
const mrsWhite = {
  firstName: 'Jane',
  lastName: 'White',
  color: 'white',
  description: 'A nurse that worked as a midwife all her life',
  age: 74,
  image: 'assets/white.png',
  occupation: 'Nurse'
}

//OBJECTS FOR ALL THE WEAPONS
const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 1
}
const candlestick = {
  name: 'candlestick',
  weight: 0.1
}
const dumbbell = {
  name: 'dumbbell',
  weight: 5
}
const poison = {
  name: 'poison',
  weight: 0.2
}
const axe = {
  name: 'axe',
  weight: 6
}
const bat = {
  name: 'bat',
  weight: 1.5
}
const trophy = {
  name: 'trophy',
  weight: 4
}
const pistol = {
  name: 'pistol',
  weight: 2
}

//ARRAYS FOR ALL THE SUSPECTS, WEAPONS & ROOMS
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
  'Dining Room', 
  'Conservatory', 
  'Kitchen', 
  'Study', 
  'Library', 
  'Billiard Room', 
  'Lounge', 
  'Ballroom', 
  'Hall', 
  'Spa', 
  'Living Room', 
  'Observatory', 
  'Theatre', 
  'Guest House', 
  'Patio'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


//OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
killer: '',
weapon: '',
room: ''
}

//FUNCTIONS FOR THE PICK CARD KILLER, WEAPON & ROOM.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
}
//Invoking the function when you click on the killer card:
document.getElementById('killerCard').addEventListener('click', pickKiller);

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weapon.Weigth').innerHTML = `${mystery.weapon.weigth}`;
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
}
document.getElementById('roomCard').addEventListener('click', pickRoom);


//FUNCTION FOR CLICKING ON THE BUTTON THAT REVEAL THE MYSTERY/CRIME
const revealMystery = () => {
  document.getElementById('revealButton').innerText = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}
