// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// Murders
const cluedoMurders = {
  mrGreen : {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  },
  profPlum : {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'He is financially ruined',
    age: 64,
    image: 'assets/plum.png',
    occupation: 'Looking for opportunities'
  },
  missScarlet : {
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'Golddigger',
    age: '"25"',
    image: 'assets/scarlet.png',
    occupation: 'Classified' 
  }, 
  mrsPeacock : {
    firstName: 'Eleonor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'Crazy',
    age: 51,
    image: 'assets/peacock.png',
    occupation: 'Hired gun' 
  },
  colMustard : {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Solid',
    age: 83,
    image: 'assets/mustard.png',
    occupation: 'No one knows' 
  }
}

// Weapons
const cluedoWeapons = {
  rope : {
    name: 'rope',
    weight: 2,
    weightUnit: "kg",
    length: 20,
    lengthUnit: "cm"
  },
  knife : {
    name: 'knife',
    weight: 1,
    weightUnit: "kg",
    length: 30,
    lengthUnit: "cm"
  },
  candlestick : {
    name: 'candlestick',
    weight: 4,
    weightUnit: "kg",
    length: 25,
    lengthUnit: "cm"
  },
  dumbbell : {
    name: 'dumbbell',
    weight: 5,
    weightUnit: "kg",
    length: 20,
    lengthUnit: "cm" 
  },
  poison : {
    name: 'posion',
    weight: 13,
    weightUnit: "g",
  },
  axe : {
    name: 'axe',
    weight: 4,
    weightUnit: "kg",
    length: 35,
    lengthUnit: "cm"
  },
  bat : {
    name: 'bat',
    weight: 3,
    weightUnit: "kg",
    length: 25,
    lengthUnit: "cm"
  },
  trophy : {
    name: 'trophy',
    weight: 6,
    weightUnit: "kg",
    length: 30,
    lengthUnit: "cm"
  },
  pistol : {
    name: 'pistol',
    weight: 2,
    weightUnit: "kg",
    length: 17,
    lengthUnit: "cm"
  }
}

// Rooms
const cluedoRooms = {
  diningRoom : {
    name: 'Dining room'
  },
  conservatory : {
    name: "Conservatory"
  },
  kitchen : {
    name: "Kitchen"
  },
  study : {
    name: "Study"
  },
  library : {
    name: "Library"
  },
  billiardRoom : {
    name: "Billiard room"
  },
  lounge : {
    name: "Lounge"
  },
  ballroom : {
    name: "Ballroom"
  },
  hall : {
    name: "Hall"
  },
  spa : {
    name: "Spa"
  },
  livingRoom : {
    name: "Living room"
  },
  observatory : {
    name: "Observatory"
  },
  theater : {
    name: "Theater"
  },
  guestHouse : {
    name: "Guest house"
  },
  patio : {
    name: "Patio"
  }
}

suspects = []
// Return array of target object
suspects = Object.entries(cluedoMurders)
// Check that suspects is populated
// console.log(suspects)
// console.log(suspects[0][1].firstName + ' ' + suspects[0][1].lastName)
// console.log(`${suspects[0][1].firstName} ${suspects[0][1].lastName} favorite color is ${suspects[0][1].color}`)

weapons = []
// Return array of target object
weapons = Object.entries(cluedoWeapons)
// Check that weapons is populated
// console.log(weapons[0][1].name)
// console.log(`${weapons[0][1].name} weights ${weapons[0][1].weight} ${weapons[0][1].weightUnit}`)

rooms = []
// Return array of target object
rooms = Object.entries(cluedoRooms)


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {}
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  
  // console.log(mystery.killer)
  // console.log(mystery.killer[1].color)
  // console.log(mystery.killer[1].description)
  // console.log(mystery.killer[1].age)
  // console.log(mystery.killer[1].image)

  document.getElementById('killerCard').style.background = mystery.killer[1].color
  document.getElementById('killerName').innerHTML = `${mystery.killer[1].firstName} ${mystery.killer[1].lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer[1].age}`
  document.getElementById('killerImage').src = mystery.killer[1].image
  document.getElementById('killerDescription').innerHTML = `Info: ${mystery.killer[1].description}`
}

const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  console.log(mystery.weapon)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById('weaponcard').style.background = mystery.killer.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon[1].name}`
}

const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  console.log(mystery.room)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room[1].name}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const clickBait = () => {
  element = document.getElementById("mystery")
  element.innerHTML = `The murder is ${mystery.killer[1].firstName} ${mystery.killer[1].lastName} in ${mystery.room[1].name} with ${mystery.weapon[1].name} `
}
