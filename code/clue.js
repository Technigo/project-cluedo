let killerIsPicked = false;
let weaponIsPicked = false;
let roomIsPicked = false;


// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS:
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#2f6a49',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favorite: 'knife'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#7b497f',
  description: 'He is a bit whimsical and odd.',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favorite: 'axe' 
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#9b2c15',
  description: 'She is strong and mysterious',
  age: 41,
  image: 'assets/scarlet.png',
  occupation: 'Superhero',
  favorite: 'dumbbell'
};

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#156172',
  description: 'A real socialite.',
  age: 52,
  image: 'assets/peacock.png',
  occupation: 'Headhunter',
  favorite: 'poison'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#d1a93c',
  description: 'He is fascinated by weapons.',
  age: 66,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favorite: 'pistol'
};

const mrsWhite = {
  firstName: 'Lily',
  lastName: 'White',
  color: '#ddafd9',
  description: 'She is quite strict and knows how to get things done.',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Retired',
  favorite: 'candle stick'
};

//CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'a rope',
  weight: 10,
  flexibility: 3,
  color: '#7f4d33',
  id: "rope",
  image: 'assets/ropes1.jpg'
};

const knife = {
  name: 'a knife',
  weight: 1,
  flexibility: 9,
  color: '#2f6a49',
  id: 'knife',
  image: 'assets/knife.jpg'
};

const candleStick = {
  name: 'a candle stick',
  weight: 2,
  flexibility: 7,
  color: '#ddafd9',
  id: 'candleStick',
  image: 'assets/candlestick.jpg'
};

const dumbBell = {
  name: 'a dumbbell',
  weight: 20,
  flexibility: 6,
  color: '#9b2c15',
  id: 'dumbBell',
  image: 'assets/dumbbell.jpg'
};

const poison = {
  name: 'poison',
  weight: 0,
  flexibility: 10,
  color: '#156172',
  id: 'poison',
  image: 'assets/poison.jpg'
};

const axe = {
  name: 'an axe',
  weight: 12,
  flexibility: 3,
  color: '#7b497f',
  id: 'axe',
  image: 'assets/axe.jpg'
};

const bat = {
  name: 'a bat',
  weight: 3,
  flexibility: 7,
  color: '#abb782',
  id: 'bat',
  image: 'assets/bat.jpg'
};

const trophy = {
  name: 'a trophy',
  weight: 5,
  flexibility: 3,
  color: '#fce853',
  id: 'trophy',
  image: 'assets/trophy1.jpg'
};

const pistol = {
  name: ' a pistol',
  weight: 1,
  flexibility: 9,
  color: '#d1a93c',
  id: 'pistol',
  image: 'assets/pistol.jpg'
};

// OBJECTS FOR THE ROOMS (BECAUSE THEY HAVE PICTURES)
const diningRoom = {
  name: 'Dining Room',
  image: 'assets/dining.jpg'
};

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.jpg'
};

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.jpg'
};

const study = {
  name: 'Study',
  image: 'assets/study.jpg'
};

const library = {
  name: 'Library',
  image: 'assets/library.jpg'
};

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiard.jpg'
};

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.jpg'
};

const ballRoom = {
  name: 'Ball Room',
  image: 'assets/ballroom.jpg'
};

const hall = {
  name: 'Hall',
  image: 'assets/hall.jpg'
};

const spa = {
  name: 'Spa',
  image: 'assets/spa.jpg'
};

const livingRoom = {
  name: 'Living Room',
  image: 'assets/livingroom.jpg'
};

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.jpg'
};

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg'
};

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guesthouse.jpg'
};

const patio = {
  name: 'Patio',
  image: 'assets/patio.jpg'
};

// STEP 2. NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
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
const randomSelector = array => { //I don't understand this
  return array[Math.floor(Math.random() * array.length)] //What does array.length do here?
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY. With a killer, a weapon and a room. The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

//Function to shuffle the favourite weapons of the suspects in a randomized way.
const shuffleWeapons = () => {
  suspects.forEach(suspect => {
    suspect.favorite = randomSelector(weapons).name
  })
}

//Function to increase probability of favourite weapon to be assigned to killer:
//THIS FUNCTION DOESN'T WORK???
// const increaseChanceOfFavorite = () => {
//   const favWeapon = weapons.find(weapon => weapon.id === mystery.killer.favorite);
//   const favWeaponArray = new Array(7).fill(favWeapon);
//   console.log(favWeaponArray)
//   const calculatedWeapon = [...weapons, ...favWeaponArray];
//  return calculatedWeapon;
// }; 

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  if (!killerIsPicked) {
    document.getElementById('killerLoader').style.visibility='visible' 
    setTimeout(function () {
      document.getElementById('killerLoader').style.visibility='hidden'
      //excecutes shuffleWeapons-function above and makes favorite weapon random:
      shuffleWeapons();
      //randomly select a killer from the suspects. And add that to the mystery object.
      mystery.killer = randomSelector(suspects); //mystery.killer selects the property 'killer' in mystery object and sets this equal to a randomly selected suspect. 
      document.getElementById('killerCard').style.background = mystery.killer.color
      document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
      document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
      document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
      document.getElementById('killerWeapon').innerHTML = `Favorite weapon: ${mystery.killer.favorite}`
      document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
      document.getElementById('killerImage').src = `${mystery.killer.image}`
      killerIsPicked = true;
    }, 2500)
  }
};
//Added eventlistener below instead of "onclick" in HTML. Don't know which way is the best way to do it. This only works if the eventlistener is outside of the function. 
//First param: type of event. Second param: the function to call on event.
document.getElementById('killerCard').addEventListener('click', pickKiller);

//If pickKiller function is excecuted/card is clicked then excecute this function:
const pickWeapon = () => {
  if (killerIsPicked && !weaponIsPicked) {
    document.getElementById('weaponLoader').style.visibility='visible'
    setTimeout(function () {
      document.getElementById('weaponLoader').style.visibility='hidden'
      mystery.weapon = randomSelector(weapons); //Randomly select a weapon from weapons and add it to the mystery object
      document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`
  document.getElementById('weaponFlexibility').innerHTML = `Flexibility: ${mystery.weapon.flexibility}`
  document.getElementById('weaponImage').src = `${mystery.weapon.image}`
  weaponIsPicked = true
    }, 2500)
  }
};
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

//If pickKiller AND pickWeapon function is excecuted/cards are clicked then excecute this function on the pickroom:
const pickRoom = () => {
  if (killerIsPicked && weaponIsPicked) {
    document.getElementById('roomLoader').style.visibility='visible'
    document.getElementById('revealButton').style.visibility='visible'//Makes the reveal-button visible when the room-card has been clicked.
    setTimeout(function () {
      document.getElementById('roomLoader').style.visibility='hidden'
      mystery.room = randomSelector(rooms);//Randomly select a room from rooms and add it to the mystery object
      document.getElementById('roomName').innerHTML = `${mystery.room.name}`
      document.getElementById('roomImage').src = `${mystery.room.image}`
      roomIsPicked = true
    }, 2500)
  }
};
document.getElementById('roomCard').addEventListener('click', pickRoom); 

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 
const revealMystery = (mystery) => {
  //Invoke when button is clicked and show elements from mystery object in text:
document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} in the ${mystery.room.name} with ${mystery.weapon.name}` 
document.getElementById('revealButton').innerHTML = `PLAY AGAIN?` //change the text on button.
}

//BELOW I TRIED TO MAKE A FUNCTION SO THAT THE PAGE RELOADS WHEN 'PLAY AGAIN'-BUTTON IS CLICKED. IT DIDN'T WORK. I wanted to leave this here just to show the code-reviewer what I tried and maybe get pointers on how to achieve this.

//THIS DOESN'T WORK:
//  const playAgain = () => {
//    if (document.getElementById('revealButton').innerHtml === 'PLAY AGAIN?') {
//         //location.reload();
//         revealButton().onclick === pageReload; 
//         //revealButton().onclick === location.reload();
//     } 
//   };
//document.getElementById('revealButton').addEventListener('click', playAgain);

//THIS DOESN'T WORK:
//const pageReload = () => {
  //revealButton.onclick = pageReload; //Trying to put this here.
  //document.getElementById('revealButton').onclick.innerHTML = `PLAY AGAIN?` 
  //const playAgain = Document.getElementById('revealButton').innerHtml
   //if  (document.getElementById('revealButton').innerHtml === `PLAY AGAIN?`) {
   //     revealButton.onclick === location.reload();
  // } else {
 //       revealButton.onclick !== location.reload();
//}
  // pageReload();
 //}
 //pageReload(); //If I put this here, the page reloads directly from start over and over.



 
