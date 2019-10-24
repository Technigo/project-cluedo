// SUSPECT OBJECTS
const mrGreen = {
	firstName: 'John',
	lastName: 'Green',
	color: 'green',
	description:
		'Green spends most of his time attending to community affairs and ensuring the peace and quiet of the village is not disrupted.',
	age: 42,
	image: 'images/suspects/green.png',
	occupation: 'Entrepreneur'
};

const mrsOrchid = {
	firstName: '-',
	lastName: 'Orchid',
	color: 'crimson',
	description: '-',
	age: 53,
	image: 'images/suspects/orchid.png',
	occupation: 'Biologist with a Ph.D.'
};

const profPlum = {
	firstName: 'Victor',
	lastName: 'Plum',
	color: 'red',
	description:
		'Inventor, Archaeologist, Professor, Explorer. Plum is all of these and continues his quest for knowledge and innovation.',
	age: 32,
	image: 'images/suspects/plum.png',
	occupation: 'Professor'
};

const missScarlet = {
	firstName: 'Josephine',
	lastName: 'Scarlet',
	color: 'pink',
	description:
		'She is a a huge drama queen and always has to be the center of attention.',
	age: 24,
	image: 'images/suspects/scarlett.png',
	occupation: 'Actress'
};

const mrsPeacock = {
	firstName: 'Patricia',
	lastName: 'Peacock',
	color: 'orange',
	description:
		'Mrs. Peacock is a socialite and a terrible gossip. Inviting her to your parties can be a mistake; not inviting her can be far worse.',
	age: 57,
	image: 'images/suspects/peacock.png',
	occupation: 'Married to Colonel Michael Mustard'
};

const mrMustard = {
	firstName: 'Michael',
	lastName: 'Mustard',
	color: 'yellow',
	description:
		'Colonel Mustard plays in the stereotypical "great white hunter" and is the fiancée of Mrs. Peacock.',
	age: 62,
	image: 'images/suspects/mustard.png',
	occupation: 'Dormer SAS officer'
};

// WEAPON OBJECTS
const rope = {
	name: 'Rope',
	weight: 10,
	indefiniteArticle: 'a'
};

const knife = {
	name: 'Knife',
	weight: 3,
	indefiniteArticle: 'a'
};

const candlestick = {
	name: 'Candlestick',
	weight: 2,
	indefiniteArticle: 'a'
};

const dumbbell = {
	name: 'Dumbbell',
	weight: 20,
	indefiniteArticle: 'a'
};

const poison = {
	name: 'Poison',
	weight: 5,
	indefiniteArticle: ''
};

const axe = {
	name: 'Axe',
	weight: 5,
	indefiniteArticle: 'an'
};

const bat = {
	name: 'Bat',
	weight: 1,
	indefiniteArticle: 'a'
};

const trophy = {
	name: 'Trophy',
	weight: 6,
	indefiniteArticle: 'a'
};

const pistol = {
	name: 'Pistol',
	weight: 4,
	indefiniteArticle: 'a'
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
const selectCardHeading = document.querySelector('.select-card-heading');

// EVENT LISTENERS
theKiller.addEventListener('click', () => {
	pickKiller();

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

buttonPlayAgain.addEventListener('click', () => {
	resetUI();
});

// Disabling the reveal button at the beginning of the game
// buttonRevealMystery.classList.add('hide');

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
	return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
let mystery = {
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
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
const revealMystery = () => {
	theMystery.innerHTML = `
		The murder was committed by ${mystery.killer.firstName} ${
		mystery.killer.lastName
	} in the ${mystery.room.toLowerCase()} with ${
		mystery.weapon.indefiniteArticle
	} ${mystery.weapon.name.toLowerCase()}. 
	`;

	selectCardHeading.classList.add('zeroVisibility');
	theMystery.style.display = 'block';

	buttonRevealMystery.classList.add('hide');

	buttonPlayAgain.classList.remove('hide');
	buttonPlayAgain.disabled = false;

	theKiller.classList.add('clickDisabled');
	theWeapon.classList.add('clickDisabled');
	theRoom.classList.add('clickDisabled');
};

// Enable reveal button  if all card decks are selected
const enableRevealButton = () => {
	if (mystery.killer && mystery.weapon && mystery.room) {
		buttonRevealMystery.disabled = false;
		buttonRevealMystery.classList.remove('hide');
	}
};

// Reset UI for a new game
const resetUI = () => {
	mystery = {
		killer: undefined,
		weapon: undefined,
		room: undefined
	};

	theMystery.style.display = 'none';

	theKiller.style.background = 'black';
	theKiller.innerHTML = `
		<p>KILLER</p>
		<p id="killerName" class="hide"></p>
		<p id="killerAge" class="hide"></p>
		<p id="killerOccupation" class="hide"></p>
		<img id="killerImage" src="" height="100" class="hide" />
		<p id="killerDescription" class="hide"></p>
	`;

	theWeapon.innerHTML = `
		<p>WEAPON</p>
		<p id="weaponName" class="hide"></p>
		<p id="weaponWeight" class="hide"></p>
	`;

	theRoom.innerHTML = `
		<p>ROOM</p>
		<p id="roomName" class="hide"></p>
	`;

	buttonPlayAgain.disabled = true;
	buttonPlayAgain.classList.add('hide');

	theKiller.classList.remove('clickDisabled');
	theWeapon.classList.remove('clickDisabled');
	theRoom.classList.remove('clickDisabled');
	selectCardHeading.classList.remove('zeroVisibility');
};
