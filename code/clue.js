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
console.log(mrGreen.description);

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is quick-witted, who lost his medical license for having an affair with one of his patients.',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
console.log(professorPlum.description);

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A stock femme fatale, she is typically portrayed as young, cunning and attractive.',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Runs an underground brothel'
}
console.log(missScarlet.description);

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A grand madame, the wife of a U.S. Senator who is accused of taking bribes',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Housewife'
}
console.log(mrsPeacock.description); 

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified, dapper and dangerous military man.',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'War profiteer'
}
console.log(colonelMustard.description); 

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled servant. Depicted as the widow of a nuclear physicist whose death she is suspected of being behind',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Nurse'
}
console.log(mrsWhite.description); 

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  material: 'textile'
}
console.log(rope);

const knife = {
  name: 'knife',
  material: 'metal'
}
console.log(knife);

const candlestick = {
  name: 'candlestick',
  weight: 'silver'
}
console.log(candlestick);

const dumbbell = {
  name: 'dumbbell',
  weight: 'iron'
}
console.log(dumbbell);

const poison = {
  name: 'poison',
  weight: 'liquid'
}
console.log(poison);

const axe = {
  name: 'axe',
  material: 'metal'
}
console.log(axe);

const bat = {
  name: 'bat',
  material: 'wood'
}
console.log(bat);

const trophy = {
  name: 'trophy',
  material: 'silver'
}
console.log(trophy);

const pistol = {
  name: 'pistol',
  material: 'metal'
}
console.log(pistol);

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
console.log(suspects);

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
console.log(weapons);

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
console.log(rooms);

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
