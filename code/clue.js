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
//console.log(mrGreen.age, mrGreen.lastName, mrGreen.description);

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple', //green is this suppose to be changed?
  description: 'He is a nuclear specialist',
  age: 84,
  image: 'assets/plum.png',
  occupation: 'Retired'
}
//console.log(professorPlum.description)

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red', //green is this suppose to be changed?
  description: 'She is a specialist in freelance espionage',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}
//console.log(missScarlet.description, missScarlet.firstName)

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue', //green is this suppose to be changed?
  description: 'She always maintains her dignity',
  age: 57,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}
//console.log(mrsPeacock.description)

const colonelMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow', //green is this suppose to be changed?
  description: 'He is a great hunter',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}
//console.log(colonelMustard.lastName, colonelMustard.description)

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white', //green is this suppose to be changed?
  description: 'Loyal and confidant',
  age: 72,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}
//console.log(mrsWhite.age, mrsWhite.occupation)



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
//console.log(rope.weight)

const knife = {
  name: 'knife',
  weight: 7
}

const candelstick = {
  name: 'candelstick',
  weight: 12
}

const dumbbell = {
  name: 'dumbbell',
  weight: 24
}

const poison = {
  name: 'poison',
  weight: 1
}

const axe = {
  name: 'axe',
  weight: 17
}

const bat = {
  name: 'bat',
  weight: 4
}

const trophy = {
  name: 'trophy',
  weight: 29
}

const pistol = {
  name: 'pistol',
  weight: 11
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]
/*
suspects.forEach((name) => {
  console.log(name)
});*/
//console.log(suspects[0].firstName)


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
/*
weapons.map((killerWeapons) => {
  console.log(killerWeapons)
})*/
//console.log(weapons.length)
//console.log(weapons.slice(-1)[0].name)


const rooms = [
  "Dining Room", 
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
/*
rooms.forEach((place) => {
  console.log(place)
});*/
//rooms.sort();
//console.log(rooms)
//console.log(rooms.length)


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
