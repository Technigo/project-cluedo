// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const suspects = [
  {
    name: 'Mr Green',
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "assets/green.png",
    occupation: "Entrepreneur",
  },
  {
    name: 'Miss Scarlet',
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "She has a temper",
    age: 32,
    image: "assets/scarlet.png",
    occupation: "Writer",
  },
  {
    name: 'Professor Plum',
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "He is easily offended",
    age: 37,
    image: "assets/plum.png",
    occupation: "Professor in detergents",
  },
  {
    name: 'Mrs Peacock',
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is very good at solving problems",
    age: 46,
    image: "assets/peacock.png",
    occupation: "Entrepreneur",
  },
  {
    name: 'Colonel Mustard',
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is known to hold a grudge",
    age: 68,
    image: "assets/mustard.png",
    occupation: "Colonel",
  },
  {
    name: 'Mrs White',
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
    description: "old Astra model 903, heavy thing with a muffle",
  },
];

const rooms = [
  {
    name: "Dining room",
    description: "We enter the Dining room. A long, dark room lighted with candles. A big dining table and 12 chairs sits in the middle. Under the table we see the body, feet sticking out under the white linen cloth.",
  },
  {
    name: "Conservatory",
    description: "We enter the Conservatory. It's a big, glass conservatory filled with mediterrainian plants. On a bed of roses the victim rests.. Quite poetic..",
  },
  {
    name: "Theater",
    description: "We enter the Theater. To be or not to be. Well, in this case the victim is no more.. The red velvet curtains drapering the stage is a perfect disguise for a body",
  },
  {
    name: 'Kitchen',
    description: "We enter the Kitchen. It's filled with sharp knifes and boiling pots. The body is found in the pantry, flour spilled everywhere. Such a mess.."
  },
  {
    name: 'Study',
    description: 'We enter the Study. Bookcases from the floor reaching the ceiling, but all of the books are on the floor. There sure was a scuffle going on here. The result: Body under the desk.'
  },
  {
    name: 'Library',
    description: 'We enter the Library. Large bookcases covers the wall. A ladder is resting against one bookcase, and in the space between the bookcase and ceiling the body is found. How did the killer get it up there?'
  },
  {
    name: 'Billiard room',
    description: "We enter the Billiard room. It's dark, woodpaneled room with a huge billiardtable in the middle. Of course, the body is found lying straight on the table. What a mess.."
  },
  {
    name: 'Lounge',
    description: "We enter the Lounge. Velvet couches and a broken glasstable. Sherry is spilled on a dark, blue carpet. Wait a minute.. that's not sherry! A body is sticking out under one of the couches.."
  },
  {
    name: 'Ballroom',
    description: "We enter the Ballroom. Once there was a ball filled with joy and music. Now there's only tragic, blood and death. The body is found in a corner of the room, the once so shiny marble floor is now covered in blood."
  },
  {
    name: 'Hallway',
    description: 'We enter the Hallway. Creeky floorboards and portraits glaring. The killer must have been very quiet and have known exactly which boards to avoid to not be discovered. Behind a big plant we find the body, the former lady of the house sneering from her portrait.'
  },
  {
    name: 'Spa',
    description: "We enter the Spa. Soft music playing, the smell of chlorine and moist air. If it wasn't for the body floating in the pool, it would be quite inviting."
  },
  {
    name: 'Living Room',
    description: "We enter the Living room. With the cracked tv's distorted sound in the background and whiskeybottle on the floor, there are plenty of evidence of a scuffle. The body was carefully placed in a chair in front of the tv."
  },
  {
    name: 'Guest House',
    description: 'We enter the guest house. It has a spartan decor with two small beds. This is far from inviting, black mold covering the corners of the ceiling. The body was found in the closet, maybe the murderer was in a rush?'
  },
  {
    name: 'Patio',
    description: 'This patio could really use a renovation. Loose floorboards everywhere. A perfect place to hide a body.'
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
const mystery = {
  killer: "",
  weapon: "",
  room: ""
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight} lbs`;
  document.getElementById(
    "weaponDescription"
  ).innerHTML = `${mystery.weapon.description}`;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
  };

const revealMystery = () => {
  document.getElementById('messageBox').classList.remove('hidden');
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.name} in the ${mystery.room.name} with the ${mystery.weapon.name}. Scandalous!`;
  document.getElementById("roomDescription").innerHTML = `In the darkest hour, while everyone else were busy doing other stuff ${mystery.killer.name} acted quickly. ${mystery.room.description}`;
};
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
