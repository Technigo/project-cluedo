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
  favorite: 'dumbBell'
};

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#04b7d3',
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
  occupation: 'Retired project manager',
  favorite: 'candleStick'
};

//CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'a rope',
  weight: 10,
  flexibility: 3,
  color: '#7f4d33',
  id: "rope"
};

const knife = {
  name: 'a knife',
  weight: 1,
  flexibility: 9,
  color: '#2f6a49',
  id: 'knife'
};

const candleStick = {
  name: 'a candle stick',
  weight: 2,
  flexibility: 7,
  color: '#ddafd9',
  id: 'candleStick'
};

const dumbBell = {
  name: 'a dumbbell',
  weight: 20,
  flexibility: 6,
  color: '#9b2c15',
  id: 'dumbBell'
};

const poison = {
  name: 'poison',
  weight: 0,
  flexibility: 10,
  color: '#04b7d3',
  id: 'poison'
};

const axe = {
  name: 'an axe',
  weight: 12,
  flexibility: 3,
  color: '#7b497f',
  id: 'axe'
};

const bat = {
  name: 'a bat',
  weight: 3,
  flexibility: 7,
  color: '#abb782',
  id: 'bat'
};

const trophy = {
  name: 'a trophy',
  weight: 5,
  flexibility: 3,
  color: '#fce853',
  id: 'trophy'
};

const pistol = {
  name: ' a pistol',
  weight: 1,
  flexibility: 9,
  color: '#d1a93c',
  id: 'pistol'
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = "Dining Room";

const conservatory = "Conservatory";

const kitchen = "Kitchen";

const study = "Study";

const library = "Library";

const billiardRoom = "Billiard Room";

const lounge = "Lounge";

const ballRoom = "Ball Room";

const hall = "Hall";

const spa = "Spa";

const livingRoom = "Living Room";

const observatory = "Observatory";

const theater = "Theater";

const guestHouse = "Guest House";

const patio = "Patio";

//CONSOLE LOG TO TEST:
console.log(mrsWhite.description);
console.log(candleStick.flexibility);
console.log(mrsWhite.favorite); //returns undefined

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

//console log the first suspect in the suspects array:
console.log(suspects[0]);
//console log the last room in the rooms array:
console.log(rooms[14]); //How to do it if I dont know how many elements I have in my string?
console.log(rooms.length); //writes 15 in console

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => { //I don't understand this
  return array[Math.floor(Math.random() * array.length)] //What does array.length do here?
}
//console.log(randomSelector(rooms)); //prints random room/suspect/weapon

// CREATE AN OBJECT THAT KEEPS THE MYSTERY. With a killer, a weapon and a room. The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

//Function to shuffle the favourite weapons of the suspects in a randomized way. But how do I use it?
const shuffleWeapons = () => {
  suspects.forEach(suspect => {
    suspect.favorite = randomSelector(weapons).id
    console.log(suspect.favorite);
    //suspect.favorite = weapons[Math.floor(Math.random() * 9)];
    //console.log(suspect.favorite);
  })
}



// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  //randomly select a killer from the suspects. And add that to the mystery object.
  if (!killerIsPicked) {
    document.getElementById('killerLoader').style.visibility='visible' 
    setTimeout(function () {
      document.getElementById('killerLoader').style.visibility='hidden'
      shuffleWeapons();
      mystery.killer = randomSelector(suspects); //mystery.killer selects the property 'killer' in mystery object and sets this equal to a randomly selected suspect. 
      document.getElementById('killerCard').style.background = mystery.killer.color
      document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
      document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
      document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
      document.getElementById('killerWeapon').innerHTML = `Weapon of choice: ${mystery.killer.favorite}`
      document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
      document.getElementById('killerImage').src = `${mystery.killer.image}`
      killerIsPicked = true;
    }, 2500)
  }
};
//Added eventlistener below instead of "onclick" in HTML. Don't know which way is the best way to do it. This only works if the eventlistener is outside of the function. First param: type of event. Second param: the function to call on event.
// document.getElementById('killerCard').addEventListener('click', pickKiller);
//pickKiller();
//console.log(mystery.killer); //Why does this return undefined in the console, but still it changes the first card in the browser and shows all the info about random killer above!?
//console.log(`pickKiller.mystery.killer : ${pickKiller.mystery.killer}`); //Trying what Van did at the lecture, @about 18 min in, but doeasn't work?!?

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
//If pickKiller function is excecuted/card is clicked then do this function pickWeapon:
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
  weaponIsPicked = true
    }, 2500)
  }
  //Add image here for weapon-card later
};
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

//If pickKiller AND pickWeapon function is excecuted/cards are clicked then do this function on the pickroom:
const pickRoom = () => {
  if (killerIsPicked && weaponIsPicked) {
    document.getElementById('roomLoader').style.visibility='visible'
    document.getElementById('revealButton').style.visibility='visible'//Makes the reveal-button visible when the room-card has been clicked.
    setTimeout(function () {
      document.getElementById('roomLoader').style.visibility='hidden'
      mystery.room = randomSelector(rooms);//Randomly select a room from rooms and add it to the mystery object
      document.getElementById('roomName').innerHTML = `${mystery.room}`
      roomIsPicked = true
    }, 2500)
  }
  //Add image here for room-card later
};
document.getElementById('roomCard').addEventListener('click', pickRoom); 


//Typ göra en ny funktion pageReload där jag gör ett if-statement som säger att om revealbutton har innertext play again så onclick så ska page reload ske. Annars...inte?



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = (mystery) => {
  //Invoke when button in html is clicked and show elements from mystery object in text.
  //Put also some kind of if-statement(?) here that conditions this to reveal ONLY if the three cards above has been clicked.
document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} in the ${mystery.room} with ${mystery.weapon.name}` 
document.getElementById('revealButton').innerHTML = `PLAY AGAIN?` //This works to change the text on button. But how do I get the page to reload when clicked again?
//Can I put the function pageReload in this function? No it didn't work.
//pageReload(); This makes the page reload once just after I clicked the Roomcard. Är detta för att villkoret i if-satsen i pageReload är uppfyllt?
}
// document.getElementById('revealButton').addEventListener('click', revealMystery(mystery)); 

//THIS DOESN'T WORK EITHER:
 const playAgain = () => {
   if (document.getElementById('revealButton').innerHtml === 'PLAY AGAIN?') {
//      location.reload();
        //revealButton.onclick === pageReload; 
        revealButton.onclick === location.reload();
    } 
  };
playAgain();
//document.getElementById('revealButton').addEventListener('click', playAgain);
//console.log(playAgain);

// const buttonOnClick = () => {
//  console.log('hej');
//   if (document.getElementById('revealButton').innerHtml === 'REVEAL THE CRIME') {
//     console.log('if-statement');
//     revealMystery(mystery);
//   } else if (document.getElementById('revealButton').innerHtml === `PLAY AGAIN?`) {
//     location.reload();
//   }
// }
// document.getElementById('revealButton').addEventListener('click', (buttonOnClick));
//console.log(revealMystery(mystery)); If I put this console.log here the page reloads repeatedly. Why?

//Denna funkar inte i alla fall härifrån:
//const pageReload = () => {
  //revealButton.onclick = pageReload; //Provar sätta den här.
  //document.getElementById('revealButton').onclick.innerHTML = `PLAY AGAIN?` 
  //const playAgain = Document.getElementById('revealButton').innerHtml
   //if  (document.getElementById('revealButton').innerHtml === `PLAY AGAIN?`) {
   //     revealButton.onclick === location.reload();
  // } else {
 //       revealButton.onclick !== location.reload();
//}
  // pageReload();
 //}
 //console.log(pageReload); this just prints the text-content of the function above in the console. Why?
 //pageReload(); //Om jag har den här så laddar sian om hela tiden från start. Har jag skrivit min funktion fel eller vad?



 
