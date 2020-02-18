// OBJECTS FOR ALL THE SUSPECTS

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
  description: 'He is widely seen as the intellectual',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Young, cunning, and highly attractive',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Maintains her dignity in almost all cases',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}
const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Both dignified and dangerous',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled servant',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}




// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  weight: 8
}
const knife = {
  name: 'Knife',
  weight: 2
}
const candlestick = {
  name: 'Candlestick',
  weight: 1
}
const dumbbell = {
  name: 'Dumbbell',
  weight: 15
}
const poison = {
  name: 'Poison',
  weight: 0
}
const axe = {
  name: 'Axe',
  weight: 10
}
const bat = {
  name: 'Bat',
  weight: 7
}
const trophy = {
  name: 'Trophy',
  weight: 4
}
const pistol = {
  name: 'Pistol',
  weight: 3
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// GROUPS FOR ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
]

const weapons = [rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = ["Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// OBJECT THAT KEEPS THE MYSTERY.

const mystery = {
  killer: "",
  weapon: "",
  room: ""
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {

  // This will randomly select a killer from the suspects.
  mystery.killer = randomSelector(suspects)

  // This will change color of the card to the one connected to the chosen killer 
  document.getElementById('killerCard').style.borderColor = mystery.killer.color

  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`

  console.log(mystery.killer.image);

  document.getElementById('killerImage').src = mystery.killer.image

  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`

  mysteryGenerated = true

  console.log(mystery.killer);
}

// pickWeapon and pickRoom

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponCard').style.borderColor = mystery.killer.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} lb`

  console.log(mystery.weapon);
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomCard').style.borderColor = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`

  console.log(mystery.room);
}


document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// A FUNCTION revealMystery that will be invoked when you click that button. 

//console.log(mrGreen.description)
//console.log(weapons[weapons.length - 1])

const revealMystery = () => {
  console.log('Clicking reveal button')
  if (Object.values(mystery).includes("")) {
    document.getElementById('mystery').innerHTML = `No mystery yet`
  } else {
    console.log(mystery)
    console.log(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, 
    in the ${mystery.room} with a ${mystery.weapon.name}`)
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} 
    ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
  }
}

document.getElementById('button').onclick = revealMystery;