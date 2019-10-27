// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const suspects = [

    {
        firstName: "Jacob",
        lastName: "Green",
        nickname: "Mr Green",
        color: "#171429",
        description: "British gentleman with connections. Somewhat cocky.",
        age: 40,
        image: "assets/green.jpg",
        occupation: "Lawyer"
    },

    {
        firstName: "Victor",
        lastName: "Plum",
        nickname: "Professor Plum",
        color: "#681915",
        description: "A quick-witted, but hopelessly romantic young professor.",
        age: 35,
        image: "assets/plum.jpg",
        occupation: "Literature Professor"
    },

    {
        firstName: "Cassandra",
        lastName: "Scarlet",
        nickname: "Mrs Scarlet",
        color: "#0C352F",
        description: "Attractive American jazz singer. Divorced.",
        age: 37,
        image: "assets/scarlett.jpg",
        occupation: "Opera singer"
    },

    {
        firstName: "Eleanor",
        lastName: "Peacock",
        nickname: "Mrs Peacock",
        color: "#CEA259",
        description: "Quirky but attractive, and very wealthy woman.",
        age: 49,
        image: "assets/peacock.jpg",
        occupation: "A lady"
    },

    {
        firstName: "Jack",
        lastName: "Mustard",
        nickname: "Colonel Mustard",
        color: "#3A2007",
        description: "Dapper and dangerous ex-military American.",
        age: 52,
        image: "assets/mustard.jpg",
        occupation: "Colonel"
    },

    {
        firstName: "Josephine",
        lastName: "White",
        nickname: "Mrs White",
        color: "white",
        description: "The feminist. She hates all men and most kids.",
        age: 41,
        image: "assets/white.jpg",
        occupation: "Politician"
    }
];

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const weapons = [

    {
        name: "rope",
        weight: 8,
        strengh: 4,
    },

    {
        name: "knife",
        weight: 1,
        strengh: 6,
    },

    {
        name: "candlestick",
        weight: 3,
        strengh: 3,
    },

    {
        name: "dumbbell",
        weight: 6,
        strengh: 5,
    },

    {
        name: "poison",
        weight: 0,
        strengh: 10,
    },

    {
        name: "axe",
        weight: 3,
        strengh: 8,
    },

    {
        name: "bat",
        weight: 1,
        strengh: 5,
    },

    {
        name: "trophy",
        weight: 4,
        strengh: 6,
    },

    {
        name: "pistol",
        weight: 1,
        strengh: 9,
    }
];

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const rooms = [
    "Dinning Room",
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

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.
/* 
const suspects = [
    mrGreen,
    mrsWhite,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
]

const weapons = []

 */

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

mystery = {
    killer,
    weapon,
    room
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
    const theKiller = document.getElementById("killer")
    const theKillerName = document.getElementById("killerName")

    theKiller.style.background = mystery.killer.color
    theKillerName.innerHTML =
        mystery.killer.firstName + " " + mystery.killer.lastName

    /* const theKillerAge = document.getElementById("killerAge")
    theKillerAge.innerHTML = mystery.killer.age */

    const theKillerDescription = document.getElementById("killerDescription")
    theKillerDescription.innerHTML = mystery.killer.description

    /*  const theKillerOccupation = document.getElementById("killerOccupation")
     theKillerOccupation.innerHTML = mystery.killer.occupation */

    const theKillerImage = document.getElementById("killerImage")
    theKillerImage.src = mystery.killer.image
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
    mystery.weapon = randomSelector(weapons)

    const theWeapon = document.getElementById("weaponName")
    theWeapon.innerHTML = mystery.weapon.name
}

const pickRoom = () => {
    mystery.room = randomSelector(rooms)

    const theRoom = document.getElementById("roomName")
    theRoom.innerHTML = mystery.room
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
    const theCrime = document.getElementById("mystery")
    theCrime.innerHTML = `The murder was committed by ${mystery.killer.nickname}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}