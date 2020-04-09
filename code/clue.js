// OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#b6cdb1',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green2.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#837288',
  description: 'He is a mathematical genius',
  age: 33,
  image: 'assets/plum2.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#ea5643',
  description: 'She will do anything to stay in the spotlight',
  age: 35,
  image: 'assets/scarlet2.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#89b7cc',
  description: 'A manners-freak with a nose for politics',
  age: 42,
  image: 'assets/peacock2.png',
  occupation: 'Politician'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#eeb736',
  description: 'A stiff-lipped gentleman',
  age: 34,
  image: 'assets/mustard2.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She will do anything for justice',
  age: 28,
  image: 'assets/white2.png',
  occupation: 'Lawyer'
}

// OBJECTS FOR ALL THE WEAPONS:

const rope = {
  name: 'Rope',
  image: 'assets/rope.png'
}

const knife = {
  name: 'Knife',
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  image: 'assets/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  image: 'assets/dumbbell.png'
}

const poison = {
  name: 'Poison',
  image: 'assets/poison.png'
}

const axe = {
  name: 'Axe',
  image: 'assets/axe.png'
}

const bat = {
  name: 'Bat',
  image: 'assets/bat.png'
}

const trophy = {
  name: 'Trophy',
  image: 'assets/trophy.png'
}

const pistol = {
  name: 'Pistol',
  image: 'assets/pistol.png'
}

//  OBJECTS FOR ALL THE ROOMS:

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/diningroom.png'
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.png'
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.png'
}
const study = {
  name: 'Study',
  image: 'assets/study.png'
}

const library = {
  name: 'Library',
  image: 'assets/library.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiardroom.png'
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.png'
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.png'
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.png'
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.png'
}

const livingRoom = {
  name: 'Living Room',
  image: 'assets/livingroom.png'
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.png'
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.png'
}

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guesthouse.png'
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.png'
}

// SUSPECTS, WEAPONS AND ROOMS GROUPED IN ARRAYS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
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
  pistol,
]

const rooms = [
  diningRoom,
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
  patio,
]

// FUNCTION RANDOMLY SELECTING ONE ITEM FROM THE ABOVE ARRAYS:

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// OBJECT KEEPING MYSTERY:

const mystery = {
  killer: '',
  weapon: '',
  room: '',
}

// FUNCTION INVOKED WHEN YOU CLICK ON THE KILLER CARD, CLICK AGAIN TO RESET:

const pickKiller = () => {
  if (document.getElementById('killerCard').classList.contains('show')) {
    mystery.killer = ''

    document.getElementById('killerCard').style.background = '#f7876b'
    document.getElementById('killerName').innerHTML = ''
    document.getElementById('killerImage')
    killerImage.src = ''
    killerImage.alt = ''

    killerCard.classList.remove('show')
  } else {
    mystery.killer = randomSelector(suspects)

    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById(
      'killerName'
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerImage')
    killerImage.src = mystery.killer.image
    killerImage.alt = `${mystery.killer.firstName} ${mystery.killer.lastName}`

    killerCard.classList.add('show')
  }
}

// FUNCTION INVOKED WHEN YOU CLICK ON THE WEAPON CARD, CLICK AGAIN TO RESET:

const pickWeapon = () => {
  if (document.getElementById('weaponCard').classList.contains('show')) {
    mystery.weapon = ''

    document.getElementById('weaponName').innerHTML = ''
    document.getElementById('weaponImage')
    weaponImage.src = ''
    weaponImage.alt = ''

    weaponCard.classList.remove('show')
  } else {
    mystery.weapon = randomSelector(weapons)

    document.getElementById('weaponName').innerHTML = mystery.weapon.name
    document.getElementById('weaponImage')
    weaponImage.src = mystery.weapon.image
    weaponImage.alt = mystery.weapon.name

    weaponCard.classList.add('show')
  }
}

// FUNCTION INVOKED WHEN YOU CLICK ON THE ROOM CARD, CLICK AGAIN TO RESET:

const pickRoom = () => {
  if (document.getElementById('roomCard').classList.contains('show')) {
    mystery.room = ''

    document.getElementById('roomName').innerHTML = ''
    document.getElementById('roomImage')
    roomImage.src = ''
    roomImage.alt = ''

    roomCard.classList.remove('show')
  } else {
    mystery.room = randomSelector(rooms)

    document.getElementById('roomName').innerHTML = mystery.room.name
    document.getElementById('roomImage')
    roomImage.src = mystery.room.image
    roomImage.alt = mystery.room.name

    roomCard.classList.add('show')
  }
}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom

// FUNCTION REVEALING MYSTERY WHEN YOU CLICK ON THE BUTTON:

const revealMystery = () => {
  if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
    document.getElementById('mystery').innerHTML = 'Pick a card from each deck to reveal the crime'
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`
  }
}

document.getElementById('mysteryReveal').onclick = revealMystery