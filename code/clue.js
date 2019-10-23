// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const mrsWhite = {
  firstName: "White",
  lastName: "White",
  color: "white",
  description: "She is a good actress",
  age: 63,
  image: "assets/white.png",
  occupation: "Actress"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is quick witted",
  age: 43,
  image: "assets/green.png",
  occupation: "Professor"
};
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is smart",
  age: 40,
  image: "assets/green.png",
  occupation: "Fashion designer"
};
const mrsPeacock  = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is verbal",
  age: 39,
  image: "assets/green.png",
  occupation: "Author"
};
const mrMustard = {
  firstName: "Colonel",
  lastName: "Mustard",
  color: "yellow",
  description: "He is dangerous",
  age: 26,
  image: "assets/green.png",
  occupation: "Military"
};
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const Rope = {
  name: "Rope",
  weight: 17
};

const Knife = {
  name: "Knife",
  weight: 2
};

const Candlestick = {
  name: "Candlestick",
  weight: 1
};
                                         
const Dumbbell = {
  name: "Dumbbell",
  weight: 23
};

const Poison = {
  name: "Poison",
  weight: 8
};

const Axe = {
  name: "Axe",
  weight: 6
};

const Bat = {
  name: "Bat",
  weight: 3
};

const Trophy = {
  name: "Trophy",
  weight: 18
};

const Pistol = {
  name: "Pistol",
  weight: 15
};


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningroom = "diningroom";
const conservatory = "conservatory";
const kitchen = "kitchen";
const study = " study";
const library = "library";
const billiardroom = "billiardroom";
const lounge = "lounge";
const ballroom = "ballroom";
const hall = "hall";
const spa = "spa";
const livingroom = "livingroom";
 


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

suspects.forEach(suspect => {
  console.log(`${suspect.firstName} ${suspect.lastName}`);
});

const weapons = [
  Knife,
  Candlestick,
  Dumbbell,
  Poison,
  Axe,
  Bat,
  Trophy,
  Pistol                      
];
weapons.forEach(function(element) {
  console.log(element.name);
});


const rooms = [
  diningroom,
  conservatory,
  kitchen,
  study,
  library,
  billiardroom,
  lounge,
  ballroom,
  hall,
  spa,
  livingroom
 ]
 console.log(rooms);


 


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  const theKillerName = document.getElementById("killerName");

  theKiller.style.background = mystery.killer.color;
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
