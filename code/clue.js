// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'an academic Romeo, arrogant',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const msScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'Hollywood glamorous, dry, sarcastic, cynical',
  age: 40,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'churchgoing wife of a Senator',
  age: 40,
  image: 'assets/peacock.png',
  occupation: 'Housewife'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'pompous, dense military man, often misinterprets words',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Rose',
  lastName: 'White',
  color: 'white',
  description: 'pale, morbid, stoic',
  age: 75,
  image: 'assets/white.png',
  occupation: 'Retired'
}



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'brown'
}

const knife = {
  name: 'knife',
  weight: 8,
  color: 'silver'
}

const candleStick = {
  name: 'candlestick',
  weight: 3,
  color: 'white'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 10,
  color: 'red'
}

const poison = {
  name: 'poison',
  weight: 2,
  color: 'blue'

}

const axe = {
  name: 'axe',
  weight: 7,
  color: 'orange'
}

const bat = {
  name: 'bat',
  weight: 5,
  color: 'black'
}

const trophy = {
  name: 'trophy',
  weight: 4,
  color: 'gold'
}

const pistol = {
  name: 'pistol',
  weight: 4,
  color: 'silver'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

console.log(colonelMustard.description);
console.log(rope.color);
console.log(msScarlett.firstName);


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [mrGreen, professorPlum, msScarlett, mrsPeacock, colonelMustard, mrsWhite


  // ...  and the rest
]

const weapons = [rope, knife, candleStick, dumbbell, poison, axe, bat, trophy, pistol];

const rooms = ['Dining Room','Conservatory', 'Kitchen', 'Study','Library','Billiard Room','Lounge', 'Ballroom','Hall', 'Spa','Living Room', 
'Observatory','Theater','Guest House','Patio'];

console.log(suspects);
console.log(weapons);
console.log(rooms);
console.log(suspects[0]);
console.log(weapons[weapons.length-1]);
console.log(rooms[rooms.length-1]);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}



// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerImage').src= mystery.killer.image;
}

document.getElementById('killerCard').onclick = pickKiller;


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}
document.getElementById('weaponCard').onclick = pickWeapon;

const pickRoom = () => {
  mystery.room =randomSelector(rooms);
  document.getElementById('roomCard').innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`
}
