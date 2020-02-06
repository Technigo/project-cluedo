// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const suspects = [{
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'plum',
    description: 'He is a fellow with a bow tie and glasses',
    age: 36,
    image: 'assets/plum.png',
    occupation: 'Professor'
  },
  {
    firstName: 'Cassandra',
    lastName: 'Scarlett',
    color: 'red',
    description: 'She is highly attractive',
    age: 25,
    image: 'assets/scarlet.png',
    occupation: 'Actress'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'She an elderly yet still attractive woman',
    age: 70,
    image: 'assets/peacock.png',
    occupation: 'Socialite'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'He is a retired military man',
    age: 60,
    image: 'assets/mustard.png',
    occupation: 'Colonel'
  },
  {
    firstName: 'Mrs',
    lastName: 'White',
    color: 'white',
    description: 'She is a stiff matronly housekeeper',
    age: 68,
    image: 'assets/white.png',
    occupation: 'Housekeeper'
  }
]

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

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