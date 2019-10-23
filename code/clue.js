// OBJECTS FOR ALL THE SUSPECTS, 
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
  description: "He is very smart",
  age: 58,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is very good at coding",
  age: 28,
  image: "assets/scarlet.png",
  occupation: "Hacker"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is good at medical treatment",
  age: 33,
  image: "assets/peacock.png",
  occupation: "Doctor"
}

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "orange",
  description: "He is good with weapons",
  age: 47,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She has a good fighting technique",
  age: 31,
  image: "assets/white.png",
  occupation: "Bodyguard"
};


// OBJECTS FOR ALL THE WEAPONS

const Rope = {
  name: "Rope",
  weight: 10
}
const Knife = {
  name: "Knife",
  weight: 2
}
const Candlestick = {
  name: "Candlestick",
  weight: 1
}
const Dumbbell = {
  name: "Dumbbell",
  weight: 40
}
const Poison = {
  name: "Poison",
  weight: 60
}
const Axe = {
  name: "Axe",
  weight: 50
}
const Bat = {
  name: "Bat",
  weight: 15
}
const Trophy = {
  name: "Trophy",
  weight: 3
}
const Pistol = {
  name: "Pistol",
  weight: 90
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. 

// ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS. 
// No Quatations on objects in arrays

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
]
  console.log(suspects);

const weapons = [
  Rope, 
  Knife,
  Candlestick,
  Dumbbell,
  Poison, 
  Axe, 
  Bat,
  Trophy, 
  Pistol
]
  console.log(weapons);

const rooms = [
  "DiningRoom", 
  "Conservatory", 
  "Kitchen", 
  "Study", 
  "Library", 
  "BilliardRoom", 
  "Lounge", 
  "Ballroom", 
  "Hall", 
  "Spa", 
  "LivingRoom", 
  "Observatory", 
  "Theater", 
  "GuestHouse", 
  "Patio"
]
  console.log(rooms);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

//Checking with console log that they are random
console.log(randomSelector(suspects).firstName + " " + randomSelector(suspects).lastName); 
console.log(randomSelector(weapons).name);
console.log(randomSelector(rooms));


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: "Mrs White",
  color: "white",
  image: "assets/white.png",
  weapon: "Dumbbell",
  room: "Spa"
};

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.


// This sets the color of the card to the killer's color (Note: Ensure that the color can be set as CSS property. For example, "mustard" is not a color, but "orange" is

  const pickKiller = () => {

    //This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
    // This selects the HTML element that should get colorized

    const theKiller = document.getElementById("killer") 
    const theKillerName = document.getElementById("killerName")
    
    theKiller.style.background = mystery.killer.color
    theKillerName.innerHTML =
      mystery.killer.firstName + " " + mystery.killer.lastName
  }

  // CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

  const pickWeapon = () => {

    mystery.weapon = randomSelector(weapons)

    const theWeapon = document.getElementById("weapon")
    const theWeaponName = document.getElementById("weaponName")
    
    theWeapon.style.background = mystery.weapon.color
    theWeaponName.innerHTML =
      mystery.weapon.name + " " + mystery.weapon.weight

  }

  const pickRoom = () => {

    mystery.room = randomSelector(rooms)

    //const theRoom = document.getElementById("room")
    const theRoomName = document.getElementById("roomName")
    
    theRoomName.style.background = mystery.room.color
    theRoomName.innerHTML = mystery.room
  }


// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


  //invoking the function revealMystery and sends alert with confirmation 
const revealMystery = (theKiller) => {
  alert (`The murder was committed by " + mysteryKiller + ", in the " + mystery.room +" "+ " with a " + mystery.weapon`);
  }
  
  //orderConfirmation is sent to the HTML to write it out on the site, connecting with ID from HTML
  document.getElementById
  ("mysteryRevealText").innerHTML = (`The murder was committed by ${mystery.killer}, in the ${mystery.room} with ${mystery.weapon}!`
    );