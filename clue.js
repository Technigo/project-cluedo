// Suspects objects
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};
const proessorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is good at lying',
  age: 29,
  image: 'assets/plum.png',
  occupation: 'Developer'
};
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is clever',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Nurse'
};
const mrsPeacock = {
  firstName: 'Elenor',
  lastName: 'Peacock',
  color: 'pink',
  description: 'She is fast',
  age: 42,
  image: 'assets/peacock.png',
  occupation: 'Police officer'
};
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: 'He is funny',
  age: 56,
  image: 'assets/mustard.png',
  occupation: 'Teacher'
};
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is fast',
  age: 33,
  image: 'assets/white.png',
  occupation: 'chef'
};

// Objects for weapons
const rope = {
  name: 'Rope',
  weight: 10
};
const knife = {
  name: 'Knife',
  weight: 100
};
const candelstick = {
  name: 'Candelstick',
  weight: 200
};
const dumbbell = {
  name: 'Dumbbell',
  weight: 300
};
const poison = {
  name: 'Poison',
  weight: 2
};
const axe = {
  name: 'Axe',
  weight: 400
};
const bat = {
  name: 'Bat',
  weight: 110
};
const trophy = {
  name: 'Trophy',
  weight: 500
};
const pistol = {
  name: 'Pistol',
  weight: 150
};

// Array of suspects
const suspects = [
  mrGreen,
  proessorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]


//Array of weapons
const weapons = [
  rope,
  knife,
  candelstick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]


//Array of rooms
const rooms = [
  'Dining rooms',
  'conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living room',
  'Observatory',
  'Theater',
  'Guest house',
  'Patio'
]

// Function that randomly selects one item from the array
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Object with a killer, a weapon and a room  
const mystery = {
  killer: null,
  weapon: null,
  room: null
};

// Function that will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `Killer description: ${mystery.killer.description}`
  document.getElementById("killerImage").src = mystery.killer.image
}

// Function that picks a weapon
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `Type of weapon: ${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weapon weight: ${mystery.weapon.weight}`

}

// Function that picks a room
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `Room where the crime happend: ${mystery.room}`
}

//Function that reveals the mystery
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}in the ${mystery.room} with a ${mystery.weapon.name} `

}

document.getElementById('roomCard').addEventListener('click', pickRoom)
document.getElementById('weaponCard').addEventListener('click', pickWeapon)
document.getElementById('killerCard').addEventListener('click', pickKiller)
document.getElementById('revealBtn').addEventListener('click', revealMystery)