const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "olivedrab",
  description: "He has a lot of connections",
  age: 45,
  image: "C:\Users\siri_\Desktop\A_Lizzard\assets\green.png",
  occupation: "Entrepreneur",
}

const profPlum = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const missScarlet = {
  firstName: 'Angela',
  lastName: 'Scarlet',
  color:'red',
  description:'One of the most popular designers of swanky dresses',
  age:26,
  image:'assets/scarlet.png',
  occupation:'Fashiondesigner',
}

const damePeacock = {
  firstName: 'Andromeda',
  lastName: 'Peacock',
  color:'blue',
  description:'Widow after baron Sneezalot, owner of a large wineyard in France',
  age:45,
  image:'assets/peacock.png',
  occupation:'Businessowner',
}

const mrMustard = {
  firstName: 'George',
  lastName: 'Mustard',
  color:'yellow',
  description: 'A retired colonel fulfilling his dreams of being a master gardener',
  age:72,
  image:'assets/mustard.png',
  occupation: 'retired colonel',
}

const mrsWhite = {
firstName: 'Stella',
lastName: 'White',
color:'purple',
description:'hse is a meticulous and careful person',
age:68,
image:'assets/white.png',
occupation:'maid',
}

const rope = {
  name: "a rope",
  weight: 30,
  difficulty:'hard',
  image:'assets/swords-4058193_960_720.png'
}

const dagger = {
  name: "a dagger",
  weight: 80,
  difficulty:'easy',
  image: "assets/swords-4058193_960_720.png"
}

const candelabra = {
  name: "a candelabra",
  weight: 70,
  difficulty: 'intermediete',
  image: "assets/swords-4058193_960_720.png"
}
 
const poison = {
  name: "poison",
  weight: 10,
  difficulty:'advanced',
  image: "assets/swords-4058193_960_720.png"
}
  
const trophy = {
  name: "a trophy",
  weight: 50,
  difficulty:'hard',
  image: "assets/swords-4058193_960_720.png"
}

const pistol = {
  name: "a pistol",
  weight: 20,
  difficulty:'easy',
  image: "assets/swords-4058193_960_720.png"
}

const diningRoom = {
  name: "Dining room",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const conservatory = {
  name: "Conservatory",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const kitchen = {
  name: "Kitchen",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const study = {
  name: "Study",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const library = {
  name: "Library",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const billiardRoom = {
  name: "Billiard room",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const lounge = {
  name: "Lounge",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const ballroom = {
  name: "Ballroom",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const hall = {
  name: "Hall",
  image: "assets/10031295804_c50b586b2e_b.jpg"
}

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  damePeacock,
  mrMustard
]

const weapons = [
  rope,
  dagger,
  candelabra,
  poison,
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
  ballroom,
  hall,
]

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: "",
  weapon: "",
  room: "",
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = `Age: ${mystery.killer.age} years`
  theKillerOccupation.innerHTML = `Occupation: ${mystery.killer.occupation}`
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponColor = document.getElementById("weaponDifficulty")
  const theWeaponImage = document.getElementById("weaponImage")
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = `Weight: ${mystery.weapon.weight} UNITS`
  theWeaponColor.innerHTML = `Difficulty: ${mystery.weapon.difficulty}`
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName")
  const theRoomImage = document.getElementById("roomImage")
  theRoomName.innerHTML = mystery.room.name
  theRoomImage.src = mystery.room.image
}

const revealMystery = () => {
  const mysteryAnswer = document.getElementById("mystery")
  if (!mystery.killer || !mystery.room || !mystery.weapon) {
    mysteryAnswer.innerHTML = "No mystery is yet to be revealed. <br> Please pick a card from every deck."
  }
  else {
    mysteryAnswer.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with ${mystery.weapon.name}.`
    document.getElementById("reload").style.display = "block"
  }

}
