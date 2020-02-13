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
  firstName: 'Stella',
  lastName: 'White',
  color:'purple',
  description:'hse is a meticulous and careful person',
  age:68,
  image:'assets/white.png',
  occupation:'maid',
}
const colonelMustard = {
  firstName: 'George',
  lastName: 'Mustard',
  color:'yellow',
  description: 'A retired colonel fulfilling his dreams of being a master gardener',
  age:72,
  image:'assets/mustard.png',
  occupation: 'retired colonel',
}
const drPlum = {
  firstName: 'Julien',
  lastName: 'Plum',
  color:'pink',
  description:'New in his proffession, he dreams of becoming the yongest proffessor at Oxford',
  age: 31,
  image:'assets/plum.png',
  occupation:'doctor',
}
const damePeacock = {
  firstName: 'Andromeda',
  lastName: 'Peacock',
  color:'blue',
  description:'Widow after baron Sneezalot, owner of a large wineyard in France',
  age:45,
  image:'assets/peacock',
  occupation:'Businessowner',
}
const msScarlet = {
  firstName: 'Angela',
  lastName: 'Scarlet',
  color:'red',
  description:'One of the most popular designers of swanky dresses',
  age:26,
  image:'assets/scarlet.png',
  occupation:'Fashiondesigner',
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  difficulty:'hard',
  weight: 10,
}
const dagger = {
  name:'dagger',
  difficulty:'easy',
}
const candelabra = {
  name: 'candelabra',
  difficulty: 'intermediete',
}
const ledpipe = {
  name: 'ledpipe',
  difficulty:'advanced',
}
const wrench = {
  name:'wrench',
  difficulty:'hard',
}
const poison = {
  name:'poison',
  difficulty:'advanced',
}
const pistol = {
  name: 'pistol',
  difficulty:'easy',
}
const suspects = [
  mrGreen,
  mrsWhite,
  colonelMustard,
  drPlum,
  damePeacock,
  msScarlet
]
const weapons = [
  'rope',
  'dagger',
  'candelabra',
  'ledpipe',
  'wrench',
  'poison',
  'pistol'
]
const rooms = [
'hall',
'lounge',
'dining room',
'kitchen',
'garden',
'conservatory',
'billiard room',
'study',
'library'
]

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
