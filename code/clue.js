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

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He speaks seven languages',
  age: 38,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'She is a trained ninja',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Programmer'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'peacock',
  description: 'She owns a zoo',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Zoo-owner'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: 'His biggest hobby is playing chess',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Retired'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She has many secrets',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Unknown'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  material: 'textile',
}

const knife = {
  name: 'knife',
  weight: 10,
  material: 'steel',
}

const candlestick = {
  name: 'candlestick',
  weight: 10,
  material: 'brass',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  material: 'iron',
}

const poison = {
  name: 'poison',
  weight: 2,
  material: 'chemical',
}

const axe = {
  name: 'axe',
  weight: 30,
  material: 'steel',
}

const bat = {
  name: 'bat',
  weight: 25,
  material: 'wood',
}

const trophy = {
  name: 'trophy',
  weight: 30,
  material: 'silver',
}

const pistol = {
  name: 'pistol',
  weight: 10,
  material: 'steel',
}

console.log(mrsWhite.firstName)
console.log(trophy.weight)
console.log(missScarlet.occupationg)
console.log(bat.material)


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite
  // ...  and the rest
]

const weapons = []

const rooms = []

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