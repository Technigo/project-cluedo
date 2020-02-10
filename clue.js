// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
function killers() {
  const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'media/green.png',
    occupation: 'Entrepreneur'
  }
  const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Has the brains of Albert Einstein',
    age: 65,
    image: 'media/plum.png',
    occupation: 'Scientist'
  }
  const msScarlet = {
    firstName: 'Cassandra',
    lastName: 'Scarlett',
    color: 'red',
    description: 'She will do anything for a profit',
    age: 22,
    image: 'media/scarlet.png',
    occupation: 'Movie star'
  }
  const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'maintains her dignity in almost all cases',
    age: 32,
    image: 'media/peacock.png',
    occupation: 'Socialite'
  }

  const colMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Great white hunter and colonial imperialist',
    age: 55,
    image: 'media/mustard.png',
    occupation: 'Colonel'
  }
  const mrsWhite = {
    firstName: 'Mrs',
    lastName: 'White',
    color: 'lightgray',
    description: 'She used to practice medicine and knows how to clean up blood',
    age: 60,
    image: 'media/white.png',
    occupation: 'Housekeeper'
  }



  console.log(mrGreen.description)
  // CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
  const suspects = [mrGreen, profPlum, msScarlet, mrsPeacock, colMustard, mrsWhite]
  return suspects
}

function weaponList() {
  const rope = {
    name: 'rope',
    weight: 10,
    color: 'antiquewhite',
    description: 'Old but sturdy the favorite of Plum'
  }
  const knife = {
    name: 'knife',
    weight: 15,
    color: 'blue',
    description: 'Mrs Peacock´s favorite weapon and always sharp'
  }
  const candlestick = {
    name: 'candlestick',
    weight: 50,
    color: 'gold',
    description: 'An old heirloom from the Peacock family'
  }
  const dumbbell = {
    name: 'dumbbell',
    weight: 100,
    color: 'gray',
    description: 'Heavy but very deadly'
  }
  const poison = {
    name: 'poison',
    weight: 5,
    color: 'green',
    description: 'Cynonide, usually a womans weapon'
  }
  const axe = {
    name: 'axe',
    weight: 40,
    color: 'red',
    description: 'In case of a fire or a heated argument'
  }
  const bat = {
    name: 'bat',
    weight: 30,
    color: 'brown',
    description: 'Mr Green´s favorite bat'
  }
  const trophy = {
    name: 'trophy',
    weight: 45,
    color: 'silver',
    description: 'Best hunter this season, awarded to Colonel Mustard'
  }
  const pistol = {
    name: 'pistol',
    weight: 20,
    color: 'darkslategray',
    description: 'small but effective'
  }

  const weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]
  console.log(poison.color)
  console.log(bat.description)
  return weapons
}
function timeList() {
  const morning = {
    name: '8:00',
    color: 'wheat'
  }
  const noon ={
    name: '12:00',
    color: 'skyblue'
  }
  const afternoon ={
    name: '17:00',
    color: 'pink'
  }
  const evening ={
    name: '21:00',
    color: 'indigo'
  }
  const night ={
    name: '1:00',
    color: 'black'
  }
const times =[morning, noon, afternoon, evening, night]
return times
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

function roomList() {
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
  room: "blank",
  time: "blank"
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
// This will randomly select a killer from the suspects. And add that to the mystery object.
const pickKiller = () => {
  suspectList = killers();
  mystery.killer = randomSelector(suspectList);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerImage').src = mystery.killer.image
  console.log(mystery.killer.firstName)
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
pickWeapon = () => {
  const method = weaponList();
  mystery.weapon = randomSelector(method);
  const selectedCard = document.getElementById('weaponCard')
  selectedCard.style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`.toUpperCase()
  document.getElementById('weaponDescription').innerHTML = `${mystery.weapon.description}`
  document.getElementById('weaponWeight').innerHTML = `The weight is ${mystery.weapon.weight} pounds`
  console.log(mystery.weapon.name)
}
pickRoom = () => {
  killRoom = roomList();
  mystery.room = randomSelector(killRoom);
  document.getElementById('roomCard').style.background = 'skyblue'
  document.getElementById('roomName').innerHTML = `${mystery.room}`.toUpperCase()
  console.log(mystery.room)
}
pickTime = () => {
  const method = timeList();
  mystery.time = randomSelector(method);
  const selectedCard = document.getElementById('timeCard')
  selectedCard.style.background = mystery.time.color
  document.getElementById('timeName').innerHTML = `${mystery.time.name}`.toUpperCase()
  console.log(mystery.time.name)
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = (mystery) => {
  const checkEmpty = (mystery.killer === 'blank' || mystery.weapon === 'blank' || mystery.room === 'blank' || mystery.time ==='blank')
  let bigReveal = ""
  let hedReveal = ""
  console.log(checkEmpty)
  if (checkEmpty) {
    bigReveal = "Sorry haven't unlocked this yet click the cards to reveal"
    hedReveal = "Mystery still hasn't been solved";
  }
  else {
    bigReveal = `The victim died at ${mystery.time.name} of a ${mystery.weapon.name} in the ${mystery.room} and the perpitrator was ${mystery.killer.firstName} ${mystery.killer.lastName}.`
    hedReveal = "Mystery is solved and the murderer is caught";
    document.getElementById('container').style.backgroundImage = "url('media/solved.jpg')"
    document.getElementById('container').style.backgroundsize = "100%"
  }
  document.getElementById('mysterytext').innerHTML = bigReveal;
  document.getElementById('mystery').innerHTML = hedReveal;

}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom
document.getElementById('timeCard').onclick = pickTime


document.getElementById("revealButton").addEventListener('click', (e) => {
  e.preventDefault()
  revealMystery(mystery)
})