// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
function killers(){
  const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  }
  const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Has the brains of Albert Einstein',
    age: 65,
    image: 'assets/plum.png',
    occupation: 'Scientist'
  }
  const msScarlet = {
    firstName: 'Cassandra',
    lastName: 'Scarlett',
    color: 'red',
    description: 'She will do anything for a profit',
    age: 22,
    image: 'assets/scarlet.png',
    occupation: 'Movie star'
  }
  const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'maintains her dignity in almost all cases',
    age: 32,
    image: 'assets/peacock.png',
    occupation: 'Socialite'
  }

  const colMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Great white hunter and colonial imperialist',
    age: 55,
    image: 'assets/mustard.png',
    occupation: 'Colonel'
  }
  const mrsWhite = {
    firstName: 'Mrs',
    lastName: 'White',
    color: 'white',
    description: 'She will do anything for a profit',
    age: 60,
    image: 'assets/white.png',
    occupation: 'Housekeeper'
  }

  // Professor Plum - Victor Plum
  // Miss Scarlet - Cassandra Scarlet
  // Mrs Peacock - Eleanor Peacock
  // Colonel Mustard - Jack Mustard
  // Mrs White - Mrs White

  console.log(mrGreen.description)
  // CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
  const suspects = [mrGreen, profPlum, msScarlet, mrsPeacock, colMustard, mrsWhite]
  return suspects
}

function weaponList(){
const rope = {
  name: 'rope',
  weight: 10,
  color: 'white'
}
const knife = {
  name: 'knife',
  weight: 15,
  color: 'blue'
}
const candlestick = {
  name: 'candlestick',
  weight: 50,
  color: 'gold'
}
const dumbbell = {
  name: 'dumbbell',
  weight: 100,
  color: 'gray'
}
const poison = {
  name: 'poison',
  weight: 5,
  poison: 'green'
}
const axe = {
  name: 'axe',
  weight: 40,
  color: 'red'
}
const bat = {
  name: 'bat',
  weight: 30,
  color: 'brown'
}
const trophy = {
  name: 'trophy',
  weight: 45,
  color: 'silver'
}
const pistol = {
  name: 'pistol',
  weight: 20,
  color: 'black'
}

const weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]
console.log(rope.weight)
return weapons
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

function roomList(){
const rooms = ["dining room", "conservatory", "kitchen", "study", "library", "billiard room", "lounge", "ballroom", "hall", "spa", "living room", "observatory", "theater", "guest house", "patio"]
return rooms
}
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: "blank",
  weapon: "blank",
  room: "blank"
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
// This will randomly select a killer from the suspects. And add that to the mystery object.
const pickKiller = ()=> {
  suspectList = killers();
  mystery.killer = randomSelector(suspectList);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  console.log(mystery.killer.firstName)
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
pickWeapon = () => {
  const method = weaponList();
  mystery.weapon = randomSelector(method);
  const selectedCard = document.getElementById('weaponCard')
 selectedCard.style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  console.log(mystery.weapon.name)
}
pickRoom = ()=> {
  killRoom = roomList();
  mystery.room = randomSelector(killRoom);
  document.getElementById('roomCard').style.background = 'skyblue'
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  console.log(mystery.room)
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = (mystery) =>{

const bigReveal = `The victim died of a ${mystery.weapon.name} in the ${mystery.room} and the perpitrator was ${mystery.killer.firstName} ${mystery.killer.lastName}.` 
document.getElementById('mysterytext').innerHTML = bigReveal;
}

document.getElementById('killerCard').onclick = pickKiller()
document.getElementById('weaponCard').onclick = pickWeapon()
document.getElementById('roomCard').onclick = pickRoom()
document.getElementById('revealButton').onclick = revealMystery(mystery);