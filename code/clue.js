// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "axe"
}

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He would be the smartest man on the planet if he wasn't so scatterbrained.",
  age: 50,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "rope"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Shea always has to be the center of attention.",
  age: 24,
  image: "assets/scarlet.png",
  occupation: "Actress",
  favouriteWeapon: "candlestick"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She's proper and has excellent manners",
  age: 60,
  image: "assets/peacock.png",
  occupation: "None",
  favouriteWeapon: "dumbbell"
}

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He loves to challenge people to a duel if they cross him, and he isn't afraid to speak his mind.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "knife"
}

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She owns nothing to her name and takes her domestic duties very seriously.",
  age: 55,
  image: "assets/white.png",
  occupation: "Maid",
  favouriteWeapon: "poison"
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  color: "beige",
  weight: 10,
  image: "assets/rope.svg",
  id: "rope"
}

const knife = {
  name: "knife",
  color: "grey",
  weight: 11,
  image: "assets/knife.svg",
  id: "knife"
}

const candlestick = {
  name: "candlestick",
  weight: 12,
  image: "assets/candlestick.svg",
  id: "candlestick"
}

const dumbbell = {
  name: "dumbbell",
  weight: 13,
  image: "assets/gym.svg",
  id: "dumbbell"
}

const poison = {
  name: "poison",
  weight: 14,
  image: "assets/potion.svg",
  id: "poison"
}

const axe = {
  name: "axe",
  weight: 15,
  image: "assets/axe.svg",
  id: "axe"
}

const bat = {
  name: "bat",
  weight: 16,
  image: "assets/baseballBat.svg"
}

const trophy = {
  name: "trophy",
  weight: 17,
  image: "assets/award.svg"
}

const pistol = {
  name: "pistol",
  weight: 18,
  image: "assets/gun.svg"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: "Dining Room",
  image: "assets/diningRoom.svg"
}

const conservatory = {
  name: "Conservatory",
  image: "assets/door.svg"
}

const kitchen = {
  name: "Kitchen",
  image: "assets/kitchen.svg"
}

const study = {
  name: "Study",
  image: "assets/work.svg"
}

const library = {
  name: "Library",
  image: "assets/library.svg"
}

const billiardRoom = {
  name: "Billiard Room",
  image: "assets/snooker.svg"
}

const lounge = {
  name: "Lounge",
  image: "assets/lounge.svg"
}

const ballroom = {
  name: "Ballroom",
  image: "assets/chandelier.svg"
}

const hall = {
  name: "Hall",
  image: "assets/hanger.svg"
}

const spa = {
  name: "Spa",
  image: "assets/beauty.svg"
}

const livingRoom = {
  name: "Living Room",
  image: "assets/lamp.svg"
}

const observatory = {
  name: "Observatory",
  image: "assets/telescope.svg"
} 

const theater = {
  name: "Theater",
  image: "assets/doorStar.svg"
}

const guestHouse = {
  name: "Guest House",
  image: "assets/realEstate.svg"
}

const patio = {
  name: "Patio",
  image: "assets/outdoor.svg"
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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
  diningRoom, 
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


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined 
}

// This function will be invoked when you click on the killer card.
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


const pickKiller = () => {
  //removes loading animation 
  document.getElementById("loadingAnimation1").style.display = "none";
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerImage').src = `${mystery.killer.image}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('favouriteWeapon').innerHTML = `Favourite Weapon: ${mystery.killer.favouriteWeapon}`;
}

//This function will be invoked when you click on the weapon card.

const pickWeapon = () => {
  document.getElementById("loadingAnimation2").style.display = "none";

  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponWeight").innerHTML = `${mystery.weapon.weight}`;
  document.getElementById("weaponImage").src = `${mystery.weapon.image}`;
}

//This function will be invoked when you click on the room card.

const pickRoom = () => {
  document.getElementById("loadingAnimation3").style.display = "none";

  mystery.room = randomSelector(rooms)

  document.getElementById("roomCard").style.background = mystery.room.color;
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
  document.getElementById('roomImage').src = `${mystery.room.image}`;
}

//animation i en separat funktion.
/*document.getElementById("loadingAnimation1").addEventListener("click", function() {
  document.getElementById("loadingAnimation1").style.display = "none";
  pickKiller()
}) */

//test för shufflefavoutiteWeapon
/*const shuffleFavouriteWeapon = () => {
  suspects.forEach((favouriteWeapon) => {
    suspects.favouriteWeapon = randomSelector(suspects)
  })
}*/

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const answerMystery = document.getElementById("mysteryAnswer")
  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
      answerMystery.innerHTML = ("Please choose a killer, a weapon and a room");
    } else {
      answerMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`);
      document.getElementById("revealButton").style.display = "none";
      document.getElementById("newGameButton").style.display = "block";
    }
  }
 

