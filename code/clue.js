// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#7FAE79',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: "knife"
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#806E8A',
  description: '',
  age: 60,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: "poison"
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#AE4646',
  description: '',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: "bat"
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#689DAD',
  description: 'Mother of Miss Scarlet',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Lawyer',
  favouriteWeapon: "rope"
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#D4A04C',
  description: '',
  age: 30,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: "trophy"
}

const mrsWhite = {
  firstName: 'Jennie',
  lastName: 'White',
  color: 'white',
  description: '',
  age: 75,
  image: 'assets/white.png',
  occupation: 'retired',
  favouriteWeapon: "candlestick"
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  weight: 10,
  id: 'rope'
}

const knife = {
  name: 'Knife',
  weight: 6,
  id: 'knife'
}

const candlestick = {
  name: 'Candlestick',
  weight: 8,
  id: 'candlestick'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 3,
  id: 'dumbbell'
}

const poison = {
  name: 'Poison',
  weight: 2,
  id: 'poison'
}

const axe = {
  name: 'Axe',
  weight: 8,
  id: 'axe'
}

const bat = {
  name: 'Bat',
  weight: 5,
  id: 'bat'
}

const trophy = {
  name: 'Trophy',
  weight: 5,
  id: 'trophy'
}

const pistol = {
  name: 'Pistol',
  weight: 4,
  id: 'pistol'
}


//Grouped into arrays

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]

let mystery = {
  killer: 'who',
  weapon: 'what',
  room: 'where'
}

let killerWeapons = Array(8).fill('');
let moreWeapons = []; 

// FUNCTIONS

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


const shuffleFavouriteWeapon = () => {
  suspects.forEach(element => {
    element.favouriteWeapon = randomSelector(weapons)
  });
  
}
  
const showKillerLoader = () => {
  document.getElementById('killerLoader').style.display = 'flex';
  document.getElementById('killerHeadline').style.display = 'none';
  document.getElementById('killerTitle').style.display = 'none';
  document.getElementById('killerContent').style.display = 'none';
  document.getElementById('killerDecoration').style.display = 'flex'
  document.getElementById('killerCard').style.background = 'black'
  document.getElementById('killerDecoration').style.border = '8px solid rgb(129, 164, 175)'
}

const showWeaponLoader = () => {
  document.getElementById('weaponLoader').style.display = 'flex';
  document.getElementById('weaponRoundLoader').classList.add('weapon-loader');
  document.getElementById('weaponSmallLoader').style.borderRight = '5px solid #575A53';
  document.getElementById('weaponLoaderStick').style.backgroundColor = '#575A53';
  document.getElementById('weaponHeadline').style.display = 'none';
  document.getElementById('weaponTitle').style.display = 'none';
  document.getElementById('weaponContent').style.display = 'none';
  document.getElementById('weaponDecoration').style.display = 'flex'
  document.getElementById('weaponCard').style.background = 'black'
  document.getElementById('weaponDecoration').style.border = '8px solid #575A53'
}

const showRoomLoader = () => {
  document.getElementById('roomLoader').style.display = 'flex';
  document.getElementById('roomRoundLoader').classList.add('room-loader');
  document.getElementById('roomSmallLoader').style.borderRight = '5px solid #a8979f';
  document.getElementById('roomLoaderStick').style.backgroundColor = '#a8979f';
  document.getElementById('roomHeadline').style.display = 'none';
  document.getElementById('roomTitle').style.display = 'none';
  document.getElementById('roomContent').style.display = 'none';
  document.getElementById('roomDecoration').style.display = 'flex';
  document.getElementById('roomCard').style.background = 'black';
  document.getElementById('roomDecoration').style.border = '8px solid #a8979f';
}
  
const generateKiller = () => {
  // This will randomly select a killer from the suspects, add that to the mystery object and that killers favourite weapon to the moreWeapons array. 
  mystery.killer = randomSelector(suspects)
  killerWeapons.fill(mystery.killer.favouriteWeapon);
  moreWeapons = weapons.concat(killerWeapons)
 
  // Hides the loader and shows killer title and content 
  document.getElementById('killerLoader').style.display = 'none';
  document.getElementById('killerTitle').style.display = 'block';
  document.getElementById('killerContent').style.display = 'block';

  //Changes the text and image depending on the mystery values
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerAge').innerHTML = 'Age: ' + mystery.killer.age
  document.getElementById('killerOccupation').innerHTML = 'Occupation: ' + mystery.killer.occupation

  //Styles the killer card
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerTitle').style.display = 'block'
  document.getElementById('killerDecoration').style.display = 'block'
  document.getElementById('killerDecoration').style.border = '0px'
  document.getElementsByTagName('img')[0].style.borderRadius = '50%'
  const classKillerContent = document.getElementsByClassName('killer-content')[0];

  //Changes the text color on the killer card, if the background color is white
  if (mystery.killer.color === 'white') {
    classKillerContent.getElementsByTagName('h3')[0].style.color = 'black';
    const killerTagP = classKillerContent.getElementsByTagName('p');
    let i = 0
    for (i=0; i < killerTagP.length; i++) {
      killerTagP[i].style.color = 'black';
    }

  } else {
    //Changes back to white
    classKillerContent.getElementsByTagName('h3')[0].style.color = 'white';
    const killerTagP = classKillerContent.getElementsByTagName('p');
    let i = 0
    for (i=0; i < killerTagP.length; i++) {
      killerTagP[i].style.color = 'white';
    }
  }
}

const generateWeapon = () => {

  // Hides the loader and shows weapon title and content 
  document.getElementById('weaponLoader').style.display = 'none';
  document.getElementById('weaponTitle').style.display = 'block';
  document.getElementById('weaponContent').style.display = 'flex';
  
  //Generates and shows a weapon, but only if the killer deck is picked first
  if (mystery.killer === 'who') {
    document.getElementById('weaponTitle').innerHTML = 'Please pick a killer first';
  } else {
    mystery.weapon = randomSelector(moreWeapons)
    document.getElementById('weaponName').innerHTML = mystery.weapon.name
    document.getElementById('weaponWeight').innerHTML = 'Weight: ' + mystery.weapon.weight
    document.getElementById('weaponCard').style.background = '#575A53'
    document.getElementById('weaponHeadline').style.display = 'none'
    document.getElementById('weaponTitle').innerHTML = 'WEAPON'
    document.getElementById('weaponDecoration').style.display = 'block'
    document.getElementById('weaponDecoration').style.border = '0px'
    document.getElementById('weaponContent').style.justifyContent = 'center'
  }
}

const generateRoom = () => {
  mystery.room = randomSelector(rooms)

  // Hides the loader and shows killer title and content 
  document.getElementById('roomLoader').style.display = 'none';
  document.getElementById('roomTitle').style.display = 'block';
  document.getElementById('roomContent').style.display = 'flex';

  document.getElementById('roomName').innerHTML = mystery.room
  document.getElementById('roomCard').style.background = '#a8979f'
  document.getElementById('roomHeadline').style.display = 'none'
  document.getElementById('roomTitle').style.display = 'block'
  document.getElementById('roomDecoration').style.display = 'block'
  document.getElementById('roomDecoration').style.border = '0px'
  document.getElementById('roomContent').style.justifyContent = 'center'
}

const pickKiller = () => {
  // This function will be invoked when you click on the killer card.

  showKillerLoader();
  setTimeout(generateKiller, 1000);
}

const pickWeapon = () => {
  // This function will be invoked when you click on the killer card.

  showWeaponLoader();
  setTimeout(generateWeapon, 1200);
}

const pickRoom = () => {
  // This function will be invoked when you click on the killer card.

  showRoomLoader();
  setTimeout(generateRoom, 1200);
}



const revealMystery = () => {
  document.getElementById('mystery').style.display = 'flex'
  if (mystery.killer === 'who' || mystery.weapon === 'what' || mystery.room === 'where' )
  {
    document.getElementById('mysteryText').innerHTML = `Please commit the murder by picking a killer, weapon and room first`

  } else {
  document.getElementById('mysteryText').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}, the killers favourite weapon is actually ${mystery.killer.favouriteWeapon.name}`
  }
}

// Executing functions

shuffleFavouriteWeapon();
document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;
document.getElementsByTagName("button")[0].onclick = revealMystery;
