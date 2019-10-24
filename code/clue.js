// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
killerPicked = false;
weaponPicked = false;
roomPicked = false;
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
    color: "    ",
    description: "A quick-witted middle-aged man",
    age: 35,
    image: "assets/plum.png",
    occupation: "Professor"
}
const missScarlet = {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "A stock femme fatale",
    age: 25,
    image: "assets/scarlet.png",
    occupation: "Singer"
}
const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "brown",
    description: "An elderly woman who nearly always maintains her dignity",
    age: 60,
    image: "assets/peacock.png",
    occupation: "Professor"
}
const mrsWhite = {
    firstName: "Mrs",
    lastName: "White",
    color: "white",
    description: "A frazzled servant",
    age: 70,
    image: "assets/white.png",
    occupation: "Servant"
}
const mrMustard = {
    firstName: "Colonel",
    lastName: "Mustard",
    color: "yellow",
    description: "A dignified, dapper and dangerous military man",
    age: 55,
    image: "assets/mustard.png",
    occupation: "General"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
    name: "rope",
    color: "brown",
    weight: 10
}
const knife = {
    name: "Knife",
    color: "red",
    weight: 2
}
const candlestick = {
    name: "Candlestick",
    color: "orange",
    weight: 3
}
const dumbbell = {
    name: "Dumbbell",
    color: "blue",
    weight: 15
}
const poison = {
    name: "Poison",
    color: "green",
    weight: 1
}
const axe = {
    name: "Axe",
    color: "grey",
    weight: 8
}
const bat = {
    name: "Bat",
    color: "purple",
    weight: 2
}
const trophy = {
    name: "Trophy",
    color: "gold",
    weight: 12
}
const pistol = {
    name: "Pistol",
    color: "pink",
    weight: 6
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const dinningRoom = "Dinning room"
const conservatory = "Conservatory"
const kitchen = "Kitchen"
const study = "Study"
const library = "Library"
const billiardRoom = "Billiard Room"
const lounge = "Lounge"
const ballroom = "Ballroom"
const hall = "Hall"
const spa = "Spa"
const livingRoom = "Living Room"
const observatory = "Observatory"
const theater = "Theater"
const guestHouse = "Guest House"
const patio = "Patio"


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
    mrGreen,
    mrsWhite,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
]
console.log(suspects)

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
console.log(weapons)

const rooms = [
    dinningRoom,
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
    patio
]
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
    killer: this.killer,
    weapon: this.weapon,
    room: this.room
}


// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
    killerPicked = true;
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full d of the killer.
    const theKiller = document.getElementById("killer")
    const theKillerName = document.getElementById("killerName")
    const theKillerAge = document.getElementById("killerAge")
    const theKillerOccupation = document.getElementById("killerOccupation")
    const thekillerDescription = document.getElementById("killerDescription")
    const theKillerImage = document.getElementById("killerImage").src = mystery.killer.image

    theKiller.style.background = mystery.killer.color
    theKillerName.innerHTML = "Name: " +
        mystery.killer.firstName + " " + mystery.killer.lastName
    theKillerAge.innerHTML = "Age: " + mystery.killer.age
    theKillerOccupation.innerHTML = "Occupation: " + mystery.killer.occupation
    thekillerDescription.innerHTML = "Description: " + mystery.killer.description
    theKillerImage.innerHTML = mystery.killer.image

}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
    weaponPicked = true;
    // This will randomly select a weapon from the weapons. And add that to the mystery object.
    mystery.weapon = randomSelector(weapons)

    // This will show the name and the weight of the weapon.
    const theWeapon = document.getElementById("weapon")
    const theWeaponName = document.getElementById("weaponName")
    const theWeaponWeight = document.getElementById("weaponWeight")


    theWeapon.style.background = mystery.weapon.color
    theWeaponName.innerHTML = "Weapon: " + mystery.weapon.name
    theWeaponWeight.innerHTML = "Weight: " + mystery.weapon.weight
}

const pickRoom = () => {
    roomPicked = true;
    // This will randomly select a room from the rooms. And add that to the mystery object.
    mystery.room = randomSelector(rooms)

    // This will change the background color of the card to the one connected 
    //to the chosen killer and show the full name of the killer.
    const theRoomName = document.getElementById("roomName")

    theRoomName.innerHTML = "Room: " + mystery.room
}

console.log(mystery);

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
    const theMysteryReveal = document.getElementById("mystery")
    if (killerPicked && weaponPicked && roomPicked === true) {
        theMysteryReveal.innerHTML = "The murder was committed by " + mystery.killer.firstName + " " + mystery.killer.lastName + ", in the " + mystery.room + " with a " + mystery.weapon.name + "."
    } else {
        theMysteryReveal.innerHTML = "No mystery is yet to be revealed"
    }
}