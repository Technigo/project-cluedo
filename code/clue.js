// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// const mrGreen = {
//   firstName: "Jacob",
//   lastName: "Green",
//   color: "green",
//   description: "He has a lot of connections",
//   age: 45,
//   image: "assets/green.png",
//   occupation: "Entrepreneur"
// }

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

// const rope = {
//   name: "rope",
//   weight: 10
// }

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  {
  alias: "Mr. Green"
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
 },
 {
  alias: "Mrs. White"
  firstName: "Blanche",
  lastName: "White",
  color: "White",
  description: "She is the long time nanny and cook to Mr. Boddy/Dr. Black",
  age: 70,
  image: "assets/white.png",
  occupation: "Housekeeper"
 },
 {
  alias: "Professor Plum"
  firstName: "Peter",
  lastName: "Plum",
  color: "purple",
  description: "Plum has come to Boddy/Black, looking for some fun.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
 },
 {
  alias: "Miss Scarlet"
  firstName: "Josephine",
  lastName: "Scarlett",
  color: "red",
  description: "She is described as a movie star who will do anything to stay in the spotlight.",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
 },
 {
  alias: "Mrs. Peacock"
  firstName: "Patricia",
  lastName: "Peakock",
  color: "blue",
  description: "Despite her innocent looks, she is a formidable politician.",
  age: 55,
  image: "assets/peacock.png",
  occupation: "Socialite"
 },
 {
  alias: "Colonel Mustard"
  firstName: "Michael",
  lastName: "Mustard",
  color: "yellow",
  description: "Michael is a retired military man trying to pen his autobiography to supplement a dwindling income.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel"
 }
]

const weapons = [
  {
    name: "rope",
    weight: 10
    special: "Thick rope around 2 meters in length"
  },
  {
    name: "knife",
    weight: 7
    special: "A military knife from the 2nd world war"
  },
  {
    name: "candlestick",
    weight: 9
    special: "An old four-armed candelstick in copper"
  },
  {
    name: "dumbbell",
    weight: 12
    special: "Not really a heavy wheight but still a dumbell"
  },
  {
    name: "posion",
    weight: 1
    special: "Unokwn substanse in a bottle with a scull on the label"
  },
  {
    name: "axe",
    weight: 13
    special: "A medival axe that probably does best on the wall"
  },
  {
    name: "bat",
    weight: 11
    special: "An old baseball bat signed by Jackie Robinson"
  },
  {
    name: "trophy",
    weight: 15
    special: "A trophy award for best in show"
  },
  {
    name: "pistol",
    weight: 9
    special: "9mm beretta with a silencer"
  },
]



const rooms = [
  "Dinning Room",
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
