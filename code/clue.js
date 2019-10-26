//SUSPECTS

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#7b7",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green1.png",
  occupation: "Entrepreneur"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#96b",
  description: " A quick-witted, young professor with a bow tie",
  age: 35,
  image: "assets/plum1.png",
  occupation: "Professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#e34",
  description: "An attractive young woman, who allegedly is a femme fatale.",
  age: 22,
  image: "assets/scarlet1.png",
  occupation: "Spy"
}
const mrsPeacock = {
  firstName: "Eleonor",
  lastName: "Peacock",
  color: "#37a",
  description: "A grande dame, an elderly yet still attractive woman who maintains her dignity in almost all cases.",
  age: 32,
  image: "assets/peacock1.png",
  occupation: "Socialite"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#fe8",
  description: "He is a military man both dignified and dangerous.",
  age: 50,
  image: "assets/mustard1.png",
  occupation: "Colonel"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "A frazzled servant.",
  age: 62,
  image: "assets/white1.png",
  occupation: "Servant"
}

//THE WEAPONS

const rope = {
  name: "Rope",
  material: "Hamp",
  weight: 7,
  image: "weapons/rope.png"
}
const knife = {
  name: "Knife",
  material: "Steel",
  weight: 7,
  image: "weapons/knife.png"
}
const candlestick = {
  name: "Candlestick",
  material: "Wax",
  weight: 3,
  image: "weapons/candlestick.png"
}
const dumbbell = {
  name: "Dumbbell",
  material: "Iron",
  weight: 15,
  image: "weapons/dumbbell.png"
}
const poison = {
  name: "Poison",
  material: "Plant",
  weight: 0.5,
  image: "weapons/poison.png"
}
const axe = {
  name: "Axe",
  material: "Iron and wood",
  weight: 10,
  image: "weapons/axe.png"
}
const bat = {
  name: "Bat",
  material: "Wood",
  weight: 8,
  image: "weapons/bat.png"
}
const throphy = {
  name: "Throphy",
  material: "Plastic",
  weight: 2,
  image: "weapons/throphy.png"
}
const pistol = {
    name: "Pistol",
    material: "Steel",
    weight: 6,
    image: "weapons/pistol.png"
  }
  // THE ROOMS 
const dinningRoom = {
  name: "Dinning Room",
  image: "room/ginningroom.png"
}
const conservatory = {
  name: "Conservatory",
  image: "room/conservatory.png"
}
const kitchen = {
  name: "Kitchen",
  image: "room/kitchen.png"
}
const study = {
  name: "Study",
  image: "room/study.png"
}
const library = {
  name: "Library",
  image: "room/library.png"
}
const billiardRoom = {
  name: "Billiard Room",
  image: "room/billiardroom.png"
}
const lounge = {
  name: "Lounge",
  image: "room/lounge.png"
}
const ballroom = {
  name: "Ballroom",
  image: "room/ballroom.png"
}
const hall = {
  name: "Hall",
  image: "room/hall.png"
}
const spa = {
  name: "Spa",
  image: "room/spa.png"
}
const livingRoom = {
  name: "Living Room",
  image: "room/livingroom.png"
}
const observatory = {
  name: "Observatory",
  image: "room/observatory.png"
}
const theater = {
  name: "Theater",
  image: "room/theater.png"
}
const guestHouse = {
  name: "Guest House",
  image: "room/guesthouse.png"
}
const patio = {
    name: "Patio",
    image: "room/patio.png"
  }
  // ALL SUSPECTS, WEAPONS AND ROOMS 

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]
console.log(suspects)

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  throphy,
  pistol
]
console.log(weapons)

const rooms = [
  dinningRoom,
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
console.log(rooms)

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


const mystery = {

}


const pickKiller = () => {

  mystery.killer = randomSelector(suspects);

  const theKiller = document.getElementById("killer");
  const theKillerColor = document.getElementById("killerColor");
  const theKillerName = document.getElementById("killerName");
  const theKillerAge = document.getElementById("killerAge");
  const theKillerOccupation = document.getElementById("killerOccupation");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerDescription = document.getElementById("killerDiscription");

  theKiller.style.background = "#a98";

  theKillerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;

  theKillerAge.innerHTML = mystery.killer.age;

  theKillerOccupation.innerHTML = mystery.killer.occupation;

  theKillerImage.src = mystery.killer.image;

  theKillerDescription.innerHTML = mystery.killer.description;

  theKillerDescription.style.background = mystery.killer.color;
}

const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");
  const theWeaponMaterial = document.getElementById("weaponMaterial");
  const theWeaponWeight = document.getElementById("weaponWeight");
  const theWeaponImage = document.getElementById("weaponImage");

  theWeapon.style.background = "#a98";

  theWeaponName.innerHTML = mystery.weapon.name;

  theWeaponMaterial.innerHTML = mystery.weapon.material;

  theWeaponWeight.innerHTML = `${mystery.weapon.weight} kg`;

  theWeaponImage.src = mystery.weapon.image;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  const theRoom = document.getElementById("rooms");
  const theRoomName = document.getElementById("roomName");
  const theRoomImage = document.getElementById("roomImage");

  theRoom.style.background = "#a98";

  theRoomName.innerHTML = `${mystery.room.name}`;

  theRoomImage.src = mystery.room.image;

}

const revealMystery = () => {
  const theMystery = document.getElementById("mystery");
  const theMysteryDescription = document.getElementById("mysteryDescription");

  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    theMystery.innerHTML = "No mystery is yet to be revealed";
  } else {
    theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`;
  }
}