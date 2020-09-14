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

const professorPlum = {
  firstName: "Victor",
  lastName: 'Plum',
  color:'plum',
  description: 'He loves books',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor in Latin'
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'She loves food and wine',
  age: 37,
  image: 'assets/scarlet.png',
  occupation: 'Business woman'
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: 'Peacock',
  color: 'peacockBlue',
  description: 'She loves spending her money',
  age: 49,
  image: 'assets/peacock.png',
  occupation: 'Extremely rich heiress'
}

const colonelMustard = {
  firstName: "Jack",
  lastName: 'Mustard',
  color: 'mustard',
  description: 'He is always angry',
  age: 64,
  image: 'assets/mustard.png',
  occupation: 'War veteran'
}

const mrsWhite = {
  firstName: "Betty",
  lastName: 'White',
  color: 'white',
  description: 'She can convince anybody',
  age: 69,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 2
}
  
const candlestick = {
  name: 'candlestick',
  weight: 12
}

const dumbbell = {
  name: 'dumbbell',
  weight: 6
}

const poison = {
  name: 'poison',
  weight: 0.5
}

const axe = {
  name: 'axe',
  weight: 4
}

const bat = {
  name: 'bar',
  weight: 1
}

const trophy = {
  name: 'trophy',
  weight: 5
}

const pistol = {
  name: 'pistol',
  weight: 3
}
  

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.



// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  "mrGreen",
  "professorPlum",
  "missScarlet",
  "mrsPeacock",
  "colonelMustard",
  "mrsWhite"
];

console.log(suspects);

const weapons = [
  "rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol"
];

console.log(weapons);

const rooms = [
  "diningRoom", 
  "conservatory", 
  "kitchen", 
  "study", 
  "library", 
  "billiardRoom", 
  "lounge", 
  "ballroom", 
  "hall", 
  "spa", 
  "livingRoom", 
  "observatory", 
  "theater", 
  "guestHouse", 
  "patio"
];
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
