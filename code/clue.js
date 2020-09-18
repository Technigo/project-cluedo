///////////////////////////// *** CLUEDO *** /////////////////////////////

// SUSPECTS:

// *** 1. Mr Green
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#7FFF00",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeaponId: "bat", //exactly the same as weapon name, e.g. 'name: "bat",'
};
// *** 2. Professor Plum
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeaponId: "trophy",
};
// *** 3. Miss Scarlet
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress",
  favouriteWeaponId: "pistol",
};
// *** 4. Mrs Peacock
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Maintains her dignity in almost all cases",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite",
  favouriteWeaponId: "knife",
};
// *** 5. Colonel Mustard
const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Both dignified and dangerous",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeaponId: "candlestick",
};
// *** 6. Mrs White
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "A frazzled servant",
  age: 67,
  image: "assets/white.png",
  occupation: "Housekeeper",
  favouriteWeaponId: "poison",
};

////////////////////////////////////////////////////////////////////////////////////////

// WEAPONS:

// *** 1. rope
const rope = {
  name: "rope",
  weight: 10,
  place: "Theater",
  image: "weapons/rope.jpg",
};
// *** 2. knife
const knife = {
  name: "knife",
  weight: 2,
  place: "kitchen",
  image: "weapons/knife.jpg",
};
// *** 3. candlestick
const candlestick = {
  name: "candlestick",
  weight: 4,
  place: "Ballroom",
  image: "weapons/candlestick.jpg",
};
// *** 4. dumbbel
const dumbbel = {
  name: "dumbbel",
  weight: 7,
  place: "Spa",
  image: "weapons/dumbbel.jpg",
};
// *** 5. poison
const poison = {
  name: "poison",
  weight: 1,
  place: "Lounge",
  image: "weapons/poison.jpg",
};
// *** 6. axe
const axe = {
  name: "axe",
  weight: 5,
  place: "Conservatory",
  image: "weapons/axe.jpg",
};
// *** 7. bat
const bat = {
  name: "bat",
  weight: 6,
  place: "Hall",
  image: "weapons/bat.jpg",
};
// *** 8. trophy
const trophy = {
  name: "trophy",
  weight: 8,
  place: "Library",
  image: "weapons/trophy.jpg",
};
// *** 9. pistol
const pistol = {
  name: "pistol",
  weight: 3,
  place: "Study",
  image: "weapons/pistol.jpg",
};

////////////////////////////////////////////////////////////////////////////////////////

// ARRAYS:

// suspects array
const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite,
];

// weapons array
const weapons = [
  rope,
  knife,
  candlestick,
  dumbbel,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

// rooms array
const rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

// Mystery object
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

////////////////////////////////////////////////////////////////////////////////////////

// Random selector
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

////////////////////////////////////////////////////////////////////////////////////////

// *** tryed to solve and undertand this problem in sandbox:
//https://codesandbox.io/s/random-pet-with-favourite-pet-u11le *** WITH COMMENTS!

// *** Most-likely machine ***
const mostLikelyRandomSelector = (items, favouriteItem) => {
  // For each favouriteItem there will be space for 5 more of them in an array. E.g. "5 knifes".
  const favouriteItemsDuplicated = new Array(5).fill(favouriteItem);

  // (...spread) Takes the array and spreads the items out.
  // E.g. taking out all your nested individual russian dolls and lay them out in its own individual pieces.
  // Explains Spread ---> https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
  // Merging arrays. RandomArray = random Array + favouriteItemsDuplicated (e.g all weapons + 5 knifes)
  const randomArray = [...items, ...favouriteItemsDuplicated];

  const randomIndex = Math.floor(Math.random() * randomArray.length);
  console.log(randomArray);
  return randomArray[randomIndex];
};

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "KILLER CARD" ***

const pickKiller = () => {
  // flips card
  document.getElementById("killerCard").classList.add("flip");

  // time delay starts
  setTimeout(() => {
    // random killer selector
    mystery.killer = randomSelector(suspects);

    // changing card info
    document.getElementById("killerCard").style.background =
      mystery.killer.color;
    document.getElementById(
      "killerName"
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
    document.getElementById(
      "killerAge"
    ).innerHTML = `${mystery.killer.age} yaers`;
    document.getElementById(
      "killerOccupation"
    ).innerHTML = `${mystery.killer.occupation}`;
    document.getElementById("killerImage").src = `${mystery.killer.image}`;
    document.getElementById(
      "killerDescription"
    ).innerHTML = `${mystery.killer.description}`;
    document.getElementById(
      "favouriteWeapon"
    ).innerHTML = `Favourite weapon:<br>${mystery.killer.favouriteWeaponId}`;

    // time delay millisecond
  }, 300);
};

document.getElementById("killerCard").addEventListener("click", pickKiller);

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "WEAPON CARD" ***

const pickWeapon = () => {
  // validating killer-card
  if (mystery.killer) {
    // flips card
    document.getElementById("weaponCard").classList.add("flip");

    // finding the weapon object with the killers favourite weapon id
    const favouriteWeapon = weapons.find(
      (weapon) => weapon.name === mystery.killer.favouriteWeaponId
    );

    // time delay starts
    setTimeout(() => {
      // "most likely" random weapon selector
      mystery.weapon = mostLikelyRandomSelector(weapons, favouriteWeapon);

      // changing card info
      document.getElementById("weaponCard");
      document.getElementById(
        "weaponName"
      ).innerHTML = `${mystery.weapon.name}`;
      document.getElementById(
        "weaponWeight"
      ).innerHTML = `${mystery.weapon.weight} of weight`;
      document.getElementById("weaponImage").src = `${mystery.weapon.image}`;

      // time delay millisecond
    }, 300);
  } /* else {
    document.getElementById("mystery").innerHTML = "Select a killer card!";
  } */
};

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "ROOM CARD" ***

const pickRoom = () => {
  // validating weapon-card
  if (mystery.weapon) {
    // flips card
    document.getElementById("roomCard").classList.add("flip");

    // finding the weapons place
    const weaponPlace = mystery.weapon.place;

    // time delay starts
    setTimeout(() => {
      // "most likely" random weapon selector
      mystery.room = mostLikelyRandomSelector(rooms, weaponPlace);
      // random room selector
      // mystery.room = randomSelector(rooms);

      // changing card info
      document.getElementById("roomCard");
      document.getElementById("roomName").innerHTML = `${mystery.room}`;

      console.log(mystery.room);

      // time delay millisecond
    }, 300);
  } /* else {
    document.getElementById("mystery").innerHTML = "Select a weapon card!";
  } */
};

document.getElementById("roomCard").addEventListener("click", pickRoom);

////////////////////////////////////////////////////////////////////////////////////////

// *** Favourite weapon ***

/*
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).name;
  });
};
*/

////////////////////////////////////////////////////////////////////////////////////////

// *** Reveal Mystery ***

const revealMystery = () => {
  if (mystery.killer === null) {
    document.getElementById("mystery").innerHTML = "Select a killer";
  } else if (mystery.weapon === null) {
    document.getElementById("mystery").innerHTML = "Select a weapon";
  } else if (mystery.room === null) {
    document.getElementById("mystery").innerHTML = "Select a room";
  } else {
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}  who used the ${mystery.weapon.name} to kill the victim with in the ${mystery.room}.`;
  }
  //shuffleFavouriteWeapon(); in reaveal button instead!
};
