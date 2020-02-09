// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'Has a lot of connections',
  age: 45,
  // image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrsWhite = {
  firstName: 'Wilma',
  lastName: 'White',
  color: 'white',
  description: 'Looks after herself only',
  age: 32,
  // image: 'assets/green.png',
  occupation: 'Teacher'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'Has no patience',
  age: 55,
  // image: 'assets/green.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Anastasia',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Extremely smart',
  age: 27,
  // image: 'assets/green.png',
  occupation: 'Waitress'
}

const mrsPeacock = {
  firstName: 'Agda',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Never tells the whole truth',
  age: 67,
  // image: 'assets/green.png',
  occupation: 'Former Pilot'
}

const mrMustard = {
  firstName: 'Carl',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Can cover his tracks',
  age: 38,
  // image: 'assets/green.png',
  occupation: 'Scientist'
}

// const mySuspects = () => {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.color = color
//   this.description = description
//   this.age = age
//   this.occupation
// }

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 3
}

const candlestick = {
  name: 'Candlestick',
  weight: 5
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 8
}

const poison = {
  name: 'Poison',
  weight: 1
}

const axe = {
  name: 'Axe',
  weight: 15
}

const bat = {
  name: 'Bat',
  weight: 7
}

const trophy = {
  name: 'Trophy',
  weight: 6
}

const pistol = {
  name: 'Pistol',
  weight: 4
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
  dinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
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
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById('killerCard')
  theKiller.style.background = mystery.killer.color

  const theKillerName = document.getElementById('killerName')
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName

  const theKillerOccupation = getElementById('killerOccupation')
  theKillerOccupation.innerHTML = mystery.killer.occupation

  const theKillerAge = document.getElementById('killerAge')
  theKillerAge.innerHTML = mystery.killer.age

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
  mystery.weapon = randomSelector(weapon)

  const theWeapon = document.getElementById('weaponName')
  theWeapon.innerHTML = mystery.weapon.name

  const theWeight = document.getElementById('weaponWeight')
  theWeight.innerHTML = mystery.weapon.weight

}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById('roomName')
  theRoom.innerHTML = mystery.room

}

const revealMystery = () => {
  const revealCrimne = document.getElementById('mystery')
  revealCrimne.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}
  ${mystery.room} ${mystery.weapon.name}`
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
