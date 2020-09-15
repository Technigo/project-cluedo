//below variables to be used in last function when validate if cards have been clicked or not

let pickedKiller;
let pickedRoom;
let pickedWeapon;

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He would be the smartest man on the planet if he wasn't so scatterbrained.",
  age: 50,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Shea always has to be the center of attention.",
  age: 24,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She's proper and has excellent manners",
  age: 60,
  image: "assets/peacock.png",
  occupation: "None"
}

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He loves to challenge people to a duel if they cross him, and he isn't afraid to speak his mind.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She owns nothing to her name and takes her domestic duties very seriously.",
  age: 55,
  image: "assets/white.png",
  occupation: "Maid"
}

/* testing objects in console.

console.log(mrGreen.firstName);
console.log(mrsWhite.description);
console.log(colonelMustard.age); */

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  color: "beige",
  weight: 10,
  image: "assets/white.png"
}

const knife = {
  name: "knife",
  color: "grey",
  weight: 11,
  image: "assets/white.png"
}

const candlestick = {
  name: "candlestick",
  weight: 12,
  image: "assets/white.png"
}

const dumbbell = {
  name: "dumbbell",
  weight: 13,
  image: "assets/white.png"
}

const poison = {
  name: "poison",
  weight: 14,
  image: "assets/white.png"
}

const axe = {
  name: "axe",
  weight: 15,
  image: "assets/white.png"
}

const bat = {
  name: "bat",
  weight: 16,
  image: "assets/white.png"
}

const trophy = {
  name: "trophy",
  weight: 17,
  image: "assets/white.png"
}

const pistol = {
  name: "pistol",
  weight: 18,
  image: "assets/white.png"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: "Dining Room",
  image: "assets/white.png"
}

const conservatory = {
  name: "Conservatory",
  image: "assets/white.png"
}

const kitchen = {
  name: "Kitchen",
  image: "assets/white.png"
}

const study = {
  name: "Study",
  image: "assets/white.png"
}

const library = {
  name: "Library",
  image: "assets/white.png"
}

const billiardRoom = {
  name: "Billiard Room",
  image: "assets/white.png"
}

const lounge = {
  name: "Lounge",
  image: "assets/white.png"
}

const ballroom = {
  name: "Ballroom",
  image: "assets/white.png"
}

const hall = {
  name: "Hall",
  image: "assets/white.png"
}

const spa = {
  name: "Spa",
  image: "assets/white.png"
}

const livingRoom = {
  name: "Living Room",
  image: "assets/white.png"
}

const observatory = {
  name: "Observatory",
  image: "assets/white.png"
} 

const theater = {
  name: "Theater",
  image: "assets/white.png"
}

const guestHouse = {
  name: "Guest House",
  image: "assets/white.png"
}

const patio = {
  name: "Patio",
  image: "assets/white.png"
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: "",
  weapon: "",
  room: ""  
}


// This function will be invoked when you click on the killer card.
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickKiller = () => {
  pickedKiller= true;
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerImage').src = `${mystery.killer.image}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
}

//This function will be invoked when you click on the weapon card.

const pickWeapon = () => {
  pickedWeapon = true;
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponWeight").innerHTML = `${mystery.weapon.weight}`;
  document.getElementById("weaponImage").src = `${mystery.weapon.image}`;
}

//This function will be invoked when you click on the room card.

const pickRoom = () => {
  pickedRoom = true;
  mystery.room = randomSelector(rooms)
  
  document.getElementById("roomCard").style.background = mystery.room.color
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`
  document.getElementById('roomImage').src = `${mystery.room.image}`;
}

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const answerMystery = document.getElementById("mysteryAnswer")
 if (pickedKiller === true || pickedRoom === true || pickedWeapon === true) {
    answerMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`);
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("newGameButton").style.display = "block";
  } else { 
    answerMystery.innerHTML = ("Please choose a killer, a weapon and a room");
  }
}
