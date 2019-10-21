// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
	firstName: 'Jacob',
	lastName: 'Green',
	color: 'Green',
	description: 'He has a lot of connections',
	age: 45,
	image: 'assets/green.png',
	occupation: 'Entrepreneur'
};

const mrsWhite = {
	firstName: '-',
	lastName: 'White',
	color: 'White',
	description: '-',
	age: 53,
	image: 'images/white.png',
	occupation: 'Nurse'
};

const profPlum = {
	firstName: 'Victor',
	lastName: 'Plum',
	color: 'Red',
	description: '-',
	age: 67,
	image: 'images/plum.png',
	occupation: 'Professor'
};

const missScarlet = {
	firstName: 'Cassandra',
	lastName: 'Scarlet',
	color: 'Pink',
	description: '-',
	age: 48,
	image: 'images/scarlet.png',
	occupation: '-'
};

const mrsPeacock = {
	firstName: 'Eleanor',
	lastName: 'Peacock',
	color: 'Orange',
	description: '-',
	age: 47,
	image: 'images/peacock.png',
	occupation: '-'
};

const mrMustard = {
	firstName: 'Jack',
	lastName: 'Mustard',
	color: 'Yellow',
	description: '-',
	age: 55,
	image: 'images/mustard.png',
	occupation: 'Colonel'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
	name: 'Rope',
	weight: 10
};

const knife = {
	name: 'Knife',
	weight: 3
};

const candlestick = {
	name: 'Candlestick',
	weight: 2
};

const dumbbell = {
	name: 'Dumbbell',
	weight: 20
};

const poison = {
	name: 'Poison',
	weight: 5
};

const axe = {
	name: 'Axe',
	weight: 5
};

const bat = {
	name: 'Bat',
	weight: 1
};

const trophy = {
	name: 'Trophy',
	weight: 6
};

const pistol = {
	name: 'Pistol',
	weight: 4
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
	mrGreen,
	mrsWhite,
	profPlum,
	missScarlet,
	mrsPeacock,
	mrMustard
];

const weapons = [];

const rooms = [];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
	return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
	// This will randomly select a killer from the suspects. And add that to the mystery object.
	mystery.killer = randomSelector(suspects);

	// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
	const theKiller = document.getElementById('killer');
	const theKillerName = document.getElementById('killerName');

	theKiller.style.background = mystery.killer.color;
	theKillerName.innerHTML =
		mystery.killer.firstName + ' ' + mystery.killer.lastName;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
