// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "Green",
  description: "He has a lot of connections",
  age: 49,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is a tiny confused man",
  age: 42,
  image: "assets/plum.png",
  occupation: "Lawyer"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "orange",
  description: "Tall intelligent woman",
  age: 33,
  image: "assets/scarlet.png",
  occupation: "Tech Entrepreneur"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "A devious person",
  age: 53,
  image: "assets/peacock.png",
  occupation: "News anchor"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A hard headed man",
  age: 61,
  image: "assets/mustard.png",
  occupation: "Retired Navy SEAL"
};

const mrsWhite = {
  firstName: "Alice",
  lastName: "White",
  color: "white",
  description: "A sweet and caring woman",
  age: 68,
  image: "assets/white.png",
  occupation: "Nurse"
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 1.4,
  material: "Natural fiber",
  image: "weapon/rope.jpg" //IMG-länken till funktionen på rad 257
}

const knife = {
  name: "Knife",
  weight: 0.3,
  material: "Steel and wood",
  image: "weapon/knife.jpg"
}

const candlestick = {
  name: "Candlestick",
  weight: 1.2,
  material: "Brass",
  image: "weapon/candlestick.jpg"
}

const dumbbell = {
  name: "Dumbbell",
  weight: 20,
  material: "Steel and vinyl",
  image: "weapon/dumbbell.jpg"
}

const poison = {
  name: "Poison",
  weight: 0.4,
  material: "Green fluid",
  image: "weapon/poison.jpg"
}

const axe = {
  name: "Axe",
  weight: 35,
  material: "Wood and steel",
  image: "weapon/axe.jpg"
}

const bat = {
  name: "Bat",
  weight: 1.5,
  material: "Metal",
  image: "weapon/bat.jpg"
}

const trophy = {
  name: "Trophy",
  weight: 2.5,
  material: "Metal and wood",
  image: "weapon/trophy.jpg"
}

const pistol = {
  name: "Pistol",
  weight: 0.8,
  material: "Aluminium",
  image: "weapon/pistol.jpg"
}

const weaponsImage = {
  image: "axe.jpg",
  image: "bat.jpg",
  image: "candlestick",
  image: "dumbbell.jpg",
  image: "knife",
  image: "pistol",
  image: "poison"
}
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. /

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
];
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
];
console.log(weapons);


const rooms = [
  "LivningRoom",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "BillardRoom",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "LivingRoom",
  "Observatory",
  "Theatre",
  "GuestHouse",
  "Patio"
];

console.log(room);

const times = [
  "afternoon",
  "midnight",
  "morning",
  "evening",
  "dawn",
  "dusk"
];

console.log(times);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

console.log(randomSelector(suspects).firstName + "" + (suspects).lastName);
console.log(randomSelector(weapons).name);
console.log(randomSelector(room));



// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.



// This will randomly select a killer from the suspects. And add that to the mystery object.
// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName


  // REMAINING OBJECT INFO //
  const theKillerAge = document.getElementById("killerAge")
  theKillerAge.innerHTML =
    mystery.killer.age

  const theKillerDescription = document.getElementById("killerDescription")
  theKillerDescription.innerHTML =
    mystery.killer.description

  const theKillerOccupation = document.getElementById("killerOccupation")
  theKillerOccupation.innerHTML =
    mystery.killer.occupation

  const theKillerImage = document.getElementById("killerImage")
  theKillerImage.src = mystery.killer.image

}

// FUNCTIONS //
// weapons //
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weaponName");
  theWeapon.innerHTML = mystery.weapon.name

  const theWeaponWeight = document.getElementById("weaponWeight")
  theWeaponWeight.innerHTML = mystery.weapon.weight

  const theWeaponMaterial = document.getElementById("weaponMaterial")
  theWeaponMaterial.innerHTML = mystery.weapon.material

  //Weapon images // 
  const theWeaponImage = document.getElementById("weaponImage")
  theWeaponImage.src = mystery.weapon.image
}

// rooms //
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName");
  theRoomName.innerHTML = mystery.room
}

// time of murder //
const pickTime = () => {
  mystery.time = randomSelector(times)

  const theTimeName = document.getElementById("timeName");
  theTimeName.innerHTML = mystery.time


}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const theReveal = document.getElementById("mystery")

  theReveal.innerHTML = (`The murder was committed by ${mysteryKiller.name} with a ${mysteryKiller.weapon} in the ${mysteryKiller.room} at ${mysteryKiller.time}.`);
};

const mysteryKiller = {
  name: "mrs Peacock",
  image: "assets/peacock.png",
  weapon: "trophy",
  room: "observatory",
  time: "midnight"
};

