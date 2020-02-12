// OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
	firstName: "Jacob",
	lastName: "Green",
	color: "green",
	description: "He has a lot of connections",
	age: 45,
	image: "assets/green.png",
	occupation: "Entrepreneur"
};

const professorPlum = {
	firstName: "Victor",
	lastName: "Plum",
	color: "purple",
	description: "A quick-witted, young professor with a bow tie and glasses",
	age: 36,
	image: "assets/plum.png",
	occupation: "Professor"
};

const missScarlet = {
	firstName: "Cassandra",
	lastName: "Scarlet",
	color: "red",
	description: "A femme fatale typically portrayed as young and attractive",
	age: 25,
	image: "assets/scarlet.png",
	occupation: "Actress"
};

const mrsPeacock = {
	firstName: "Eleanor",
	lastName: "Peacock",
	color: "blue",
	description: "A grande dame and still-attractive woman",
	age: 32,
	image: "assets/peacock.png",
	occupation: "Socialite"
};

const colonelMustard = {
	firstName: "Jack",
	lastName: "Mustard",
	color: "yellow",
	description: "He is a military man both dignified and dangerous",
	age: 55,
	image: "assets/mustard.png",
	occupation: "Colonel"
};

const mrsWhite = {
	firstName: "Mrs",
	lastName: "White",
	color: "white",
	description: "She is a frazzled servant",
	age: 65,
	image: "assets/white.png",
	occupation: "Housekeeper"
};

// OBJECTS FOR ALL THE WEAPONS
const rope = {
	name: "rope",
	weight: 10
};

const knife = {
	name: "knife",
	weight: 4
};

const candlestick = {
	name: "candlestick",
	weight: 13
}

const dumbbell = {
	name: "dumbbell",
	weight: 35
};

const poison = {
	name: "poison",
	weight: 2
};

const axe = {
	name: "axe",
	weight: 11
}

const bat = {
	name: "bat",
	weight: 6
};

const trophy = {
	name: "trophy",
	weight: 7
};

const pistol = {
	name: "pistol",
	weight: 9
};

// ARRAYS FOR SUSPECTS, WEAPONS AND ROOMS
const suspects = [
	mrGreen,
	mrsWhite,
	professorPlum,
	missScarlet,
	mrsPeacock,
	colonelMustard
];
console.log(suspects);

const weapons = [
	rope,
	knife,
	candlestick,
	dumbbell,
	poison,
	axe,
	bat,
	trophy,
	pistol,
];
console.log(weapons);

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
	"Living-room",
	"Observatory",
	"Theater",
	"Guest House",
	"Patio"
];
console.log(rooms);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT PASSES IN TO THE FUNCTION.
const randomSelector = array => {
	return array[Math.floor(Math.random() * array.length)]
};

// AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
	killer: "null",
	weapon: "null",
	room: "null"
};

// KILLER CARD
const pickKiller = () => {
	mystery.killer = randomSelector(suspects);
	// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
	document.getElementById("killerCard").style.background = mystery.killer.color;
	document.getElementById("killerName").innerHTML = `${mystery.killer.firstName} " " ${mystery.killer.lastName}`;
	document.getElementById("killerAge").innerHTML = `${mystery.killer.age} years old`;
	document.getElementById("killerOccupation").innerHTML = mystery.killer.occupation;
	document.getElementById("killerImage").src = mystery.killer.image;
	document.getElementById("killerDescription").innerHTML = mystery.killer.description;
};
document.getElementById("killerCard").onclick = pickKiller;

//WEAPON CARD
const pickWeapon = () => {
	mystery.weapon = randomSelector(weapons);
	document.getElementById("weaponCard").style.background = mystery.weapon.color;
	document.getElementById("weaponName").innerHTML = mystery.weapon.name;
	document.getElementById("weaponWeight").innerHTML = `${mystery.weapon.weight} kg`;
};
document.getElementById("weaponCard").onclick = pickWeapon;

//ROOM CARD
const pickRoom = () => {
	mystery.room = randomSelector(rooms);
	document.getElementById("roomCard").innerHTML = `Room: ${mystery.room}`;
};
document.getElementById("roomCard").onclick = pickRoom;

//REVEAL THE MISTERY
const theMystery = document.getElementById("mystery");

const revealMystery = () => {
	theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstname} ${mystery.killer.lastName} in the ${mystery.rooms} with a ${mystery.weapon.name}.`
};
document.getElementById("revealButton").onclick = revealMystery;