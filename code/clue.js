// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
const suspects = [{
        nickname: 'mrGreen',
        firstName: 'Jacob',
        lastName: 'Green',
        color: 'green',
        description: 'He has a lot of connections',
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
        description: 'She is very charming',
        age: 29,
        image: 'assets/scarlet.png',
        occupation: 'Actress'
    },
    {
        nickname: 'mrsPeacock',
        firstName: 'Eleonore',
        lastName: 'Peacock',
        color: 'blue',
        description: 'She is very likable',
        age: 62,
        image: 'assets/peacock.png',
        occupation: 'Housewife'
    },
    {
        nickname: 'colonelMustard',
        firstName: 'Jack',
        lastName: 'Mustard',
        color: 'yellow',
        description: 'He is vry cunning',
        age: 52,
        image: 'assets/mustard.png',
        occupation: 'Military'
    },
    {
        nickname: 'mrsWhite',
        firstName: 'Mary',
        lastName: 'White',
        color: 'white',
        description: 'She has a very good memory',
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
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

// const suspects = [
//     mrGreen,
//     mrsWhite,
//     professorPlum,
//     missScarlet,
//     colonelMustard,
//     mrsPeacock
// ]


console.log(weapons[0].name);
console.log(suspects[2].age);
console.log(suspects[5].description);
console.log(rooms[7]);



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById(
        'killerName'
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'