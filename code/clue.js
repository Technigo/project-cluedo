// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "With his good looks and charm he has found a dark side being sneaky.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "A movie star who will do anything to stay in the spotlight",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Despite her innocent looks, she is a formidable politician.",
  age: 52,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustad",
  color: "orange",
  description: "An expert in weapons and conspiracy",
  age: 58,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "Claiming to have loved her employer, but is no longer happy in her work",
  age: 62,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  color: "beige"
}
const knife = {
  name: "knife",
  weight: 90,
  color: "burgundy"
}
const candleStick = {
  name: "candlestick",
  weight: 180,
  color: "magenta"
}
const dumbBell = {
  name: "dumbbell",
  weight: 500,
  color: "blue"
}
const poison = {
  name: "poison",
  weight: 5,
  color: "green"
}
const axe = {
  name: "axe",
  weight: 400,
  color: "green"
}
const bat = {
  name: "bat",
  weight: 120,
  color: "green"
}
const trophy = {
  name: "trophy",
  weight: 180,
  color: "yellow"
}
const pistol = {
  name: "pistol",
  weight: 250,
  color: "blue"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
  mrsWhite
];


const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  // Detta ska vara strings eftersom det ej är "länkar" till objekt som de andra stringsen är. 
  "diningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardRoom",
  "lounge",
  "ballRoom",
  "hall",
  "spa",
  "livingRoom"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

// Denna kod har de gett oss, den ser ut så här. 
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// // Här evokar jag funktionen och sätter in varje array som jag vill dra igenom. 
// randomSelector(suspects);
// randomSelector(weapons);
// randomSelector(rooms);

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
// Denna ska vara tom till en början, den heter  mysery pga info nedan.
// objekt har alltid = iunnan fiskmås
const mystery = {
}

// Detta kallades handlePickIngredients under föreläsningen?

// const secret { }
// const mysteryKeeper = () => {
//   const pickKiller = randomSelector(suspects)
//   const pickWeapon = randomSelector(weapons)
//   const pickRoom = randomSelector(rooms)

//   secret.suspects = pickKiller;
//   secret.weapons = pickWeapon;
//   secret.rooms = pickRooms;
// };

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.

// Denna är borta pga funktionen onclick skapas redan på html
// document.getElementById().onclick = mysteryKeeper

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  // .killer fanns inte i mystery inann, men skapas här. 
  mystery.killer = randomSelector(suspects);
  // mysteryKeeper.push(mystery.Killer); Behövs ej för dne pushas ej, skpaas ovan

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  // id i javasrcirpt, ej class. mer unikt.
  const theKillerName = document.getElementById("killerName")

  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")
  // Denna funktion sätter bkagrundsfärg på myster killer, dvs den som visas
  theKiller.style.background = mystery.killer.color
  // Denna funkton "går in i html" och "skriver om" för att visa namnet på killern, som har skapats/sparats i mystery-objektet. 
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  // Gör för alla andra!
  theKillerImage.setAttribute("src", mystery.killer.image)
}

// pickKiller() Ska ej vara med, för att den är evokad i html redan. 

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon")

  const theWeaponName = document.getElementById("weaponName")

  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML =
    mystery.weapon.name
}

const pickRoom = () => {

  mystery.room = randomSelector(rooms)
  const theRoomName = document.getElementById("roomName")
  theRoomName.innerHTML =
    mystery.room
}


// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {

  let theTruth = document.getElementById("mystery")
  theTruth.innerHTML =
    `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}
