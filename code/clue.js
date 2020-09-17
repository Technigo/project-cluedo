const suspects = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 70,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'A professor in history and criminal technology',
    age: 62,
    image: 'plum.png',
    occupation: 'Detective'
  },
  {
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'A famous actor, been in many movies. Love antrophology',
    age: 47,
    image: 'scarlet.png',
    occupation: 'Actor'
  },
  {
    firstName: 'Eleonor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'Degree in criminal history and writing. Love tea and cookies',
    age: 59,
    image: 'assets/green.png',
    occupation: 'Author'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Passion of the military and hunting on his free time',
    age: 76,
    image: 'mustard.png',
    occupation: 'Military Officer'
  },
  {
    firstName: 'Jane',
    lastName: 'White',
    color: 'white',
    description: 'A nurse that worked as a midwife all her life',
    age: 74,
    image: 'white.png',
    occupation: 'Nurse'
  }
];
/*suspects.forEach((suspect) => {
  console.log(`${suspect.color}`)
}); */
console.log(suspects[3]);

const weapons = [
  {
    name: 'rope',
    weight: 10
  },
  {
    name: 'knife',
    weight: 1
  },
  {
    name: 'candlestick',
    weight: 0.1
  },
  {
    name: 'dumbbell',
    weight: 5
  },
  {
    name: 'poison',
    weight: 0.2
  },
  {
    name: 'axe',
    weight: 6
  },
  {
    name: 'bat',
    weight: 1.5
  },
  {
    name: 'trophy',
    weight: 4
  },
  {
    name: 'pistol',
    weight: 2
  }
];
weapons.forEach((weapon) => {
  console.log(`${weapon.weight}`)
});

const rooms = [
  'diningRoom', 
  'conservatory', 
  'kitchen', 
  'study', 
  'library', 
  'billiardRoom', 
  'lounge', 
  'ballroom', 
  'hall', 
  'spa', 
  'livingRoom', 
  'observatory', 
  'theatre', 
  'guestHouse', 
  'patio'
];
console.log(rooms[0]);

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
