// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// Murders
const cluedoMurders = {
  mrGreen : {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.jpg',
    occupation: 'Entrepreneur'
  },
  profPlum : {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'He is financially ruined',
    age: 64,
    image: 'assets/plum.jpg',
    occupation: 'Looking for opportunities'
  },
  missScarlet : {
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'Golddigger',
    age: '"25"',
    image: 'asset/scarlet.jpg',
    occupation: 'Classified' 
  }, 
  mrsPeacock : {
    firstName: 'Eleonor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'Crazy',
    age: 51,
    image: 'asset/peacock.jpg',
    occupation: 'Hired gun' 
  },
  colMustard : {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Solid',
    age: 83,
    image: 'asset/mustard.jpg',
    occupation: 'No one knows' 
  }
}

// Store firstName + lastName from our object to suspects array
suspects = []

const getMurderNames = (obj) => {
  for ( let i in obj ) {
    suspects.push(`${obj[i].firstName} ${obj[i].lastName}`)
  }
}

getMurderNames(cluedoMurders)

// Check if suspects array are populated
// console.log(suspects)



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

const weapons = []
const rooms = []

const getNames = (obj, arr) => {
  for ( let i in obj ) {
    arr.push(`${obj[i].name}`)
  }
}

getNames(cluedoWeapons, weapons)
getNames(cluedoRooms, rooms)

// Check if weapons and rooms arrays are populated
console.log(weapons)
console.log(rooms)


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

// const suspects = [
//   mrGreen,
//   mrsWhite
//   // ...  and the rest
// ]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
