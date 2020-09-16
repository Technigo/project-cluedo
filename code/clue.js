// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#3B9468',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#9C5597',
  description: 'Victor Plum description',
  age: 42,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#CC3625',
  description: 'Miss Scarlet description',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Neuroscientist'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#6270AF',
  description: 'Peacock description',
  age: 58,
  image: 'assets/peacock.png',
  occupation: 'President of the United States of America'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#EE7D2D',
  description: 'Mustard description',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Owns a mustard farm'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#49364A',
  description: 'Mrs white desc',
  age: 83,
  image: 'assets/white.png',
  occupation: 'Stuntwoman in "Golden Girls"'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
const rope = {
  name: 'Snake',
  weight: 10,
  emoji: '🐍'
}

const knife = {
  name: 'Knife',
  weight: 15,
  emoji: '🔪'
}

const candlestick = {
  name: 'Candle stick',
  weight: 35,
  emoji: '🕯'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 150,
  emoji: '🏋️‍♀️'
}

const poison = {
  name: 'Novichok',
  weight: 5,
  emoji: '🧪'
}

const axe = {
  name: 'Axe',
  weight: 85,
  emoji: '⛏'
}

const bat = {
  name: 'Bat',
  weight: 60,
  emoji: '🦇'
}

const trophy = {
  name: 'Trophy',
  weight: 75,
  emoji: '🏆'
}

const pistol = {
  name: 'Pistol',
  weight: 35,
  emoji: '🔫'
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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


const rooms = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio']


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: null,
  weapon: null,
  room: null
}

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').setAttribute("src", mystery.killer.image)
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponWeight').innerHTML = "Weight: " + mystery.weapon.weight
  document.getElementById('weaponEmoji').innerHTML = mystery.weapon.emoji
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  console.log("Reveal mystery")
  toggleOverlay()
  document.getElementById("mysteryRevealText").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room}, using the ${mystery.weapon.name.toLowerCase()}! Huzzah! 🕵🏼‍♀️`
}

const toggleOverlay = () => {
  const overlay = document.getElementById("fullscreen-cover")
  if(overlay.style.display === "none") {
    console.log("1")
    overlay.style.display = "flex";
  } else {
    console.log("2")
    overlay.style.display = "none";
  }
}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom
document.getElementById('revealMystery').onclick = revealMystery

toggleOverlay()