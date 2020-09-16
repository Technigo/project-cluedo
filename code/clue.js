// GENERAL VARIABLES
const loader = document.querySelector('.loader-item');

// OBJECTS OF SUSPECTS
const mrGreen = {
  title: 'Mr',
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/mr_green.jpg',
  occupation: 'Entrepreneur'
}

const colMustard = {
  title: 'Colonel',
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a dignified and dangerous military man',
  age: 60,
  image: 'assets/col_mustard.jpg',
  occupation: 'Colonel'
}

const msScarlett = {
  title: 'Miss',
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'She is a femme fatale.',
  age: 25,
  image: 'assets/ms_scarlett.jpg',
  occupation: 'Actress'
}

const mrWhite = {
  title: 'Mr',
  firstName: 'Jim',
  lastName: 'White',
  color: 'white',
  description: 'He is a dominant butler.',
  age: 65,
  image: 'assets/mr_white.jpg',
  occupation: 'Butler'
}

const mrsPeacock = {
  title: 'Mrs',
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is an elegant and classy aristocrat.',
  age: 42,
  image: 'assets/mrs_peacock.jpg',
  occupation: 'Socialite'
}

const profPlum = {
  title: 'Professor',
  firstName: 'Henrietta',
  lastName: 'Plum',
  color: 'purple',
  description: 'She is a quick witted professor with a dubious past',
  age: 46,
  image: './assets/prof_plum.jpg',
  occupation: 'Professor'
}

// OBJECTS FOR WEAPONS

const rope = {
  name: 'rope',
  weight: 10,
  image: 'assets/rope.jpg'
}

const candlestick = {
  name: 'candlestick',
  weight: 25,
  image: 'assets/candlestick.jpg'
}

const pistol = {
  name: 'pistol',
  weight: 15,
  image: 'assets/revolver.jpg'
}

const knife = {
  name: 'knife',
  weight: 12,
  image: 'assets/knife.jpg'
}

const piping = {
  name: 'piping',
  weight: 19,
  image: 'assets/piping.jpg'
}

const wrench = {
  name: 'wrench',
  weight: 21,
  image: 'assets/wrench.jpg'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 35,
}

const axe = {
  name: 'axe',
  weight: 7,
}

const bat = {
  name: 'bat',
  weight: 4,
}

const trophy = {
  name: 'trophy',
  weight: 9,
}

// OBJECTS FOR ROOMS

const ballroom = {
  name: "ballroom",
  image: 'assets/ballroom.jpg'
}

const billiardRoom = {
  name: "billiard room",
  image: 'assets/billiard_room.jpg'
}

const conservatory = {
  name: "conservatory",
  image: 'assets/conservatory.jpg'
}

const kitchen = {
  name: "kitchen",
  image: 'assets/kitchen.jpg'
}

const diningRoom = {
  name: "dining room",
  image: 'assets/dining_room.jpg'
}

const library = {
  name: "library",
  image: 'assets/kitchen.jpg'
}

const study = {
  name: "study",
  image: 'assets/study.jpg'
}

const hall = {
  name: "hall",
  image: 'assets/hall.jpg'
}

const lounge = {
  name: "lounge",
  image: 'assets/lounge.jpg'
}


// ARRAYS FOR GROUPS OF OBJECTS

const suspects = [
  mrGreen,
  mrWhite,
  colMustard,
  msScarlett,
  mrsPeacock,
  profPlum,
]

const weapons = [
  rope,
  candlestick,
  pistol,
  knife,
  piping,
  wrench,
  dumbbell,
  axe,
  bat, 
  trophy,
]

const rooms = [
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
  diningRoom,
];

// FUNCTIONS

// RANDOM SELECTOR
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: '',
  weapon: '',
  room: '',
};

// LOADING EFFECT
const showKiller = () => {
  loader.classList.toggle('is-active');
  setTimeout(() => {
    loader.classList.toggle('is-active');
    pickKiller();
  }, 750);
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image;
  document.querySelector('#killerAge').innerHTML = `${mystery.killer.age} years old.`
  document.querySelector('#killerDescription').innerHTML = `${mystery.killer.description}`
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} kg`
  document.getElementById('weaponImage').src = mystery.weapon.image;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById('roomImage').src = mystery.room.image;
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const showMystery = () => {
  document.querySelector('#mysteryTitle').innerHTML = `<h1>Mystery</h1>`;
  document.querySelector('#mysterySecret').innerHTML = `<p>Mr Black will be killed by ${mystery.killer.title} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room.name}.</p>`
  document.querySelector('#mysteryInfo').innerHTML = `<p>Hush! Remember to keep it a secret!</p>`
}

document.getElementById('killerCard').addEventListener("click", showKiller);
document.getElementById('weaponCard').addEventListener("click", pickWeapon);
document.getElementById('roomCard').addEventListener("click", pickRoom);
