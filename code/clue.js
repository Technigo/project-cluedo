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
  description: "Values knowledge over looks",
  age: 64,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Has lips as red as roses",
  age: 32,
  image: "assets/scarlet.png",
  occupation: "Florist"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She brings her binoculars with her everywhere",
  age: 40,
  image: "assets/peacock.png",
  occupation: "Ornithologist"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Goes to a barber every week to trim his beard",
  age: 71,
  image: "assets/mustard.png",
  occupation: "Condiment expert"
};

const mrsWhite = {
  firstName: "Skyler",
  lastName: "White",
  color: "white",
  description: "Has at least one coffee stain on her white blouse at all times",
  age: 45,
  image: "assets/white.png",
  occupation: "Accountant"
};

const rope = {
  name: "rope",
  weight: 10
};

const knife = {
  name: "knife",
  weight: 5
};

const candlestick = {
  name: "candlestick",
  weight: 15
};

const poison = {
  name: "poison",
  weight: 2
};

const dumbbell = {
  name: "dumbell",
  weight: 25
};

const axe = {
  name: "axe",
  weight: 30
};

const bat = {
  name: "bat",
  weight: 18
};

const trophy = {
  name: "trophy",
  weight: 22
};

const pistol = {
  name: "pistol",
  weight: 6
};

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
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

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
  "Patio"
];

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthsEven = ["04", "06", "09", "11"];
const monthsOdd = ["01", "03", "05", "07", "08", "10", "12"];

const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined,
  date: undefined,
  time: undefined
};

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

//Almost fully understand how this function works, I found it at developer.mozilla,
//By using this function I could make both time, am/pm and date randomised without creating arrays for all of them.
const randomDateSelector = (minValue, maxValue) => {
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

//Function that formats values that are lower than 10. Not sure if I love this soulution, it feels a bit hacky to
//make a number into a string but this souliton was at least 100% made by me, unlike the one above.
const addZero = value => {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
};
// A function that calls the random function and returns either am or pm.
const dayOrNigth = () => {
  const am = "a.m";
  const pm = "p.m";
  let number = randomDateSelector(0, 1);
  if (number === 0) {
    return am;
  } else {
    return pm;
  }
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);

  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;

  const killerImage = document.getElementById("killerImage");
  killerImage.src = mystery.killer.image;
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

const pickDate = () => {
  let year = randomDateSelector(1919, 2019);
  let month = randomSelector(months);
  let day = randomDateSelector(1, month);
  if (month === 29) {
    month = "02";
    day = addZero(day);
  } else if (month % 2 === 0) {
    month = randomSelector(monthsEven);
    day = addZero(day);
  } else {
    month = randomSelector(monthsOdd);
    day = addZero(day);
  }
  let minutes = addZero(randomDateSelector(0, 59));
  let hours = addZero(randomDateSelector(1, 12));
  let amPm = dayOrNigth();

  mystery.date = `${day}/${month}-${year}`;
  mystery.time = `${hours}:${minutes} ${amPm}`;
  document.getElementById("theMurderDate").innerHTML = `Date of the murder:`;
  document.getElementById("date").innerHTML = `${mystery.date}`;
  document.getElementById("theMurderTime").innerHTML = `Time of the murder:`;
  document.getElementById("time").innerHTML = `${mystery.time}`;
};

const revealMystery = mystery => {
  if (
    mystery.killer === undefined ||
    mystery.weapon === undefined ||
    mystery.room === undefined ||
    mystery.date === undefined ||
    mystery.time === undefined
  ) {
    document.getElementById(
      "mystery"
    ).innerHTML = `No mystery is yet to be revealed`;
  } else {
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was comitted by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}. It was comitted ${mystery.date} at ${mystery.time}.`;
  }
};

document.getElementById("roomCard").onclick = pickRoom;
document.getElementById("weaponCard").onclick = pickWeapon;
document.getElementById("killerCard").onclick = pickKiller;
document.getElementById("dateCard").onclick = pickDate;
