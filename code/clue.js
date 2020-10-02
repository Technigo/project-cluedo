//Variables that are used in the pickKiller etc-functions to be able to just click once on the cards.
let killerIsPicked = false;
let weaponIsPicked = false;
let roomIsPicked = false;

//OBJECTS FOR ALL THE SUSPECTS:
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

//OBJECTS FOR ALL THE WEAPONS:
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
  name: 'a pistol',
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

//GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS:
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

/* THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
This code generates a random index number. And array.length ensures that the number is relevant to the array in question. 
Math.random generates a random number between 0 - 1. If we were to multiply this by 10 then we would get a random number 
between 1 - 10. But by using this code it will multiply that random number by the length of the array. 
And means that the index number will be between 0 - 11 if the array in question has a length of 12. */
const randomSelector = array => { 
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY. With a killer, a weapon and a room. The values will be set later.
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

//Function to change favourite weapons of each person (shuffles the favourite weapons of the suspects in a randomized way)
const shuffleWeapons = () => {
  suspects.forEach(suspect => {
    suspect.favorite = randomSelector(weapons).name 
    /* Van suggested I write: suspect.favorite = randomSelector(weapons)
    This would give me access to the entire weapon object that this suspect prefers, not just the name. 
    And that could come in handy later. But if I change this I get [object, object] instead of a weapon on the card. Why? */
  })
}

/*TASK: Change logic behind generating weapon so it's not completely random anymore and it's more likely to 
draw weapon which is the favourite one of a suspect generated in previous step. 
Do this by creating new array of weapon objects, where favourite weapon object occurs more than one time 
so probability of picking it is higher. */

//Function to increase probability of favourite weapon to be assigned to killer, when weapon-card is clicked:
 const increaseChanceOfFavorite = () => {
   const favWeapon = weapons.find(weapon => weapon.name === mystery.killer.favorite); //Specifies that fawWeapon is the same as 
//The find() method: returns the value of the first element in the provided array that satisfies the provided testing function.
   const favWeaponArray = new Array(7).fill(favWeapon); //Creates a new array with 7 items of favWeapon.
   const calculatedWeapon = [...weapons, ...favWeaponArray]; //Merge arrays using the spread operator to copy over one array into another
  console.log(calculatedWeapon);
   return calculatedWeapon;
 }; 
 
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  if (!killerIsPicked) {
    document.getElementById('killerLoader').style.visibility='visible' 
    setTimeout(function () {
      document.getElementById('killerLoader').style.visibility='hidden'
      //Calls shuffleWeapons-function above and makes favorite weapon a specific random weapon:
      shuffleWeapons();
      //randomly select a killer from the suspects. And add that to the mystery object.
      mystery.killer = randomSelector(suspects); 
      //mystery.killer selects the property 'killer' in mystery object and sets this equal to a randomly selected suspect. 
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
/* Added eventlistener below instead of "onclick" in HTML.
This only works if the eventlistener is outside of the function. 
First param: type of event. Second param: the function to call on event. */
document.getElementById('killerCard').addEventListener('click', pickKiller);

//If pickKiller function is excecuted/card is clicked then excecute this function:
const pickWeapon = () => {
  if (killerIsPicked && !weaponIsPicked) {
    document.getElementById('weaponLoader').style.visibility='visible'
    setTimeout(function () {
      document.getElementById('weaponLoader').style.visibility='hidden'
      /* calling increaseChanceOfFavorite-function: 
      This increases chance for weapon to be the weapon assigned to the killer after killer-card is clicked. */
      let chanceFavWeapon = increaseChanceOfFavorite();
      mystery.weapon = randomSelector(chanceFavWeapon); 
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

/* If pickKiller AND pickWeapon-function is excecuted AND if room isn't picked, then excecute this function
 on the pickroom: */
const pickRoom = () => {
  if (killerIsPicked && weaponIsPicked && !roomIsPicked) {
    document.getElementById('roomLoader').style.visibility='visible'
    document.getElementById('revealButton').style.visibility='visible'//Makes the reveal-button visible.
    setTimeout(function () {
      document.getElementById('roomLoader').style.visibility='hidden'
      mystery.room = randomSelector(rooms);//Randomly select a room from rooms and add it to the mystery object.
      document.getElementById('roomName').innerHTML = `${mystery.room.name}`
      document.getElementById('roomImage').src = `${mystery.room.image}`
      roomIsPicked = true
    }, 2500)
  }
};
document.getElementById('roomCard').addEventListener('click', pickRoom); 

//Function to be invoked when you click the REVEAL MYSTERY-button: 
const revealMystery = (mystery) => {
  // If the text is "PLAY AGAIN?" then the mystery has already been revealed
  if (document.getElementById('revealButton').innerText === `PLAY AGAIN?` ) {
    location.reload(); //...and page reloads
  } else {
    // The text has not been changed yet, so we are revealing the mystery:
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} in the ${mystery.room.name} with ${mystery.weapon.name}` 
    // Update the button text to reflect the action that can now be performed: 
    document.getElementById('revealButton').innerText = `PLAY AGAIN?` //change the text on button.
  }
};



 
