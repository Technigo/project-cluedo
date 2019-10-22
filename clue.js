// SUSPECT OBJECTS
const mrGreen = {
	firstName: 'Jacob',
	lastName: 'Green',
	color: 'green',
	description: 'He has a lot of connections',
	age: 45,
	image: 'images/green.png',
	occupation: 'Entrepreneur'
};

const mrsOrchid = {
	firstName: '-',
	lastName: 'Orchid',
	color: 'crimson',
	description: 'TBD',
	age: 53,
	image: 'images/orchid.png',
	occupation: 'Nurse'
};

const profPlum = {
	firstName: 'Victor',
	lastName: 'Plum',
	color: 'red',
	description: 'TBD',
	age: 67,
	image: 'images/plum.png',
	occupation: 'Professor'
};

const missScarlet = {
	firstName: 'Cassandra',
	lastName: 'Scarlett',
	color: 'pink',
	description: 'TBD',
	age: 48,
	image: 'images/scarlett.png',
	occupation: 'TBD'
};

const mrsPeacock = {
	firstName: 'Eleanor',
	lastName: 'Peacock',
	color: 'orange',
	description: '-',
	age: 47,
	image: 'images/peacock.png',
	occupation: 'TBD'
};

const mrMustard = {
	firstName: 'Jack',
	lastName: 'Mustard',
	color: 'yellow',
	description: '-',
	age: 55,
	image: 'images/mustard.png',
	occupation: 'Colonel'
};

// WEAPON OBJECTS

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

// SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
	mrGreen,
	mrsOrchid,
	profPlum,
	missScarlet,
	mrsPeacock,
	mrMustard
];

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
];

const rooms = [
	'Dinning room',
	'Conservatory',
	'Kitchen',
	'Study library',
	'Billiard room',
	'Lounge',
	'Ballroom',
	'Hall',
	'Spa',
	'Living room',
	'Observatory',
	'Theater',
	'Guest house',
	'Patio'
];

// DOM REFERENCES
const theKiller = document.getElementById('killer');
const theKillerImage = document.getElementById('killerImage');
const theWeapon = document.getElementById('weapon');
const theRoom = document.getElementById('room');
const theMystery = document.getElementById('mystery');
const buttonRevealMystery = document.getElementById('revealMystery');
const buttonPlayAgain = document.getElementById('playAgain');

// EVENT LISTENERS
theKiller.addEventListener('click', e => {
	e.preventDefault();
	pickKiller();
	// console.log(theKillerImage.style);
	theKillerImage.style.display = 'block';
	enableRevealButton();
});

theWeapon.addEventListener('click', () => {
	pickWeapon();
	enableRevealButton();
});

theRoom.addEventListener('click', () => {
	pickRoom();
	enableRevealButton();
});

buttonRevealMystery.addEventListener('click', () => {
	revealMystery();
});

// Disabling the reveal button at the beginning of the game
buttonRevealMystery.classList.add('hide');
// buttonRevealMystery.disabled = true;

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
	return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
	killer: undefined,
	weapon: undefined,
	room: undefined
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
	// This will randomly select a killer from the suspects and add that to the mystery object.
	mystery.killer = randomSelector(suspects);

	// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
	theKiller.style.background = mystery.killer.color;

	// Updating HTML template for killer card instead of creating DOM references for each p tag individually
	theKiller.innerHTML = `
		<p>KILLER</p>
		<p id="killerName">${mystery.killer.firstName} ${mystery.killer.lastName}</p>	
		<p id="killerAge">${mystery.killer.age}</p>
		<p id="killerOccupation">${mystery.killer.occupation}</p>
		<img id="killerImage" src="${mystery.killer.image}" height="100" />
		<p id="killerDescription">${mystery.killer.description}</p>
	`;
};

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
	// This will randomly select a weapon and add that to the mystery object.
	mystery.weapon = randomSelector(weapons);

	// Updating HTML template for weapon card instead of creating DOM references for each p tag individually
	theWeapon.innerHTML = `
		<p>WEAPON</p>
		<p id="weaponName">${mystery.weapon.name}</p>
		<p id="weaponWeight">${mystery.weapon.weight}</p>
	`;
};

// This function will be invoked when you click on the room card.
const pickRoom = () => {
	// This will randomly select a room and add that to the mystery object.
	mystery.room = randomSelector(rooms);

	// Updating HTML template for room card instead of creating DOM references for each p tag individually
	theRoom.innerHTML = `
		<p>ROOM</p>
		<p id="roomName">${mystery.room}</p>
	`;
	console.log(mystery);
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
	theMystery.innerHTML = `
		The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}. 
	`;
	buttonRevealMystery.classList.add('hide');
	buttonPlayAgain.classList.remove('hide');
};

// Enable reveal button  if all card decks are selected

const enableRevealButton = () => {
	// Enable reveal button
	if (mystery.killer && mystery.weapon && mystery.room) {
		buttonRevealMystery.disabled = false;
		buttonRevealMystery.classList.remove('hide');
	}
};
