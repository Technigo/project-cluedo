// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: "#448c4a",
  description: 'He has a lot of connections',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: "rope"
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8b539a',
  description: 'He talks much but say little',
  age: 45,
  image: './assets/plum.png',
  occupation: 'Visting STEM professor',
  favouriteWeapon: "poison"
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#ff8d48',
  description: 'She can stare down a lion',
  age: 30,
  image: './assets/scarlet.png',
  occupation: 'Manager of the Batman Zoo',
  favouriteWeapon: "pistol"
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#7775c0',
  description: 'She is stronger than you',
  age: 37,
  image: './assets/peacock.png',
  occupation: 'Yoga teacher',
  favouriteWeapon: "dumbbell"
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#e6b127',
  description: "He was part of Franco's gang",
  age: 73,
  image: './assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: "knife"

}

const mrsWhite = {
  firstName: 'Rose',
  lastName: 'White',
  color: '#e1d2a9',
  description: 'She will not miss one thing',
  age: 63,
  image: './assets/white.png',
  occupation: 'Facility consultant',
  favouriteWeapon: "axe"
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  weight: 10,
  id: "Rope",
  image: './assets/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 2,
  id: "Knife",
  image: './assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: 10,
  id: "Candlestick",
  image: './assets/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 16,
  id: "Dumbbell",
  image: './assets/dumbell.png'
}

const poison = {
  name: 'Bottole of Poison',
  weight: 0.1,
  id: "Poison",
  image: './assets/poison.png'
}

const axe = {
  name: 'Axe',
  weight: 5,
  id: "Axe",
  image: './assets/axe.png'
}

const bat = {
  name: 'Bat',
  weight: 8,
  id: "Bat",
  image: './assets/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: 8,
  id: "Trophy",
  image: './assets/trophy.png'
}

const pistol = {
  name: 'Pistol',
  weight: 3,
  id: "Pistol",
  image: './assets/pistol.png'
}

// OBJECTS FOR ALL THE ROOMS

const diningRoom = {
  name: 'Dining Room',
  image: './assets/dining.png'
}

const conservatory = {
  name: 'Conservatory',
  image: './assets/conservatory.png'
}

const kitchen = {
  name: 'Kitchen',
  image: './assets/kitchen.png'
}

const study = {
  name: 'Study',
  image: './assets/study.png'
}

const library = {
  name: 'Library',
  image: './assets/library.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: './assets/ball.png'
}

const lounge = {
  name: 'Lounge',
  image: './assets/lounge.png'
}

const ballroom = {
  name: 'Ballroom',
  image: './assets/ballroom.png'
}

const hall = {
  name: 'Hall',
  image: './assets/hall.png'
}

const spa = {
  name: 'Spa',
  image: './assets/spa.png'
}

const livingRoom = {
  name: 'Living Room',
  image: './assets/livingroom.jpg'
}

const observatory = {
  name: 'Observatory',
  image: './assets/observatory.png'
}

const theater = {
  name: 'Theater',
  image: './assets/theater.png'
}

const guestHouse = {
  name: 'Guest House',
  image: './assets/guesthouse.png'
}

const patio = {
  name: 'Patio',
  image: './assets/patio.png'
}



// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
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

let mysteryobject = {
  killer: "",
  weapon: "",
  room: "",
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
  document.getElementById("favouriteWeapon").innerHTML = `Favourite weapon: ${shuffleFavouriteWeapon()}`
}

document.getElementById('killerCard').addEventListener('click', pickKiller)

// CREATE FUNCTIONS pickWeapon 

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight} kilos`
  document.getElementById("weaponImage").src = mystery.weapon.image;
}

document.getElementById('weaponCard').addEventListener('click', pickWeapon)


// CREATE FUNCTIONS pickRoom 

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById("roomName").innerHTML = `${mystery.room.name}`
  document.getElementById("roomImage").src = mystery.room.image
}

document.getElementById('roomCard').addEventListener('click', pickRoom)



// STEP 5 Create a function which change favorite weapon for each person

// This function will be invoked when you click on the killer card.
const shuffleFavouriteWeapon = () => {
  return randomSelector(weapons).id
}


// CREATE A FUNCTION revealMystery that will be invoked when you click that button. 

const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    alert("No mystery is yet to be revealed!");
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, a ${mystery.killer.age} years old ${mystery.killer.occupation}, in the ${mystery.room.name} with a ${mystery.weapon.name}`
  }
}
