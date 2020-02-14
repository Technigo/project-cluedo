// STEP 1 - OBJECTS FOR ALL THE SUSPECTS

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
  color: 'plum',
  description: 'A quick-witted, young professor with a bow tie and glasses',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A stock femme fatale; young, cunning and attractive',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'CEO'
}

const mrsPeacock = {     
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: ' A grande dame; an elderly, still-attractive woman who nearly always maintains her dignity.',
  age: 72,
  image: 'assets/peacock.png',
  occupation: 'Carpenter'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A stock great white hunter and colonial imperialist, he is usually a dignified, dapper and dangerous military man.',
  age: 61,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Margreth',
  lastName: 'White',
  color: 'white',
  description: 'The maid, that lives in the mansion',
  age: 70,
  image: 'assets/white.png',
  occupation: '	Housekeeper'
}

    
// BJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'white'
}

const knife = {
  name: 'knife',
  weight: 9,
  color: 'white'
}

const candlestick = {
  name: 'candelstick',
  weight: 8,
  color: 'white'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 7,
  color: 'white'
}

const poison = {
  name: 'poison',
  weight: 6,
  color: 'white'
}

const axe = {
  name: 'axe',
  weight: 5,
  color: 'white'
}

const bat = {
  name: 'bat',
  weight: 4,
  color: 'white'
}

const trophy = {
  name: 'trophy',
  weight: 3,
  color: 'white'
}

const pistol = {
  name: 'pistol',
  weight: 6,
  color: 'white'
}


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  profPlum,
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
 'Kitchen',
 'Ballroom',
 'Conservatory',
 'Cellar',
 'Billiard room',
 'Library',
 'Lounge',
 'Hall',
 'Spa',
]
  

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION. (randomSelector)

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.

const mystery = {
  killer: "",
  weapon: "",
  room: ""
}

// This function will be invoked when clicking the killer card.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = (`Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`)
  document.getElementById('killerAge').innerHTML = (`Age: ${mystery.killer.age}`)
  document.getElementById('killerOccupation').innerHTML = (`Occupation: ${mystery.killer.occupation}`)
}

// This function will be invoked when clicking the weapon card.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponWeight').innerHTML = `It weighs ${mystery.weapon.weight} kg.`
}

// This function will be invoked when clicking the room card.

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room
}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  theMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}!`)
}

document.getElementById('revealButton').onclick = revealMystery



