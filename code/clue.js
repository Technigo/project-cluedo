// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'darkgreen',
  description: 'Jacob has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'rebeccapurple',
  description: 'Victor is psychic',
  age: 43,
  image: 'assets/plum.png',
  occupation: 'Author'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'maroon',
  description: 'Cassandra is very manipulative',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Detective'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'midnightblue',
  description: 'Eleanor is a dramaqueen',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Actress'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'chocolate',
  description: 'Jack suffers from memory loss',
  age: 68,
  image: 'assets/mustard.png',
  occupation: 'Military officer'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'Mrs White is very determined',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Nurse'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  image: 'assets/rope.jpg',
  color: 'maroon',

}

const knife = {
  name: 'knife',
  weight: 8,
  image: 'assets/knife.jpg',
  color: 'chocolate',
}

const candlestick = {
  name: 'candlestick',
  weight: 14,
  image: 'assets/candlestick.jpg',
  color: 'darkgreen'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 20,
  image: 'assets/dumbbell.jpg',
  color: 'darkslategrey'
}

const poison = {
  name: 'poison',
  weight: 2,
  image: 'assets/POISON.jpg',
  color: 'DarkSlateBlue'
}

const axe = {
  name: 'axe',
  weight: 25,
  image: 'assets/axe.jpg',
  color: 'maroon'
}

const bat = {
  name: 'bat',
  weight: 6,
  image: 'assets/bat.jpg',
  color: 'dimgray'
}

const trophy = {
  name: 'trophy',
  weight: 9,
  image: 'assets/trophy.jpg',
  color: 'darkgreen'
}

const pistol = {
  name: 'pistol',
  weight: 12,
  image: 'assets/pistol.jpg',
  color: 'maroon',

}

// CREATE OBJECTS FOR ALL THE ROOMSß.

const theater = {
  name: 'theater',
  image: 'assets/theatre.jpg',
  color: 'chocolate'
}

const library = {
  name: 'library',
  image: 'assets/library.jpg',
  color: 'maroon'
}

const kitchen = {
  name: 'kitchen',
  image: 'assets/kitchen.jpg',
  color: 'darkslategrey'
}

const lounge = {
  name: 'lounge',
  image: 'assets/lounge.jpg',
  color: 'maroon'
}

const observatory = {
  name: 'observatory',
  image: 'assets/observatory.jpg',
  color: 'BurlyWood'
}

const patio = {
  name: 'patio',
  image: 'assets/patio.jpg',
  color: 'maroon'
}

const spa = {
  name: 'spa',
  image: 'assets/spa.jpg',
  color: 'darkslategrey'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

console.log(mrsWhite.color)
console.log(missScarlet.occupation)
console.log(mrsPeacock.description)
console.log(colonelMustard.occupation)
console.log(pistol.weight)
console.log(trophy.weight)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]

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

const rooms = [
  library,
  theater,
  kitchen,
  patio,
  observatory,
  lounge,
  spa
]


let suspectsName = name => {
  console.log(name);
};
suspects.forEach(suspectsName);

let weponsWeight = weight => {
  console.log(weight);
};
weapons.forEach(weponsWeight);

console.log(suspects)
console.log(weapons)
console.log(rooms)

console.log(suspects[0]);
console.log(rooms[rooms.length - 1]);



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: " ",
  weapon: " ",
  room: " "
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  if (mystery.killer.lastName === "White") {
    document.getElementById("killerName").style.color = "black";
    document.getElementById("killerDescription").style.color = "black";
  } else {
    document.getElementById("killerName").style.color = "white";
    document.getElementById("killerDescription").style.color = "white";
  }
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponImage').src = mystery.weapon.image;
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} kg`
  document.getElementById('weaponCard').style.background = mystery.weapon.color;

}

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms);
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`
  document.getElementById('roomImage').src = mystery.room.image;
  document.getElementById('roomCard').style.background = mystery.room.color;
}

document.getElementById('killerCard').addEventListener('click', pickKiller)
document.getElementById('weaponCard').addEventListener('click', pickWeapon)
document.getElementById('roomCard').addEventListener('click', pickRoom)

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const theMystery = document.getElementById('mystery');

const revealMystery = () => {
  if (mystery.killer === " " || mystery.weapon === " " || mystery.room === " ") {
    document.getElementById('mystery').innerHTML = 'Click cards to reveal the mystery!';
  } else {
    theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with the ${mystery.weapon.name}!`;
    console.log(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with the ${mystery.weapon.name}.`);
  }
};

document.getElementById('revealButton').onclick = revealMystery