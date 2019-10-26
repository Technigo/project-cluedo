
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "#8DAB8D",
    description: "He has fishy connections",
    age: "32 years",
    image: "images/suspects/mrGreen.png",
    occupation: "Entrepreneur"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    color: "#8a728c",
    description: "He is a mansplainer",
    age: "45 years",
    image: "images/suspects/profPlum.png",
    occupation: "Professor"
  },
  {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "#f48282",
    description: "She is a punk rock drummer",
    age: "36 years",
    image: "images/suspects/missScarlet.png",
    occupation: "Kennel Owner"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "#7296aa",
    description: "She is THE riches",
    age: "49 years",
    image: "images/suspects/mrsPeacock.png",
    occupation: "CEO of a big bank"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "#f4af53",
    description: "He is a ventriloquist",
    age: "54 years",
    image: "images/suspects/colMustard.png",
    occupation: "Colonel"
  },
  {
    firstName: "Andrea",
    lastName: "White",
    color: "#a09f9f",
    description: "She is a freediver",
    age: "54 years",
    image: "images/suspects/mrsWhite.png",
    occupation: "Optician"
  }
]

const weapons = [
  {
    name: "Rope",
    weight: "2 kg",
    color: "#f48282",
    image: "images/weapons/rope.png"
  },
  {
    name: "Knife",
    weight: "1 kg",
    color: "#8a728c",
    image: "images/weapons/knife.png"
  },
  {
    name: "Candlestick",
    weight: "3 kg",
    color: "#f4af53",
    image: "images/weapons/candlestick.png"
  },
  {
    name: "Dumbbell",
    weight: "15 kg",
    color: "#a09f9f",
    image: "images/weapons/dumbbell.png"
  },
  {
    name: "Poison",
    weight: "0.5 kg",
    color: "#8DAB8D",
    image: "images/weapons/poison.png"
  },
  {
    name: "Axe",
    weight: "8 kg",
    color: "#8a728c",
    image: "images/weapons/axe.png"
  },
  {
    name: "Bat",
    weight: "2 kg",
    color: "#f48282",
    image: "images/weapons/bat.png"
  },
  {
    name: "Trophy",
    weight: "4 kg",
    color: "#f4af53",
    image: "images/weapons/trophy.png"
  },
  {
    name: "Pistol",
    weight: "2 kg",
    color: "#7296aa",
    image: "images/weapons/pistol.png"
  }
]

const rooms = [
  {
    name: "Attic",
    color: "#f48282",
    image: "images/rooms/attic.png"
  },
  {
    name: "Ballroom",
    color: "#7296aa",
    image: "images/rooms/ballroom.png"
  },
  {
    name: "Basement",
    color: "#f48282",
    image: "images/rooms/basement.png"
  },
  {
    name: "Bathroom",
    color: "#8a728c",
    image: "images/rooms/bathroom.png"
  },
  {
    name: "Greenhouse",
    color: "#a09f9f",
    image: "images/rooms/greenhouse.png"
  },
  {
    name: "Guest House",
    color: "#f4af53",
    image: "images/rooms/guesthouse.png"
  },
  {
    name: "Gym",
    color: "#8a728c",
    image: "images/rooms/gym.png"
  },
  {
    name: "Hall",
    color: "#f48282",
    image: "images/rooms/hall.png"
  },
  {
    name: "Kitchen",
    color: "#a09f9f",
    image: "images/rooms/kitchen.png"
  },
  {
    name: "Living Room",
    color: "#f4af53",
    image: "images/rooms/livingroom.png"
  },
  {
    name: "Lounge",
    color: "#7296aa",
    image: "images/rooms/lounge.png"
  },
  {
    name: "Study",
    color: "#f48282",
    image: "images/rooms/study.png"
  }
]

const randomSelector = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

let mystery = {
  killer: "",
  weapon: "",
  room: ""
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerImage.src = mystery.killer.image
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerDescription.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")
  const theRoomImage = document.getElementById("roomImage")

  theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = mystery.room.name
  theRoomImage.src = mystery.room.image
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
