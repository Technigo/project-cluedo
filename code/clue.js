// OBJECTS FOR SUSPECTS, ROOMS AND WEAPONS //

// Objects for all suspects
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'LightGreen',
  description: 'A money-oriented businessman with a lot of connections in the mafia...',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const colMustard = {
  firstName: 'William',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'A dapper and dangerous military man. Also and big game hunter...',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Military colonel'
};

const mrsPeacock = {
  firstName: 'Amelia',
  lastName: 'Peacock',
  color: 'LightPink',
  description: 'The richest woman in England. Her husbands have all died mysterious deaths...',
  age: 60,
  image: 'assets/peacock.png',
  occupation: 'Grande Dame'
};

const profPlum = {
  firstName: 'Oliver',
  lastName: 'Plum',
  color: 'Violet',
  description: 'A quick-witted alchemy professor. A bit to interested in experimenting with different potions...',
  age: 46,
  image: 'assets/plum.png',
  occupation: 'Professor'
};

const missScarlet = {
  firstName: 'Eveline',
  lastName: 'Scarlett',
  color: 'Salmon',
  description: 'A cunning and mysterious museum curator. Also a master thief...',
  age: 35,
  image: 'assets/scarlett.png',
  occupation: 'Museum Curator'
};

const mrsWhite = {
  firstName: 'Charlotte',
  lastName: 'White',
  color: 'White',
  description: 'House Keeper at Scaryville Mansion. Knows every secret passage and dark corner of the house...',
  age: 73,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
};

// Objects for all weapons
const rope = {
  name: 'Rope',
  weight: 5,
  length: '2 m',
  color: 'Wheat',
  image: 'assets/weapon/rope.png'
};

const knife = {
  name: 'Knife',
  weight: 12,
  length: '30 cm',
  color: 'LightCoral',
  image: 'assets/weapon/knife.png'
};

const candlestick = {
  name: 'Candlestick',
  weight: 20,
  length: '40 cm',
  color: 'Silver',
  image: 'assets/weapon/candlestick.png'
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 50,
  length: '20 cm',
  color: 'Lavender',
  image: 'assets/weapon/dumbell.png'
};

const poison = {
  name: 'Poison',
  weight: 8,
  length: '10cm',
  color: 'LightGreen',
  image: 'assets/weapon/poison.png'
};

const axe = {
  name: 'Axe',
  weight: 45,
  length: '50 cm',
  color: 'LightSteelBlue',
  image: 'assets/weapon/axe.png'
};

const bat = {
  name: 'Bat',
  weight: 25,
  length: '55 cm',
  color: 'AntiqueWhite',
  image: 'assets/weapon/bat.png'
};

const trophy = {
  name: 'Trophy',
  weight: 35,
  length: '45 cm',
  color: 'LightYellow',
  image: 'assets/weapon/trophy.png'
};

const pistol = {
  name: 'Pistol',
  weight: 25,
  length: '35 cm',
  color: 'Thistle',
  image: 'assets/weapon/pistol.png'
};

// Objects for all rooms
const diningRoom = {
  name: 'Dining Room',
  color: 'PapayaWhip',
  image: 'assets/room/dining.png'
};

const kitchen = {
  name: 'Kitchen',
  color: 'SeaShell',
  image: 'assets/room/kitchen.png'
};

const study = {
  name: 'Study',
  color: 'PapayaWhip',
  image: 'assets/room/study.png'
};

const library = {
  name: 'Library',
  color: 'SeaShell',
  image: 'assets/room/library.png'
};

const billiardRoom = {
  name: 'Billiard Room',
  color: 'AntiqueWhite',
  image: 'assets/room/billiard.png'
};

const lounge = {
  name: 'Lounge',
  color: 'PapayaWhip',
  image: 'assets/room/lounge.png'
};

const ballroom = {
  name: 'Ballroom',
  color: 'AntiqueWhite',
  image: 'assets/room/ballroom.png'
};

const spa = {
  name: 'Spa',
  color: 'SeaShell',
  image: 'assets/room/spa.png'
};

const livingRoom = {
  name: 'Living Room',
  color: 'AntiqueWhite',
  image: 'assets/room/livingroom.png'
};

const theater = {
  name: 'Theater',
  color: 'PapayaWhip',
  image: 'assets/room/theater.png'
};

const garden = {
  name: 'Garden',
  color: 'PapayaWhip',
  image: 'assets/room/garden.png'
};



// ARRAYS FOR SUSPECTS, WEAPONS AND ROOMS //

//Array for suspects
const suspects = [
  mrGreen,
  colMustard,
  mrsPeacock,
  profPlum,
  missScarlet,
  mrsWhite
]

//Array for weapons
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
];

// Array for rooms
const rooms = [
  diningRoom,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  spa,
  livingRoom,
  theater,
  garden
];

//FUNCTION FOR RANDOMLY SELECTING ONE ITEM FROM THE ARRAY THAT'S PASSED INTO THE FUNCTIONS FOR SUSPECTS, WEAPONS AND ROOMS.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

//OBJECT THAT KEEPS THE MYSTERY //
const mystery = {
 killer: null,
 weapon: null,
 room: null
};


// FUNCTIONS FOR CARDS //

//Function to show hidden cards
const cardShow = () => {
  const element = document.getElementById("cardShow");
  element.classList.remove('cardShow');
} 
document.getElementById('startPlay').onclick = cardShow;


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)   // This will randomly select a killer from the suspects. And add that to the mystery object.
  document.getElementById('killerCard').style.background = mystery.killer.color   // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerImage'); killerImage.src = mystery.killer.image
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
}
document.getElementById('killerCard').onclick = pickKiller;


// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`
  document.getElementById('weaponLenght').innerHTML = `Lenght: ${mystery.weapon.length}`
  document.getElementById('weaponImage'); weaponImage.src = mystery.weapon.image;
}
document.getElementById('weaponCard').onclick = pickWeapon;


// This function will be invoked when you click on the room card.
const pickRoom = () => {
  mystery.room = randomSelector(rooms)   
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById('roomImage'); roomImage.src = mystery.room.image;
}
document.getElementById('roomCard').onclick = pickRoom;

// FUNCTION FOR REVEALING MYSTERY //
//Function to reveal the mystery and verify that all cards are picked
const revealMystery  = () => {
  if(mystery.killer && mystery.weapon && mystery.room) {
  const element = document.getElementById("mysteryShow");
  element.classList.remove('mysteryShow'); 
  document.getElementById("mysteryHeader").innerHTML= `You solved it!`;
  document.getElementById("mysteryMessage").innerHTML= `The murder was comitted by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room.name}.`;
  } else {
    const element = document.getElementById("mysteryShow");
    element.classList.remove('mysteryShow');
    document.getElementById("mysteryMessage").innerHTML= `ERROR! You must pick three cards.`;
  }
}
document.getElementById('revealMystery').onclick = revealMystery;