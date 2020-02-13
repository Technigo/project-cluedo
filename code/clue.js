const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'Loyal housekeeper and devoted confidant',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'The militant and athletic colonel of the game',
  age: 52,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'The sinister and political senator of the game',
  age: 40,
  image: 'assets/peacock.png',
  occupation: 'Senator'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'The uptight and intelligent professor of the game',
  age: 61,
  image: 'assets/plum.png',
  occupation: 'Professor',
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The sultry and beautiful actress',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
}

const rope = {
  name: 'Rope',
  weight: 10,
  image: 'assets/rope.jpg',
}

const knife = {
  name: 'Knife',
  weight: 2,
  image: 'assets/knife.jpg',
}

const candlestick = {
  name: 'Candlestick',
  weight: 5,
  image: 'assets/candlestick.jpg',
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 15,
  image: 'assets/dumbbell.jpg',
}

const poison = {
  name: 'Posion',
  weight: 1,
  image: 'assets/poison.eps',
}

const axe = {
  name: 'Axe',
  weight: 25,
  image: 'assets/axe.jpg',
}

const bat = {
  name: 'Bat',
  weight: 17,
  image: 'assets/bat.jpg',
}

const trophy = {
  name: 'Trophy',
  weight: 4,
  image: 'assets/trophy.jpg',
}

const pistol = {
  name: 'Pistol',
  weight: 3,
  image: 'assets/pistol.jpg',
}


const diningRoom = {
  name: 'Dining room',
  image: 'assets/diningroom.eps',
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.eps',
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.jpg',
}

const study = {
  name: 'Study',
  image: 'assets/study.ai',
}

const library = {
  name: 'Library',
  image: 'assets/library.jpg',
}

const billiardRoom = {
  name: 'Billiard room',
  image: 'assets/billiard.jpg',
}

const lounge = {
  name: 'Lounge',
  image: 'assets/livingroom.jpg',
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.jpg',
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.ai',
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.jpg',
}

const livingRoom = {
  name: 'Living room',
  image: 'assets/livingroom.jpg',
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.jpg',
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg',
}

const guestHouse = {
  name: 'Guest house',
  image: 'assets/guesthouse.jpg',
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.jpg',
}

const suspects = [
  mrGreen,
  mrsWhite,
  colMustard,
  mrsPeacock,
  profPlum,
  missScarlet,
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

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: '',
  weapon: '',
  room: '',
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.occupation}`
}
document.getElementById('killerCard').onclick = pickKiller

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponImage').src = mystery.weapon.image
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}
document.getElementById('weaponCard').onclick = pickWeapon

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomImage').src = mystery.room.image
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room.name}`
}
document.getElementById('roomCard').onclick = pickRoom

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was comitted by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name}
  with a ${mystery.weapon.name}`

}
document.getElementById('button').onclick = revealMystery