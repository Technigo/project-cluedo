// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Mr',
  lastName: 'Green',
  color: 'green',
  description: "He's made alot of dodgy connections",
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'A proffessor of murder??',
  age: 60,
  image: 'assets/plum.png',
  occupation: 'Professor'
};

const missScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'A oil heiress with alot of enemies',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Heiress'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'peacock',
  description: "A successful business woman who's made some dirty deals",
  age: 47,
  image: 'assets/peacock.png',
  occupation: 'Buisness woman'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: "A colonel with a bloody past",
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Retired colonel'
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: "A housekeeper who has alot of secrets to keep",
  age: 67,
  image: 'assets/white.png',
  occupation: 'Eternal housekeeper'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
};

const knife = {
  name: 'knife',
  weight: 22
};

const candlestick = {
  name: 'candlestick',
  weight: 40
};

const dumbbell = {
  name: 'dumbbell',
  weight: 55
};

const poison = {
  name: 'poison',
  weight: 15
};

const axe = {
  name: 'axe',
  weight: 75
};

const bat = {
  name: 'bat',
  weight: 66
};

const trophy = {
  name: 'trophy',
  weight: 79
};

const pistol = {
  name: 'pistol',
  weight: 83
};

// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS THERE.

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
