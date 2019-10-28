const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  nameCol: "beige",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  nameCol: "beige",
  description: "With his good looks and charm he has found a dark side being sneaky.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  nameCol: "beige",
  description: "A movie star who will do anything to stay in the spotlight",
  age: 25,
  image: "scarlett.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  nameCol: "beige",
  description: "Despite her innocent looks, she is a formidable politician.",
  age: 52,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "orange",
  nameCol: "beige",
  description: "An expert in weapons and conspiracy",
  age: 58,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  nameCol: "beige",
  description: "Claiming to have loved her employer, but is no longer happy in her work",
  age: 62,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

const rope = {
  name: "rope",
  image: "assets/rope.png"
}

const knife = {
  name: "knife",
  image: "assets/knife.png"
}

const candleStick = {
  name: "candlestick",
  image: "assets/candlestick.png"
}

const dumbBell = {
  name: "dumbbell",
  image: "assets/dumbbell.png"
}

const poison = {
  name: "drop of poison",
  image: "assets/poison.png"
}

const axe = {
  name: "axe",
  image: "assets/axe.png"
}

const bat = {
  name: "bat",
  image: "assets/bat.png"
}

const trophy = {
  name: "trophy",
  image: "assets/trophy.png"
}

const pistol = {
  name: "pistol",
  image: "assets/pistol.png"
};


const diningRoom = {
  name: "dining room",
  image: "assets/diningroom.png"
}

const conservatory = {
  name: "conservatory",
  image: "assets/conservatory.png"
}

const kitchen = {
  name: "kitchen",
  image: "assets/kitchen.png"
}

const library = {
  name: "library",
  image: "assets/Library.png"
}

const billiardRoom = {
  name: "billiard room",
  image: "assets/billiardRoom.png"
}

const ballRoom = {
  name: "ballroom",
  image: "assets/ballroom.png"
}

const hall = {
  name: "hall",
  image: "assets/hall.png"
}

const spa = {
  name: "spa",
  image: "assets/spa.png"
}

const livingRoom = {
  name: "livingroom",
  image: "assets/livingroom.png"
};


const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
  mrsWhite
];


const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  library,
  billiardRoom,
  ballRoom,
  hall,
  spa,
  livingRoom
];

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};


const mystery = {
}


const pickKiller = () => {

  mystery.killer = randomSelector(suspects);

  const theKiller = document.getElementById("killer")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerTitel = document.getElementById("killerTitel")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = "beige"
  theKillerTitel.style.background = mystery.killer.color
  theKillerName.style.background = mystery.killer.color
  theKillerAge.style.background = mystery.killer.color
  theKillerOccupation.style.background = mystery.killer.nameCol
  theKillerDescription.style.background = mystery.killer.nameCol
  theKillerImage.setAttribute("src", mystery.killer.image)

  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName + ","

  theKillerAge.innerHTML =
    mystery.killer.age

  theKillerOccupation.innerHTML =
    mystery.killer.occupation

  theKillerDescription.innerHTML =
    mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon")
  const theWeaponHolder = document.getElementById("weaponHolder")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = "beige"
  theWeaponHolder.style.background = "silver"
  theWeaponName.style.background = "silver"
  theWeaponImage.setAttribute("src", mystery.weapon.image)
  theWeaponName.innerHTML =
    mystery.weapon.name
}

const pickRoom = () => {

  mystery.room = randomSelector(rooms);
  const theRoom = document.getElementById("room")
  const theRoomHolder = document.getElementById("roomHolder")
  const theRoomName = document.getElementById("roomName")
  const theRoomImage = document.getElementById("roomImage")

  theRoom.style.background = "beige"
  theRoomHolder.style.background = "silver"
  theRoomName.style.background = "silver"
  theRoomImage.setAttribute("src", mystery.room.image)
  theRoomName.innerHTML =
    mystery.room.name
}


const revealMystery = () => {
  let theTruth = document.getElementById("mystery")

  if (mystery.killer && mystery.weapon && mystery.room) {
    theTruth.innerHTML =
      `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
  }
  else {
    theTruth.innerHTML =
      `No mystery is yet to be revealed`
  }
}
