// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'Has a lot of connections',
  age: 45,
  occupation: 'Entrepreneur',
  image: 'assets/green.png'
  // occupation: 'Entrepreneur'
}

const mrsWhite = {
  firstName: 'Wilma',
  lastName: 'White',
  color: 'white',
  description: 'Looks after herself only',
  age: 72,
  occupation: 'Teacher',
  image: 'assets/white.png'
  // occupation: 'Teacher'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'Has no patience',
  age: 55,
  occupation: 'Professor',
  image: 'assets/plum.png'
  // occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Anastasia',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Extremely smart',
  age: 27,
  occupation: 'Waitress',
  image: 'assets/scarlet.png'
  // occupation: 'Waitress'
}

const mrsPeacock = {
  firstName: 'Agda',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Never tells the whole truth',
  age: 67,
  occupation: 'Pilot',
  image: 'assets/peacock.png'
  // occupation: 'Former Pilot'
}

const mrMustard = {
  firstName: 'Carl',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Can cover his tracks',
  age: 68,
  occupation: 'Officer',
  image: 'assets/mustard.png'
  // occupation: 'Scientist'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  image: 'weapon/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 3,
  image: 'weapon/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: '5kg',
  image: 'weapon/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: '8kg',
  image: 'weapon/dumbbell.png'
}

const poison = {
  name: 'Poison',
  weight: '1kg',
  image: 'weapon/poison.png'
}

const axe = {
  name: 'Axe',
  weight: '15kg',
  image: 'weapon/axe.png'
}

const bat = {
  name: 'Bat',
  weight: '7kg',
  image: 'weapon/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: '6kg',
  image: 'weapon/trophy.png'
}

const pistol = {
  name: 'Pistol',
  weight: '4kg',
  image: 'weapon/pistol.png'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById('killerCard')
  theKiller.style.background = mystery.killer.color

  const theKillerName = document.getElementById('killerName')
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName

  const theKillerAge = document.getElementById('killerAge')
  theKillerAge.innerHTML = mystery.killer.age

  const theKillerOccupation = document.getElementById('killerWork')
  theKillerOccupation.innerHTML = mystery.killer.occupation

  const theKillerImg = document.getElementById('killerImage')
  theKillerImg.src = mystery.killer.image

  const theKillerDescription = document.getElementById('killerDescription')
  theKillerDescription. innerHTML = mystery.killer.description

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById('killerCard').style.background = mystery.killer.color
  // document.getElementById(
  //   'killerName'
  // ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapons = randomSelector(weapons)

  const theWeapon = document.getElementById('weaponName')
  theWeapon.innerHTML = mystery.weapons.name

  const theWeight = document.getElementById('weaponWeight')
  theWeight.innerHTML = mystery.weapons.weight

  const theImg = document.getElementById('weaponImage')
  theImg.src = mystery.weapons.image

}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById('roomName')
  theRoom.innerHTML = mystery.room

}

const revealMystery = () => {
  const revealCrimne = document.getElementById('revealing')
  revealCrimne.innerHTML = `The murder was committed by 
  ${mystery.killer.firstName} ${mystery.killer.lastName}
  in the ${mystery.room} 
  with a ${mystery.weapons.name}`
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
