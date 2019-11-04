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
    alias: "Mr. Green",
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "assets/green.png",
    occupation: "Entrepreneur"
  },
  {
    alias: "Mrs. White",
    firstName: "Blanche",
    lastName: "White",
    color: "White",
    description: "She is the long time nanny and cook to Mr. Boddy/Dr. Black",
    age: 70,
    image: "assets/white.png",
    occupation: "Housekeeper"
  },
  {
    alias: "Professor Plum",
    firstName: "Peter",
    lastName: "Plum",
    color: "purple",
    description: "Plum has come to Boddy/Black, looking for some fun.",
    age: 36,
    image: "assets/plum.png",
    occupation: "Professor"
  },
  {
    alias: "Miss Scarlet",
    firstName: "Josephine",
    lastName: "Scarlett",
    color: "red",
    description:
      "She is described as a movie star who will do anything to stay in the spotlight.",
    age: 25,
    image: "assets/scarlet.png",
    occupation: "Actress"
  },
  {
    alias: "Mrs. Peacock",
    firstName: "Patricia",
    lastName: "Peakock",
    color: "blue",
    description: "Despite her innocent looks, she is a formidable politician.",
    age: 55,
    image: "assets/peacock.png",
    occupation: "Socialite"
  },
  {
    alias: "Colonel Mustard",
    firstName: "Michael",
    lastName: "Mustard",
    color: "yellow",
    description:
      "Michael is a retired military man trying to pen his autobiography to supplement a dwindling income.",
    age: 57,
    image: "assets/mustard.png",
    occupation: "Colonel"
  }
];

const weapons = [
  {
    name: "rope",
    weight: 2,
    type: "Strangulation",
    image: "assets/rope.png"
  },
  {
    name: "knife",
    weight: 1,
    type: "Blade",
    image: "assets/knife.png"
  },
  {
    name: "candlestick",
    weight: 3,
    type: "Blunt",
    image: "assets/candlestick.png"
  },
  {
    name: "dumbbell",
    weight: 2,
    type: "Blunt",
    image: "assets/dumbbell.png"
  },
  {
    name: "posion",
    weight: 0.1,
    type: "Cunning",
    image: "assets/poison.png"
  },
  {
    name: "axe",
    weight: 8,
    type: "Blade",
    image: "assets/axe.png"
  },
  {
    name: "bat",
    weight: 2,
    type: "Blunt",
    image: "assets/bat.png"
  },
  {
    name: "trophy",
    weight: 2,
    type: "Blunt",
    image: "assets/trophy.png"
  },
  {
    name: "pistol",
    weight: 0.7,
    type: "Projectile",
    image: "assets/pistol.png"
  }
];

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
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  const theKillerAlias = document.getElementById("killerAlias");
  const theKillerName = document.getElementById("killerName");
  const theKillerAge = document.getElementById("killerAge");
  const theKillerOccupation = document.getElementById("killerOccupation");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerDescription = document.getElementById("killerDescription");

  theKiller.style.background = mystery.killer.color;
  theKillerAlias.innerHTML = mystery.killer.alias;
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;
  theKillerAge.innerHTML = mystery.killer.age + " years of age";
  theKillerOccupation.innerHTML = mystery.killer.occupation;
  theKillerImage.src = mystery.killer.image;
  theKillerDescription.innerHTML = mystery.killer.description;
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  const theWeaponName = document.getElementById("weaponName");
  const theWeaponImage = document.getElementById("weaponImage");
  const theWeaponWeight = document.getElementById("weaponWeight");

  theWeaponName.innerHTML = mystery.weapon.name;
  theWeaponWeight.innerHTML = mystery.weapon.weight + "kg";
  theWeaponImage.src = mystery.weapon.image;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  const theRoom = document.getElementById("roomName");

  theRoom.innerHTML = mystery.room;
};

const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    document.getElementById("mystery").innerHTML =
      "You have to find the clues to reveal the mystery....";
  } else
    document.getElementById(
      "mystery"
    ).innerHTML = `It was ${mystery.killer.alias}, also known as ${mystery.killer.firstName} ${mystery.killer.lastName}, the ${mystery.killer.occupation} who did it! Using a ${mystery.weapon.name} wich is a ${mystery.weapon.type} weapon and weighs ${mystery.weapon.weight}kg. The gruesome murder took place in the ${mystery.room} `;
};
