// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#7ae69e',
  description: 'He has a lot of connections.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#c27ae6',
  description: 'Has a talent for solving crimes.',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'dumbbell'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#ed7461',
  description: 'Young, cunning and attractive.',
  age: 31,
  image: 'assets/scarlet.png',
  occupation: 'brothel mami',
  favouriteWeapon: 'poison'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#6b95e8',
  description: 'Royal-like appearance.',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'rich lady',
  favouriteWeapon: 'pistol'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#e1eba9',
  description: 'Very dangerous and cunning relying on his military training.',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#f7fae8',
  description: 'Domestic worker and cook.',
  age: 40,
  image: 'assets/white.png',
  occupation: 'Cook',
  favouriteWeapon: 'candlestick'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  color: '#a19c85',
  mortality: 2,
  id: 'rope'
}
const knife = {
  name: 'Knife',
  weight: 2,
  color: '#a19c85',
  mortality: 6,
  id: 'knife'
}
const candlestick = {
  name: 'Candlestick',
  weight: 30,
  color: '#737275',
  mortality: 4,
  id: 'candlestick'
}
const dumbbell = {
  name: 'Dumbbell',
  weight: 90,
  color: '#aaa7b0',
  mortality: 5,
  id: 'dumbbell'
}
const poison = {
  name: 'Poison',
  weight: 3,
  color: '#c1f5ec',
  mortality: 8,
  id: 'poison'
}
const axe = {
  name: 'Axe',
  weight: 45,
  color: '#7d9e98',
  mortality: 7,
  id: 'axe'
}
const bat = {
  name: 'Bat',
  weight: 30,
  color: '#e3de94',
  mortality: 5,
  id: 'bat'
}
const trophy = {
  name: 'Trophy',
  weight: 50,
  color: '#fae484',
  mortality: 3,
  id: 'trophy'
}
const pistol = {
  name: 'Pistol',
  weight: 70,
  color: '#949081',
  mortality: 10,
  id: 'pistol'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: 'Dining Room',
  color: '#e0c4af'

}
const conservatory = {
  name: 'Conservatory',
  color: '#80b2ba'
}

const kitchen = {
  name: 'Kitchen',
  color: '#b08fcf'
}

const study = {
  name: 'Study',
  color: '#d1bda9'
}

const library = {
  name: 'Library',
  color: '#e3edcc'
}

const billiardRoom = {
  name: 'Billiard Room',
  color: '#e0999d'
}

const lounge = {
  name: 'Lounge',
  color: '#f7efdc'
}

const ballRoom = {
  name: 'Ballroom',
  color: '#c5e5f0'
}

const hall = {
  name: 'Hall',
  color: '#e7c5f0'
}

const spa = {
  name: 'Spa',
  color: '#ebc8be'
}

const livingRoom = {
  name: 'Living Room',
  color: '#c7ccb4'
}

const observatory = {
  name: 'Observatory',
  color: '#e3d4bc'
}

const theater = {
  name: 'Theater',
  color: '#bce3cd'
}

const guestHouse = {
  name: 'Guest House',
  color: '#9da0cc'
}

const patio = {
  name: 'Patio',
  color: '#bda4a6'
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

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: '',
  weapon: '',
  room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = ` Age:${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
   let favWeapon = weapons.find(weapon => weapon.id === mystery.killer.favouriteWeapon)
  document.getElementById('killerFavouriteWeapon').innerHTML = `Favourite weapon: ${favWeapon.name}`

}
document.getElementById('killerCard').onclick = pickKiller

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)


  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponMortality').innerHTML = `Mortality: ${mystery.weapon.mortality}`

}

document.getElementById('weaponCard').onclick = pickWeapon

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById('roomCard').style.background = mystery.room.color


}

document.getElementById('roomCard').onclick = pickRoom


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`
}

document.getElementById('revealMystery').onclick = revealMystery


const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    console.log(suspect.firstName, suspect.favouriteWeapon)
    let randomWeapon = randomSelector(weapons)
    suspect.favouriteWeapon = randomWeapon.id 
    console.log(suspect.firstName, suspect.favouriteWeapon)
  })
}
shuffleFavouriteWeapon()
