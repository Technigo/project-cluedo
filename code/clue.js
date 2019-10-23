// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS: The suspects Mr Green - Jacob Green Professor Plum - Victor Plum Miss Scarlet - Cassandra Scarlet Mrs Peacock - Eleanor Peacock Colonel Mustard - Jack Mustard Mrs White - Mrs White

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
  color: "brown",
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


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE. The Weapons Rope Knife Candlestick Dumbbell Poison Axe Bat Trophy Pistol

const rope = {
  name: "rope",
  weight: 10
}
const knife = {
  name: "knife",
  weight: 2
}
const candlestick = {
  name: "candlestick",
  weight: 1
}
const dumbbell = {
  name: "dumbbell",
  weight: 40
}
const poison = {
  name: "poison",
  weight: 60
}
const axe = {
  name: "axe",
  weight: 50
}
const bat = {
  name: "bat",
  weight: 15
}
const trophy = {
  name: "trophy",
  weight: 3
}
const pistol = {
  name: "pistol",
  weight: 90
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. The Rooms Dinning Room Conservatory Kitchen Study Library Billiard Room Lounge Ballroom Hall Spa Living Room Observatory Theater Guest House Patio

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

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
const randomSelectorSuspects = (suspectsGroup) => {
  return suspectsGroup[Math.floor(Math.random() * suspectsGroup.length)];
};

const randomSelectorWeapons = (weaponsGroup) => {
  return weaponsGroup[Math.floor(Math.random() * weaponsGroup.length)];
};

//const randomSelectorRooms = (roomsGroup) => {
  //return roomsGroup[Math.floor(Math.random() * roomsGroup.length)];
//};

console.log(randomSelectorSuspects(suspects).firstName + " " + randomSelectorSuspects(suspects).lastName); 
//console.log(randomSelectorWeapons(weapons).name);
//console.log(randomSelectorWeapons(rooms));


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
//const pickKiller = () => {
  //mystery.killer = randomSelector(suspects); // This assigns a random suspect to the mystery.
  

  
  //const theKiller = document.getElementById("killer"); // This selects the HTML element that should get colorized
  

 
  //theKiller.style.background = mystery.killer.color 
//}  
  
// This sets the color of the card to the killer's color (Note: Ensure that the color can be set as CSS property. For example, "mustard" is not a color, but "orange" is

  const pickKiller = () => {
    //This will randomly select a killer from the suspects. And add that to the mystery object.

    mystery.killer = randomSelectorSuspects(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
    
    const theKiller = document.getElementById("killer")
    const theKillerName = document.getElementById("killerName")
    theKiller.style.background = mystery.killer.color
    theKillerName.innerHTML =
      mystery.killer.firstName + " " + mystery.killer.lastName
  }
