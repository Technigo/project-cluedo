// The Killers 
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

  const suspects = [mrGreen, profPlum, msScarlet, mrsPeacock, colMustard, mrsWhite]
  return suspects
}
// THe weapons
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
  return weapons

  // The different times
}
function timeList() {
  const morning = {
    name: '8:00',
    color: 'wheat'
  }
  const noon = {
    name: '12:00',
    color: 'skyblue'
  }
  const afternoon = {
    name: '17:00',
    color: 'pink'
  }
  const evening = {
    name: '21:00',
    color: 'indigo'
  }
  const night = {
    name: '1:00',
    color: 'black'
  }
  const times = [morning, noon, afternoon, evening, night]
  return times
}
// The different rooms

function roomList() {
  const rooms = ["dining room", "conservatory", "kitchen", "study", "library", "billiard room", "lounge", "ballroom", "hall", "spa", "living room", "observatory", "theater", "guest house", "patio"]
  return rooms
}
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: "blank",
  weapon: "blank",
  room: "blank",
  time: "blank"
}



// This function will be invoked when you click on the killer card.
// This will randomly select a killer from the suspects. And add that to the mystery object.
const pickKiller = () => {
  // The if statement is to toggle between open card and closed card
  if (mystery.killer === 'blank') {
    suspectList = killers();
    mystery.killer = randomSelector(suspectList);
    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerDescription').innerHTML = mystery.killer.description
    document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
    document.getElementById('killerImage').src = mystery.killer.image

  }
  else {
    mystery.killer = 'blank'
    document.getElementById('killerCard').style.background = 'black'
    document.getElementById('killerName').innerHTML = ''
    document.getElementById('killerDescription').innerHTML = ''
    document.getElementById('killerOccupation').innerHTML = ''
    document.getElementById('killerImage').src = ''

  }
  console.log(mystery.killer.firstName)


}

//  pickWeapon, pickRoom and pickTime works in a similar way.
pickWeapon = () => {
  if (mystery.weapon === 'blank') {
    const method = weaponList();
    mystery.weapon = randomSelector(method);
    const selectedCard = document.getElementById('weaponCard')
    selectedCard.style.background = mystery.weapon.color
    document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`.toUpperCase()
    document.getElementById('weaponDescription').innerHTML = `${mystery.weapon.description}`
    document.getElementById('weaponWeight').innerHTML = `The weight is ${mystery.weapon.weight} pounds`
  }
  else {
    mystery.weapon = 'blank'
    document.getElementById('weaponCard').style.backgroundColor = 'darkgreen'
    document.getElementById('weaponName').innerHTML = ''
    document.getElementById('weaponDescription').innerHTML = ''
    document.getElementById('weaponWeight').innerHTML = ''
  }

  console.log(mystery.weapon.name)
}
pickRoom = () => {
  if (mystery.room === 'blank') {
    killRoom = roomList();
    mystery.room = randomSelector(killRoom);
    document.getElementById('roomCard').style.background = 'skyblue'
    document.getElementById('roomName').innerHTML = `${mystery.room}`.toUpperCase()
  }
  else {
    mystery.room = 'blank'
    document.getElementById('roomCard').style.background = 'darkblue'
    document.getElementById('roomName').innerHTML = ''
  }

  console.log(mystery.room)
}
pickTime = () => {
  if (mystery.time === 'blank') {
    const method = timeList();
    mystery.time = randomSelector(method);
    const selectedCard = document.getElementById('timeCard')
    selectedCard.style.background = mystery.time.color
    document.getElementById('timeName').innerHTML = `${mystery.time.name}`.toUpperCase()
  }
  else {
    mystery.time = 'blank'
    document.getElementById('timeCard').style.background = 'darkred'
    document.getElementById('timeName').innerHTML = ''
  }
  console.log(mystery.time.name)
}

// This function takes the mystery object and creates the big reveal
const revealMystery = (mystery) => {
  const checkEmpty = (mystery.killer === 'blank' || mystery.weapon === 'blank' || mystery.room === 'blank' || mystery.time === 'blank')
  let bigReveal = ""
  let hedReveal = ""
  console.log(checkEmpty)

  if (checkEmpty) {
    bigReveal = "Sorry haven't unlocked this yet click the cards to reveal"
    hedReveal = "Mystery still hasn't been solved";
    document.getElementById('container').style.backgroundImage = "url('media/unsolved.jpg')"
  }
  else {
    bigReveal = `The victim died at ${mystery.time.name} of a ${mystery.weapon.name} in the ${mystery.room} and the perpitrator was ${mystery.killer.firstName} ${mystery.killer.lastName}.`
    hedReveal = "Mystery is solved and the murderer is caught";
    document.getElementById('container').style.backgroundImage = "url('media/solved.jpg')"

  }
  document.getElementById('container').style.backgroundSize = "cover"
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