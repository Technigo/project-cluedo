// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
const suspects = [{
        nickname: 'mrGreen',
        firstName: 'Jacob',
        lastName: 'Green',
        color: 'green',
        description: 'He has a lot of connections.',
        age: 45,
        image: 'assets/green.png',
        occupation: 'Priest'
    },
    {
        nickname: 'professorPlum',
        firstName: 'Victor',
        lastName: 'Plum',
        color: 'purple',
        description: 'He is very smart.',
        age: 55,
        image: 'assets/plum.png',
        occupation: 'Professor'
    },
    {
        nickname: 'missScarlet',
        firstName: 'Cassandra',
        lastName: 'Scarlet',
        color: 'red',
        description: 'She is very charming.',
        age: 29,
        image: 'assets/scarlet.png',
        occupation: 'Actress'
    },
    {
        nickname: 'mrsPeacock',
        firstName: 'Eleonore',
        lastName: 'Peacock',
        color: 'blue',
        description: 'She is very likable.',
        age: 62,
        image: 'assets/peacock.png',
        occupation: 'Housewife'
    },
    {
        nickname: 'colonelMustard',
        firstName: 'Jack',
        lastName: 'Mustard',
        color: 'yellow',
        description: 'He is very cunning.',
        age: 52,
        image: 'assets/mustard.png',
        occupation: 'Military'
    },
    {
        nickname: 'mrsWhite',
        firstName: 'Mary',
        lastName: 'White',
        color: 'white',
        description: 'She has a very good memory.',
        age: 39,
        image: 'assets/white.png',
        occupation: 'Nurse'
    }
];
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
const weapons = [{
        name: 'rope',
        weight: 7
    },
    {
        name: 'knife',
        weight: 11
    },
    {
        name: 'candlestick',
        weight: 3
    },
    {
        name: 'dumbbell',
        weight: 12
    },
    {
        name: 'poison',
        weight: 2
    },
    {
        name: 'axe',
        weight: 11
    },
    {
        name: 'bat',
        weight: 9
    },
    {
        name: 'trophy',
        weight: 6
    },
    {
        name: 'pistol',
        weight: 12
    }
];
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const rooms = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom",
    "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"
];


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
    // Randomly selects a killer from the suspects-array and adds that to the mystery object.
    mystery.killer = randomSelector(suspects);
    // This will change the background color of the card and show picture and detail about the suspect.
    document.getElementById('killerCard').style.background = mystery.killer.color;
    document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
    document.getElementById('killerImage').src = mystery.killer.image;
    document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`;
    document.getElementById('killerDescription').innerHTML = mystery.killer.description;
    document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation;
}

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
    // Randomly selects a weapon from the weapons-array and adds that to the mystery object.
    mystery.weapon = randomSelector(weapons);
    document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
    document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} kg`;
}

const pickRoom = () => {
    mystery.room = randomSelector(rooms);
    document.getElementById('roomName').innerHTML = `${mystery.room}`;
}

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

// Function that will be invoked when you click the reveal-button. It prints out a message
//with facts about the murderer.
const revealMystery = () => {
    document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, 
    in the ${mystery.room} with a ${mystery.weapon.name}.`;
}