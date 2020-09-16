// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  age: 55,
  occupation: 'Entrepreneur',
  image: 'assets/green.png',
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  age: 46,
  occupation: 'Scientist',
  image: 'assets/plum.png'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  age: 40,
  occupation: 'Actress',
  image: 'assets/scarlet.png'
}

const mrsPeacock = {
  firstname: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  age: 49,
  occupation: 'Ornithologist',
  image: 'assets/peacock.png'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  age: 72,
  occupation: 'Hunter',
  image: 'assets/mustard.png'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastname: 'White',
  color: 'white',
  age: 70,
  occupation: 'Housekeeper',
  image: 'assets/white.png'
  }

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 8
}

const knife = {
  name: 'knife',
  weight: 2
}

const candlestick = {
  name: 'candlestick',
  weight: 4
}

const dumbbell = {
  name: 'dumbbell',
  weight: 8
}

const poison = {
name: 'poison',
weight: 1
}

const axe = {
  name: 'axe',
  weight: 12
}

const bat = {
  name: 'bat',
  weight: 10
}

const trophy = {
  name: 'trophy',
  weight: 8
}

const pistol = {
  name: 'pistol',
  weight: 8
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// STEP 2 - GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS:

const suspects = [
  mrGreen,
  professorPlum,
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



// STEP 3 - THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
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
