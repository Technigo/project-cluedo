const suspects = [
  {
    displayName: "Mr Green",
    firstName: "Jacob",
    lastName: "Green",
    color: "#8DAB8D",
    description: "He is a cat lover",
    age: "32 years",
    image: "images/suspects/mrGreen.png",
    occupation: "Entrepreneur"
  },
  {
    displayName: "Professor Plum",
    firstName: "Victor",
    lastName: "Plum",
    color: "#8a728c",
    description: "He is a mansplainer",
    age: "45 years",
    image: "images/suspects/profPlum.png",
    occupation: "Professor"
  },
  {
    displayName: "Miss Scarlet",
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "#f48282",
    description: "She is a deadlift champion",
    age: "36 years",
    image: "images/suspects/missScarlet.png",
    occupation: "Kennel Owner"
  },
  {
    displayName: "Mrs Peacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "#7296aa",
    description: "She is THE riches",
    age: "49 years",
    image: "images/suspects/mrsPeacock.png",
    occupation: "CEO of a big bank"
  },
  {
    displayName: "Colonel Mustard",
    firstName: "Jack",
    lastName: "Mustard",
    color: "#f4af53",
    description: "He is a ventriloquist",
    age: "54 years",
    image: "images/suspects/colMustard.png",
    occupation: "Colonel"
  },
  {
    displayName: "Mrs White",
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
    weight: "1 kg",
    color: "#acccca",
    image: "images/weapons/rope.png"
  },
  {
    name: "Knife",
    weight: "0.5 kg",
    color: "#acccca",
    image: "images/weapons/knife.png"
  },
  {
    name: "Candlestick",
    weight: "2 kg",
    color: "#acccca",
    image: "images/weapons/candlestick.png"
  },
  {
    name: "Dumbbell",
    weight: "10 kg",
    color: "#acccca",
    image: "images/weapons/dumbbell.png"
  },
  {
    name: "Poison",
    weight: "0.5 kg",
    color: "#acccca",
    image: "images/weapons/poison.png"
  },
  {
    name: "Axe",
    weight: "3 kg",
    color: "#acccca",
    image: "images/weapons/axe.png"
  },
  {
    name: "Bat",
    weight: "0.8 kg",
    color: "#acccca",
    image: "images/weapons/bat.png"
  },
  {
    name: "Trophy",
    weight: "2 kg",
    color: "#acccca",
    image: "images/weapons/trophy.png"
  },
  {
    name: "Pistol",
    weight: "0.7 kg",
    color: "#acccca",
    image: "images/weapons/pistol.png"
  }
]

const rooms = [
  {
    name: "Attic",
    floor: "3rd floor",
    color: "#d8b8c4",
    image: "images/rooms/attic.png"
  },
  {
    name: "Ballroom",
    floor: "1st floor",
    color: "#d8b8c4",
    image: "images/rooms/ballroom.png"
  },
  {
    name: "Basement",
    floor: "Lower level 1",
    color: "#d8b8c4",
    image: "images/rooms/basement.png"
  },
  {
    name: "Bathroom",
    floor: "2nd floor",
    color: "#d8b8c4",
    image: "images/rooms/bathroom.png"
  },
  {
    name: "Greenhouse",
    floor: "In the garden",
    color: "#d8b8c4",
    image: "images/rooms/greenhouse.png"
  },
  {
    name: "Guest House",
    floor: "In the garden",
    color: "#d8b8c4",
    image: "images/rooms/guesthouse.png"
  },
  {
    name: "Gym",
    floor: "Lower level 1",
    color: "#d8b8c4",
    image: "images/rooms/gym.png"
  },
  {
    name: "Hall",
    floor: "Ground floor",
    color: "#d8b8c4",
    image: "images/rooms/hall.png"
  },
  {
    name: "Kitchen",
    floor: "Ground floor",
    color: "#d8b8c4",
    image: "images/rooms/kitchen.png"
  },
  {
    name: "Living Room",
    floor: "1st floor",
    color: "#d8b8c4",
    image: "images/rooms/livingroom.png"
  },
  {
    name: "Lounge",
    floor: "1st floor",
    color: "#d8b8c4",
    image: "images/rooms/lounge.png"
  },
  {
    name: "Study",
    floor: "2nd floor",
    color: "#d8b8c4",
    image: "images/rooms/study.png"
  }
]

const pickRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

let mystery = {
  killer: "",
  weapon: "",
  room: ""
}

const pickKiller = () => {
  mystery.killer = pickRandom(suspects)

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

  hideTextShowButton()
}

const pickWeapon = () => {
  mystery.weapon = pickRandom(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image

  hideTextShowButton()
}

const pickRoom = () => {
  mystery.room = pickRandom(rooms)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")
  const theRoomFloor = document.getElementById("roomFloor")
  const theRoomImage = document.getElementById("roomImage")

  theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = mystery.room.name
  theRoomFloor.innerHTML = mystery.room.floor
  theRoomImage.src = mystery.room.image

  hideTextShowButton()
}

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.displayName}, in the ${mystery.room.name.toLowerCase()} with the ${mystery.weapon.name.toLowerCase()}.`

  showTextHideButton()
}

const showTextHideButton = () => {
  document.getElementById("mystery").style.display = null;
  document.getElementById("reveal-button").style.display = "none";
}

const hideTextShowButton = () => {
  document.getElementById("mystery").style.display = "none";
  document.getElementById("reveal-button").style.display = null;
}

suspects.forEach(suspect => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = suspect.image
  link.as = "image"
  document.head.appendChild(link)
})

weapons.forEach(weapon => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = weapon.image
  link.as = "image"
  document.head.appendChild(link)
})

rooms.forEach(room => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = room.image
  link.as = "image"
  document.head.appendChild(link)
})