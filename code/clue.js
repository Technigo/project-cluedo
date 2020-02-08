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
  firstName: 'Fru',
  lastName: 'White',
  color: 'purple',
  description: 'She can bake muffins',
  age: 35,
  image: 'assets/green.png',
  occupation: 'Housewife'

}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Blue',
  description: 'young and beautiful',
  age: 22,
  image: 'assets/green.png',
  occupation: 'Acter'

}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Pink',
  description: 'Likes to work out',
  age: 55,
  image: 'assets/green.png',
  occupation: 'Bodybuilder'

}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'Likes to hang out',
  age: 26,
  image: 'assets/green.png',
  occupation: 'Doctor'

}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Red',
  description: 'He has two wives',
  age: 40,
  image: 'assets/green.png',
  occupation: 'Police'

}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 20
}

const candlestick = {
  name: 'candlestick',
  weight: 15
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30
}

const poison = {
  name: 'poison',
  weight: 35
}

const axe = {
  name: 'axe',
  weight: 23
}

const bat = {
  name: 'bat',
  weight: 30
}

const trophy = {
  name: 'trophy',
  weight: 36
}

const pistol = {
  name: 'pistol',
  weight: 21
}

  const diningRoom = "Dining Room"
  const conservatory = "Conservatory"
  const kitchen = "Kitchen"
  const study = "Study"
  const library = "Library"
  const billiardRoom = "Billiard Room"
  const lounge = "Lounge"
  const ballroom = "Ballroom"
  const hall = "Hall"
  const spa = "Spa"
  const livingRoom = "Living Room"
  const observatory = "Observatory"
  const theater = "Theater"
  const guestHouse = "Guest House"
  const patio = "Patio"

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  professorPlum
  ]

  //suspects.forEach((suspect) => { console.log(suspect.age) })


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

  //weapons.forEach((weapons) => { console.log(weapons.name) })

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

const mystery = {
  killer: "",
  weapon: "",
  room: ""
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.age}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  
  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}

const pickRoom = () => {
  
  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

document.getElementById("killerCard").onclick = pickKiller;
document.getElementById("weaponCard").onclick = pickWeapon;
document.getElementById("roomCard").onclick = pickRoom;

  

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
