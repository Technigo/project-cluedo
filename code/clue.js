// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'pistol'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'an academic Romeo, arrogant',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon:'bat'
}

const msScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'Hollywood glamorous, dry, sarcastic, cynical',
  age: 40,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'poison'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'churchgoing wife of a Senator',
  age: 40,
  image: 'assets/peacock.png',
  occupation: 'Housewife',
  favouriteWeapon: 'knife'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'pompous, dense military man, often misinterprets words',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'trophy'
}

const mrsWhite = {
  firstName: 'Rose',
  lastName: 'White',
  color: 'white',
  description: 'pale, morbid, stoic',
  age: 75,
  image: 'assets/white.png',
  occupation: 'Retired',
  favouriteWeapon: 'candlestick'
}



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'brown',
  image:'assets/rope.jpg',
  id: 'rope'
}

const knife = {
  name: 'knife',
  weight: 8,
  color: 'silver',
  image:'assets/knife.jpg',
  id: 'knife'
}

const candleStick = {
  name: 'candlestick',
  weight: 3,
  color: 'white',
  image:'assets/candlestick.jpg',
  id: 'candlestick'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 10,
  color: 'black',
  image:'assets/dumbbell.jpg',
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  weight: 2,
  color: 'blue',
  image:'assets/poison.jpg',
  id: 'poison'
}

const axe = {
  name: 'axe',
  weight: 7,
  color: 'orange',
  image:'assets/axe.jpg',
  id: 'axe'
}

const bat = {
  name: 'bat',
  weight: 5,
  color: 'black',
  image:'assets/bat.jpg',
  id: 'bat'
}

const trophy = {
  name: 'trophy',
  weight: 4,
  color: 'gold',
  image:'assets/trophy.jpg',
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  weight: 4,
  color: 'silver',
  image:'assets/pistol.jpg',
  id: 'pistol'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: 'Dining Room',
  image:'assets/diningroom.jpg'
}

const conservatory = {
  name: 'Conservatory', 
  image:'assets/conservatory.jpg'
}

const kitchen = {
  name: 'Kitchen', 
  image:'assets/kitchen.jpg'
}

const study = {
  name: 'Study',
  image: 'assets/study.jpg'
}

const library = {
  name: 'Library',
  image: 'assets/library.jpg'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiardroom.jpg'
}

const lounge = {
  name: 'Lounge',
  image:'assets/lounge.jpg'
}

const ballroom = {
  name: 'Ballroom',
  image:'assets/ballroom.jpg'
}

const hall = {
  name: 'Hall',
  image:'assets/hall.jpg'
}
 
const spa = {
  name: 'Spa',
  image:'assets/spa.jpg'
}

const livingRoom = {
  name: 'Living Room', 
  image:'assets/livingroom.jpg'
}

const observatory = {
  name: 'Observatory',
  image:'assets/observatory.jpg'
}

 const theater = {
   name: 'Theater',
   image: 'assets/theater.jpg'
 }

 const guestHouse = {
   name: 'Guest House',
   image:'assets/guesthouse.jpg'
 }

 const patio = {
   name: 'Patio',
   image:'assets/patio.jpg'
 }
 

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [mrGreen, professorPlum, msScarlett, mrsPeacock, colonelMustard, mrsWhite


  // ...  and the rest
]

const weapons = [rope, knife, candleStick, dumbbell, poison, axe, bat, trophy, pistol];

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
];


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

const loaderKiller = document.querySelector('.loaderKiller');
const killerCard = document.getElementById('killerCard');
const killerName = document.getElementById('killerName');
const killerImage = document.getElementById('killerImage');
const killerDescription = document.getElementById('killerDescription');
const killerOccupation = document.getElementById('killerOccupation');
const killerAge = document.getElementById('killerAge');

//Function to delay the pickKiller function so the loader can display
const delayPickKiller = () => {
  loaderKiller.style.display = 'block';
  setTimeout(pickKiller, 2000);
}
  killerCard.addEventListener('click', delayPickKiller);

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  loaderKiller.style.display = 'none'
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  killerCard.style.background = mystery.killer.color
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  killerImage.src= mystery.killer.image;
  killerDescription.innerHTML = mystery.killer.description;
  killerOccupation.innerHTML = mystery.killer.occupation;
  killerAge.innerHTML=mystery.killer.age;

 const shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons);
    document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.favouriteWeapon.name}`
    };
     shuffleFavouriteWeapon();
  }

//Function to delay the pickKiller function so the loader can display

const loaderWeapon = document.querySelector('.loaderWeapon');
const weaponCard = document.getElementById('weaponCard');
const weaponName = document.getElementById('weaponName');
const weaponImage = document.getElementById('weaponImage');
const weaponWeight = document.getElementById('weaponWeight');

const delayPickWeapon = () => {
  loaderWeapon.style.display = 'block';
  setTimeout(pickWeapon,2000);
}

weaponCard.addEventListener('click', delayPickWeapon);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  loaderWeapon.style.display = 'none';
  mystery.weapon = randomSelector(weapons);
  weaponCard.style.background = mystery.weapon.color
  weaponName.innerHTML = `${mystery.weapon.name}`
  weaponImage.src= mystery.weapon.image;
  weaponWeight.innerHTML = mystery.weapon.weight;
}

const loaderRoom = document.querySelector('.loaderRoom');
const roomcard = document.getElementById('roomCard');
const roomName = document.getElementById('roomName');
const roomImage = document.getElementById('roomImage');

const delayPickRoom = () => {
  loaderRoom.style.display = 'block';
  setTimeout(pickRoom,2000);
}

roomCard.addEventListener('click', delayPickRoom);

const pickRoom = () => {
  loaderRoom.style.display = 'none';
  mystery.room = randomSelector(rooms);
  roomName.innerHTML = `${mystery.room.name}`
  roomImage.src= mystery.room.image;
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`
}

const revealButton = document.getElementById('reveal');
revealButton.onclick = revealMystery;


