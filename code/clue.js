// STEP 1 - KILLER

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He is an entrepeneur with an illegal hobby",
  age: 45,
  image: "image/killer/green.jpg",
  occupation: "Entrepreneur",
  favouriteWeapon: "Pistol",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: " Mustard",
  color: "yellow",
  description: "He is the most dangerous military man in the country",
  age: 55,
  image: "image/killer/mustard.jpg",
  occupation: "Military man",
  favouriteWeapon: "dumbell",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Her husband is a famous politician",
  age: 76,
  image: "image/killer/peacock.jpg",
  occupation: "Art collector",
  favouriteWeapon: "knife",
};

const plum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is an professor in criminology",
  age: 56,
  image: "image/killer/plum.jpg",
  occupation: "Professor",
  favouriteWeapon: "candlestick",
};
const scarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She has a rich dangerous husband ",
  age: 43,
  image: "image/killer/scarlet.jpg",
  occupation: "Trophy-wife",
  favouriteWeapon: "bat",
};

const wadsworth = {
  firstName: "Mr",
  lastName: "Boddy",
  color: "grey",
  description: "Is really sneaky and trusts noone",
  age: 49,
  image: "image/killer/wadsworth.jpg",
  occupation: "Stockbroker",
  favouriteWeapon: "gun",
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She knows the house like the back of her hand",
  age: 52,
  image: "image/killer/white.jpg",
  occupation: "Chef",
  favouriteWeapon: "rope",
};

const yvette = {
  firstName: "Miss",
  lastName: "Yvette",
  color: "brown",
  description: "Is probably the most evil villain in the house",
  age: 36,
  image: "image/killer/yvette.jpg",
  occupation: "Maid",
  favouriteWeapon: "poison",
};

// STEP 2 - WEAPON

const axe = {
  name: "Axe",
  weight: "8 kg",
  image: "image/weapon/axe.png",
};

const bat = {
  name: "Bat",
  weight: "2 kg",
  image: "image/weapon/bat.png",
};

const candlestick = {
  name: "Candlestick",
  weight: "1 kg",
  image: "image/weapon/candlestick.png",
};

const dumbell = {
  name: "Dumbell",
  weight: "10 kg",
  image: "image/weapon/dumbell.png",
};

const gun = {
  name: "Gun",
  weight: "0,5 kg",
  image: "image/weapon/gun.png",
};

const knife = {
  name: "Knife",
  weight: "300 g",
  image: "image/weapon/knife.png",
};

const posion = {
  name: "Poison",
  weight: "100 g kg",
  image: "image/weapon/poison.png",
};

const rope = {
  name: "Rope",
  weight: "1 kg",
  image: "image/weapon/rope.png",
};

const trophy = {
  name: "Trophy",
  weight: "4 kg",
  image: "image/weapon/trophy.png",
};

// STEP 3 - ROOM

const diningRoom = {
  name: "Dining Room",
  image: "image/room/dining.jpg",
};

const conservatory = {
  name: "The Conservatory",
  image: "image/room/conservatory.png",
};
const kitchen = {
  name: "Kitchen",
  image: "image/room/kitchen.jpg",
};

const study = {
  name: "Study Room",
  image: "image/room/study.png",
};

const library = {
  name: "The Library",
  image: "image/room/library.jpg",
};

const billiardRoom = {
  name: "Billiard Room",
  image: "image/room/biliard.png",
};

const lounge = {
  name: "Lounge",
  image: "image/room/lounge.jpg",
};

const ballroom = {
  name: "Ballroom",
  image: "image/room/ballroom.jpg",
};

const hall = {
  name: "Hall",
  image: "image/room/hall.png",
};

const spa = {
  name: "The Spa",
  image: "image/room/spa.jpg",
};

const livingRoom = {
  name: "Living Room",
  image: "image/room/livingroom.png",
};

const observatory = {
  name: "Observatory",
  image: "image/room/observatory.jpg",
};

const theatre = {
  name: "Theatre",
  image: "image/room/theatre.png",
};

const guestHouse = {
  name: "Guest House",
  image: "image/room/guesthouse.png",
};

const patio = {
  name: "Patio",
  image: "image/room/patio.jpg",
};

// ARRAY GROUPS

const suspects = [
  mrGreen,
  mrsWhite,
  plum,
  mrsPeacock,
  wadsworth,
  colonelMustard,
  scarlet,
  yvette,
];

const weaponry = [
  axe,
  bat,
  candlestick,
  dumbell,
  gun,
  knife,
  posion,
  rope,
  trophy,
];

const room = [
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
  theatre,
  guestHouse,
  patio,
];


// RANDOMLY SELECT ONE ITEM FROM THE ARRAY 
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects);


  // CHANGE CONTENT OF THE KILLER CARD
  document.getElementById("killerText").style.color = mystery.killer.color;
  document.getElementById(
    "killerText"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById(
    "killerText"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.description}`;
  document.getElementById("killerImage").src = mystery.killer.image;
};
document.getElementById("killerCard").addEventListener("click", pickKiller);

// CHANGE CONTENT OF THE WEAPON CARD
const pickWeapon = () => {
  mystery.weapon = randomSelector(weaponry);

  document.getElementById("weaponText").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = mystery.weapon.image;
};

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

// CHANGE CONTENT OF THE ROOM CARD
const pickRoom = () => {
  mystery.room = randomSelector(room);
  document.getElementById("roomText").innerHTML = `${mystery.room.name}`;
  document.getElementById("roomImage").src = mystery.room.image;
};

document.getElementById("roomCard").addEventListener("click", pickRoom);

// STEP 4 

// GET OPEN MODEL ELEMENT
const openModalButtons = document.querySelectorAll('[data-modal-target]')
// GET CLOSE MODAL ELEMENT
const closeModalButtons = document.querySelectorAll('[data-close-button]')
// SHOW AND HIDE OVERLAY
const overlay = document.getElementById('overlay')

// OPEN MODAL const pickWeapon = () => {

const openModal = (modal) => {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  document.getElementById(
    "modal-body"
  ).innerHTML = `The brutal murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}....`
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// CLOSE MODAL
const closeModal = (modal) => {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

// CLOSE MODAL OUTSIDE MODAL-CONTAINER
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})