///////////////////////////// *** CLUEDO *** /////////////////////////////

// SUSPECTS:

// *** 1. Mr Green
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  nickName: "Mr Green",
  color: "#9ACD32",
  description: "has a lot of connections",
  age: 45,
  image: "killers/green.png",
  occupation: "Entrepreneur",
  favouriteWeaponId: "bat", //exactly the same as weapon name, e.g. 'name: "bat",'
  heading: "black",
};
// *** 2. Professor Plum
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  nickName: "Professor Plum",
  color: "#9370DB",
  description: "is widely seen as the intellectual",
  age: 36,
  image: "killers/plum.png",
  occupation: "Professor",
  favouriteWeaponId: "trophy",
  heading: "black",
};
// *** 3. Miss Scarlet
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  nickName: "Miss Scarlet",
  color: "#FF4500",
  description: "is young, cunning, and highly attractive",
  age: 25,
  image: "killers/scarlet.png",
  occupation: "Actress",
  favouriteWeaponId: "pistol",
  heading: "black",
};
// *** 4. Mrs Peacock
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  nickName: "Mrs Peacock",
  color: "#4169E1",
  description: "maintains her dignity in almost all cases",
  age: 32,
  image: "killers/peacock.png",
  occupation: "Socialite",
  favouriteWeaponId: "knife",
  heading: "black",
};
// *** 5. Colonel Mustard
const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  nickName: "Colonel Mustard",
  color: "#FFD700",
  description: "is both dignified and dangerous",
  age: 55,
  image: "killers/mustard.png",
  occupation: "Colonel",
  favouriteWeaponId: "candlestick",
  heading: "black",
};
// *** 6. Mrs White
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  nickName: "Mrs White",
  color: "#FFFAF0",
  description: "is a frazzled servant",
  age: 67,
  image: "killers/white.png",
  occupation: "Housekeeper",
  favouriteWeaponId: "poison",
  heading: "black",
};

////////////////////////////////////////////////////////////////////////////////////////

// WEAPONS:

// *** 1. rope
const rope = {
  name: "rope",
  weight: 10,
  place: "theater",
  image: "weapons/rope.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 2. knife
const knife = {
  name: "knife",
  weight: 2,
  place: "kitchen",
  image: "weapons/knife.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 3. candlestick
const candlestick = {
  name: "candlestick",
  weight: 4,
  place: "ballroom",
  image: "weapons/candlestick.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 4. dumbbell
const dumbbel = {
  name: "dumbbell",
  weight: 7,
  place: "spa",
  image: "weapons/dumbbell.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 5. poison
const poison = {
  name: "poison",
  weight: 1,
  place: "lounge",
  image: "weapons/poison.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 6. axe
const axe = {
  name: "axe",
  weight: 5,
  place: "conservatory",
  image: "weapons/axe.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 7. bat
const bat = {
  name: "bat",
  weight: 6,
  place: "hall",
  image: "weapons/bat.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 8. trophy
const trophy = {
  name: "trophy",
  weight: 8,
  place: "library",
  image: "weapons/trophy.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 9. pistol
const pistol = {
  name: "pistol",
  weight: 3,
  place: "study",
  image: "weapons/pistol.png",
  color: "#F5F5F5",
  heading: "black",
};

////////////////////////////////////////////////////////////////////////////////////////

// ROOMS:

// *** 1. Dining Room
const diningRoom = {
  name: "dining Room",
  location: "East Wing",
  id: "dining",
  image: "rooms/dining-room.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 2. Conservatory
const conservatory = {
  name: "conservatory",
  location: "East Garden",
  id: "conservatory",
  image: "rooms/conservatory.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 3. Kitchen
const kitchen = {
  name: "kitchen",
  location: "South/East Wing",
  id: "kitchen",
  image: "rooms/kitchen.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 4. Study
const study = {
  name: "study",
  location: "North/West Wing",
  id: "study",
  image: "rooms/study.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 5. Library
const library = {
  name: "library",
  location: "West Wing",
  id: "library",
  image: "rooms/library.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 6. Billiard Room
const billiardRoom = {
  name: "billiard room",
  location: "West/South Wing",
  id: "billiard",
  image: "rooms/billiard-room.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 7. Lounge
const lounge = {
  name: "lounge",
  location: "North Wing",
  id: "lounge",
  image: "rooms/lounge.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 8. Ballroom
const ballRoom = {
  name: "ballroom",
  location: "South Wing",
  id: "ballroom",
  image: "rooms/ballroom.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 9. Hall
const hall = {
  name: "hall",
  location: "East/West Wing",
  id: "hall",
  image: "rooms/hall.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 10. Spa
const spa = {
  name: "spa",
  location: "East/North Wing",
  id: "spa",
  image: "rooms/spa.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 11. Living Room
const livingRoom = {
  name: "living Room",
  location: "South/West Wing",
  id: "livingRoom",
  image: "rooms/living-room.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 12. Observatory
const observatory = {
  name: "observatory",
  location: "North Garden",
  id: "observatory",
  image: "rooms/observatory.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 13. Theater
const theater = {
  name: "theater",
  location: "South/East Wing",
  id: "theater",
  image: "rooms/theater.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 14. Guest House
const guestHouse = {
  name: "guest House",
  location: "South Garden",
  id: "guestHouse",
  image: "rooms/guest-house.png",
  color: "#F5F5F5",
  heading: "black",
};
// *** 15. Patio
const patio = {
  name: "patio",
  location: "West/East Wing",
  id: "patio",
  image: "rooms/patio.png",
  color: "#F5F5F5",
  heading: "black",
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
  theater,
  patio,
];

////////////////////////////////////////////////////////////////////////////////////////

// Mystery object
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

////////////////////////////////////////////////////////////////////////////////////////

// Random selector (((if not using the mostLikelyRandomSelector)))
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

////////////////////////////////////////////////////////////////////////////////////////

// *** tryed to solve and undertand this problem in sandbox:
//https://codesandbox.io/s/random-pet-with-favourite-pet-u11le *** WITH COMMENTS!

// *** Most-likely machine ***
const mostLikelyRandomSelector = (items, favouriteItem) => {
  // For each favouriteItem there will be space for, in this case, 7 more of them in an array. E.g. "7 knifes" or "7 kitchens".
  const favouriteItemsDuplicated = new Array(7).fill(favouriteItem);

  // (...spread) Takes the array and spreads the items out.
  // E.g. taking out all your nested individual russian dolls and lay them out in its own individual pieces.
  // Explains Spread ---> https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
  // Merging arrays. RandomArray = random Array + favouriteItemsDuplicated (e.g all weapons + 7 knifes):
  const randomArray = [...items, ...favouriteItemsDuplicated];

  // Taking out a random index from the randomArray (items + favouriteItemsDuplicated)
  const randomIndex = Math.floor(Math.random() * randomArray.length);

  // Returning the randomIndex ---> [] from the randomArray
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

    // *** changing card info ***

    // card background color
    document.getElementById("killerCard").style.background =
      mystery.killer.color;
    // heading background color
    document.getElementById("cardHeadingKiller").style.background =
      mystery.killer.heading;
    // killer name
    document.getElementById(
      "killerName"
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
    // killer occupation
    document.getElementById(
      "killerOccupation"
    ).innerHTML = `${mystery.killer.occupation}`;
    //killer image
    document.getElementById("killerImage").src = `${mystery.killer.image}`;

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

      // *** changing card info ***

      // card background color
      document.getElementById("weaponCard").style.background =
        mystery.weapon.color;
      // heading background color
      document.getElementById("cardHeadingWeapon").style.background =
        mystery.weapon.heading;
      // weapon name
      document.getElementById(
        "weaponName"
      ).innerHTML = `${mystery.weapon.name}`;
      // weapon weight
      document.getElementById(
        "weaponWeight"
      ).innerHTML = `${mystery.weapon.weight} of weight`;
      // weapon image
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
    const weaponPlace = rooms.find(
      // rooms had uppercase from the beginning. Keeping this "toLowerCace()" if needing it:
      (room) => room.name.toLowerCase() === mystery.weapon.place
    );

    // time delay starts
    setTimeout(() => {
      // "most likely" random weapon selector
      mystery.room = mostLikelyRandomSelector(rooms, weaponPlace);

      // *** changing card info ***

      // card background color
      document.getElementById("roomCard").style.background = mystery.room.color;
      // heading background color
      document.getElementById("cardHeadingRoom").style.background =
        mystery.room.heading;
      // room name
      document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
      // room location
      document.getElementById(
        "roomLocation"
      ).innerHTML = `${mystery.room.location}`;
      // room image
      document.getElementById("roomImage").src = `${mystery.room.image}`;

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
    document.getElementById("mystery").innerHTML =
      "Hey, you have to select a killer...";
  } else if (mystery.weapon === null) {
    document.getElementById("mystery").innerHTML = "Select a weapon!";
  } else if (mystery.room === null) {
    document.getElementById("mystery").innerHTML = "Select a room!";
  } else {
    // "he" or "she"
    if (
      mystery.killer.nickName === "Mr Green" ||
      mystery.killer.nickName === "Professor Plum" ||
      mystery.killer.nickName === "Colonel Mustard"
    ) {
      document.getElementById(
        "mystery"
      ).innerHTML = `The murder was committed by the ${mystery.killer.age} years old ${mystery.killer.firstName} ${mystery.killer.lastName} who ${mystery.killer.description}. ${mystery.killer.nickName}'s favourite weapon is the ${mystery.killer.favouriteWeaponId}. ${mystery.killer.lastName} used the ${mystery.weapon.name} to kill the victim with in the ${mystery.room.name}. He found the ${mystery.weapon.name} in the ${mystery.weapon.place}.`;
    } else {
      document.getElementById(
        "mystery"
      ).innerHTML = `The murder was committed by the ${mystery.killer.age} years old ${mystery.killer.firstName} ${mystery.killer.lastName} who ${mystery.killer.description}. ${mystery.killer.nickName}'s favourite weapon is the ${mystery.killer.favouriteWeaponId}. ${mystery.killer.lastName} used the ${mystery.weapon.name} to kill the victim with in the ${mystery.room.name}. She found the ${mystery.weapon.name} in the ${mystery.weapon.place}.`;
    }
  }
  //shuffleFavouriteWeapon(); in reaveal button instead!
};
