// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const suspects = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "assets/green.png",
    occupation: "Entrepreneur",
  },
  {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "She has a temper",
    age: 32,
    image: "assets/scarlet.png",
    occupation: "Writer",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "He is easily offended",
    age: 37,
    image: "assets/plum.png",
    occupation: "Professor in detergents",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is very good at solving problems",
    age: 46,
    image: "assets/peacock.png",
    occupation: "Entrepreneur",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is known to hold a grudge",
    age: 68,
    image: "assets/mustard.png",
    occupation: "Colonel",
  },
  {
    firstName: "Mrs",
    lastName: "White",
    color: "white",
    description:
      "Has been working in the house for as long as anyone can remember",
    age: "unknown",
    image: "assets/white.png",
    occupation: "Housekeeper",
  },
];

const weapons = [
  {
    name: "rope",
    weight: 3,
    description: "worn out",
  },
  {
    name: "knife",
    weight: 2,
    description: "brand new",
  },
  {
    name: "candlestick",
    weight: 4,
    description: "polished, but old",
  },
  {
    name: "dumbbell",
    weight: 22,
    description: "rusty",
  },
  {
    name: "poison",
    weight: 1,
    description: "small bottle containing rests of transparent liquid",
  },
  {
    name: "axe",
    weight: 7,
    description: "has a worn handle, blade has a tear",
  },
  {
    name: "bat",
    weight: 7,
    description: "long, wooden bat with a small crack on handle",
  },
  {
    name: "trophy",
    weight: 16,
    description:
      "heavy, brass trophy with a marble pedestal and inscription on bottom",
  },
  {
    name: "pistol",
    weight: 8,
    description: "old Astra model 903, heavy thing",
  },
];

const rooms = [
  {
    name: "Dining room",
    description: "Long, dark room lighted with candlelights. A big dining table and 12 chairs sits in the middle. Body was found under the table, feet sticking out under the white linen cloth.",
  },
  {
    name: "Conservatory",
    description: "Big glass,conservatory filled with mediterrainian plants. The body was found on a bed of roses.",
  },
  {
    name: "Theater",
    description: "The red velvet curtains drapering the stage was a perfect disguise for a body",
  },
  {
    name: 'Kitchen',
    description: 'Filled with sharp knifes and boiling '
  },
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
