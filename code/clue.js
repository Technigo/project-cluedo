// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 58,
  image: 'assets/green.png',
  occupation: 'Investor in oil'
}

const professorPlum = {
  firstName: 'Edgar',
  lastName: 'Plum',
  color: 'pink',
  description: 'He knows to much about everything',
  age: 43,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlett = {
  firstName: 'Ruby',
  lastName: 'Scarlett',
  color: 'red',
  description: 'Her smile can fool anyone',
  age: 31,
  image: 'assets/scarlet.png',
  occupation: 'Journalist'
}

const mrsPeacock = {
  firstName: 'Dorin',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Her nose is in everybodys business',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Jeweler'
}

const colonelMustard = {
  firstName: 'Dolf',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Know many horror storys',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Veteran'
}

const mrsWhite = {
  firstName: 'Alba',
  lastName: 'White',
  color: 'white',
  description: 'Quiet as a mouse and ears like one too',
  age: 64,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  feature: 'tight',
  image: 'assets/rep.png',
}

const knife = {
  name: 'knife',
  weight: 40,
  feature: 'sharp',
  image: 'assets/dolk.png',
}
const candlestick = {
  name: 'candlestick',
  weight: 100,
  feature: 'light',
  image: 'assets/candelstick.png',
}

const posion = {
  name: 'posion',
  weight: 5,
  feature: 'poisonous',
  image: 'assets/poison.png',
}
const axe = {
  name: 'axe',
  weight: 120,
  feature: 'chopped',
  image: 'assets/axe.png',
}
const bat = {
  name: 'bat',
  weight: 70,
  feature: 'hard',
  image: 'assets/baseball.png',
}
const trophy = {
  name: 'trophy',
  weight: 80,
  feature: 'shiny',
  image: 'assets/trophy.png',
}
const pistol = {
  name: 'pistol',
  weight: 60,
  feature: 'leathal',
  image: 'assets/pistol-.png',
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  colonelMustard,
  mrsPeacock,
  missScarlett,

  // ...  and the rest
]

const weapons = [
  rope,
  knife,
  candlestick,
  posion,
  axe,
  bat,
  trophy,
  pistol,
];

const rooms = [
  diningRoom, 
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
  patio,
];




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

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

const theKiller = document.getElementById("killer")
const theKillerName = document.getElementById("killerName")
const theKillerAge = document.getElementById("killerAge")
const theKillerOccupation = document.getElementById("killerOccupation")
const theKillerImage = document.getElementById("killerImage")
const theKillerDescription = document.getElementById("killerDescription")

theKiller.style.background = mystery.killer.color
theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
theKillerAge.innerHTML = mystery.killer.age
theKillerOccupation.innerHTML = mystery.killer.occupation
theKillerImage.setAttribute("src", mystery.killer.image)
theKillerDescription.innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponFeature = document.getElementById("weaponFeature")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponFeature.innerHTML = mystery.weapon.feature
}

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoomName.innerHTML = mystery.room

}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {

  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    document.getElementById('mystery').innerHTML = 'No mystery has been revealed yet.'
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.Ruby} ${mystery.killer.Scarlett}, in the ${mystery.spa} with a ${mystery.poison.poison}.`
  }
}