// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "assets/green.png",
    occupation: "Entrepreneur"
}

const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    color: "gray",
    description: "He knows alot of stuff",
    age: 61,
    image: "assets/plum.png",
    occupation: "Professor"
}

const missScarlet = {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "blue",
    description: "She is curious about life",
    age: 28,
    image: "assets/scarlet.png",
    occupation: "Teacher"
}


const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "green",
    description: "A restless soul",
    age: 51,
    image: "assets/peacock.png",
    occupation: "Housewife"
}


const colMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    color: "red",
    description: "Carries alot of scars",
    age: 63,
    image: "assets/mustard.png",
    occupation: "Retired colonel"
}

const mrsWhite = {
    firstName: "Mrs",
    lastName: "White",
    color: "black",
    description: "No information available",
    age: "N/A",
    image: "assets/white.png",
    occupation: "Unknown"
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
    name: "rope",
    weight: 10
}

const knife = {
    name: "knife",
    weight: 6
}

const candlestick = {
    name: "candlestick",
    weight: 4
}

const dumbbell = {
    name: "dumbbell",
    weight: 17
}

const poison = {
    name: "poison",
    weight: 5
}

const axe = {
    name: "axe",
    weight: 20
}

const bat = {
    name: "bat",
    weight: 18
}

const trophy = {
    name: "trophy",
    weight: 12
}

const pistol = {
    name: "pistol",
    weight: 12
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
    mrGreen,
    mrsWhite,
    profPlum,
    missScarlet,
    mrsPeacock,
    colMustard
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
    "Dining room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living room",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = (array) => {
    return array[Math.floor(Math.random() * array.length)]
    console.log("hej")
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mystery = {

    killer: "no",
    weapon: "no",
    room: "no"

}


// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)



    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
    const theKiller = document.getElementById("killer")
    const theKillerName = document.getElementById("killerName")
    const killerAge = document.getElementById("killerAge")
    const killerOccupation = document.getElementById("killerOccupation")
    const killerImage = document.getElementById("killerImage")


    theKiller.style.background = mystery.killer.color

    theKillerName.innerHTML =
        mystery.killer.firstName + " " + mystery.killer.lastName

    killerAge.innerHTML =
        mystery.killer.age

    killerOccupation.innerHTML =
        mystery.killer.occupation

    killerDescription.innerHTML =
        mystery.killer.description

    killerImage.src =
        mystery.killer.image
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


const pickWeapon = () => {
    // This will randomly select a weapon from the weapons. And add that to the mystery object.
    mystery.weapon = randomSelector(weapons)


    const weaponName = document.getElementById("weaponName")
    const weaponWeight = document.getElementById("weaponWeight")

    weaponName.innerHTML =
        mystery.weapon.name

    weaponWeight.innerHTML =
        mystery.weapon.weight


}


const pickRoom = () => {
    // This will randomly select a room from the rooms. And add that to the mystery object.
    mystery.room = randomSelector(rooms)


    const roomName = document.getElementById("roomName")

    roomName.innerHTML =
        mystery.room

}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {

    const theMystery = document.getElementById("mystery")

    if (mystery.killer != "no" && mystery.room != "no" && mystery.weapon != "no") {

        theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`

    } else {

        theMystery.innerHTML = `The murder has not been solved yet!`


    }

}