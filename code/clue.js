const Marcel = {
  firstName: 'Marcel',
  lastName: 'the Monkey',
  description: 'He was born to steal',
  age: 3,
  image: 'assets/marcel.png',
  occupation: 'Monkey',
  favouriteFood: 'Banana'
};

const Ross = {
  firstName: 'Ross',
  lastName: 'Geller',
  description: 'A palaeontologist working at the Museum of Natural History and in love with Rachel.',
  age: 27,
  image: 'assets/ross.png',
  occupation: 'Palaeontologist',
  favouriteFood: 'Muffin'
};

const Chandler = {
  firstName: 'Chandler',
  lastName: 'Muriel Bing',
  description: 'Making jokes whe he feels himself uncomfortable and loves Monica.',
  age: 27,
  image: 'assets/chandler.png',
  occupation: 'Transponster',
  favouriteFood: 'Pizza'
};

const Monica = {
  firstName: 'Monica',
  lastName: 'Geller',
  description: 'Monica was overweight as a child.',
  age: 26,
  image: 'assets/monica.png',
  occupation: 'Chef',
  favouriteFood: 'Kiwi-lime pie'
};

const Rachel = {
  firstName: 'Rachel',
  lastName: 'Green',
  description: 'A fashion enthusiast and Monica Gellers best friend from childhood.',
  age: 25,
  image: 'assets/rachel.png',
  occupation: 'Waitress',
  favouriteFood: 'Trifle'
};

const Phoebe = {
  firstName: 'Phoebe',
  lastName: 'Buffay',
  description: 'She writes and sings her own strange songs, accompanying herself on the guitar.',
  age: 27,
  image: 'assets/phoebe.png',
  occupation: 'A self-taught musician.',
  favouriteFood: 'Nothing which had a name'
};

const Hamburger = {
  name: 'Hamburger',
  taste: 'Taste: 9',
  image: 'assets/hamburger.jpg'
}

const RachelTrifle = {
  name: "Rachel's Trifle",
  taste: 'Taste: 2',
  image: 'assets/trifle.jpg'
}

const Turkey = {
  name: 'Turkey',
  taste: 'Taste: 10',
  image: 'assets/turkey.jpeg'
}

const RedBagel = {
  name: 'Red Bagel',
  taste: 'Taste: 6',
  image: 'assets/bagel.jpg'
}

const Pizza = {
  name: 'Pizza',
  taste: 'Taste: 7',
  image: 'assets/pizza.png'
}

const Muffin = {
  name: 'Muffin',
  taste: 'Taste: 4',
  image: 'assets/muffin.jpg'
}

const KiwiPie = {
  name: 'Kiwi Pie',
  taste: 'Taste: 3',
  image: 'assets/pie.jpg'
}

const Sandwich = {
  name: 'Sandwich',
  taste:'Taste: 5',
  image: 'assets/sandwich.jpg'
}

const MonicaDiningRoom = {
  name: "Monica's Dining Room",
  image: 'assets/mdr.jpg'
}

const RossApartment = {
  name: "Ross' Apartment",
  image: 'assets/ra.jpg'
}

const ChandlerDiningRoom = {
  name: "Chandler's Dining Room",
  image: 'assets/cdr.jpg'
}

const RachelRoom = {
  name: "Rachel's Room",
  image: 'assets/rbr.jpg'
}

const MonicaRoom = {
  name: "Monica's Room",
  image: 'assets/mbr.png'
}

const MonicaLivingRoom = {
  name: "Monica's Living room",
  image: 'assets/mlr.jpg'
}

const CentralPerk = {
  name: "Central Perk",
  image: 'assets/cp.jpg'
}

const Balcony = {
  name: "the Balcony",
  image: 'assets/balcony.jpg'
}

const Hall = {
  name: "the Hall",
  image: 'assets/stairwell.jpg'
}

const ChandlerLivingRoom = {
  name: "Chandler's Living Room",
  image: 'assets/clr.jpg'
}

const friend = [
  Ross,
  Chandler,
  Monica,
  Rachel,
  Phoebe,
  Marcel
];

const foods = [
  Hamburger,
  RachelTrifle,
  Turkey,
  RedBagel,
  Pizza,
  Muffin,
  KiwiPie,
  Sandwich,
];

const rooms = [
  MonicaDiningRoom,
  RossApartment,
  ChandlerDiningRoom, 
  RachelRoom, 
  MonicaRoom, 
  MonicaLivingRoom, 
  CentralPerk, 
  Balcony, 
  Hall, 
  ChandlerLivingRoom
]

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  friend: undefined,
  foods: undefined,
  rooms: undefined
}

const pickFriends = () => {
  mystery.friends = randomSelector(friend)
  document.getElementById('friendsName').innerHTML = `${mystery.friends.firstName} ${mystery.friends.lastName}`;
  document.getElementById('friendsAge').innerHTML = `${mystery.friends.age}`;
  document.getElementById('friendsOccupation').innerHTML = mystery.friends.occupation;
  document.getElementById('friendsDescription').innerHTML = mystery.friends.description;
  document.getElementById('friendsImage').src = mystery.friends.image
}

document.getElementById('friendsCard').onclick = pickFriends

const pickFoods = () => {
  mystery.foods = randomSelector(foods)
  document.getElementById('foodsName').innerHTML = mystery.foods.name;
  document.getElementById('foodsImage').src = mystery.foods.image
  document.getElementById('foodsTaste').innerHTML = mystery.foods.taste
}

document.getElementById('foodCard').onclick = pickFoods

const pickRooms = () => {
  mystery.rooms = randomSelector(rooms)
  document.getElementById('roomsName').innerHTML = `${mystery.rooms.name}`
  document.getElementById('roomsImage').src = mystery.rooms.image
}

document.getElementById('roomsCard').onclick = pickRooms

const revealMystery = () => {
  if (mystery.friends === undefined || mystery.foods === undefined || mystery.rooms === undefined ){
    document.getElementById('mystery').innerHTML = "You must find Joey's food!"
  } else {
    document.getElementById('mystery').innerHTML = `The ONE who ate Joey's ${mystery.foods.name} was ${mystery.friends.firstName} ${mystery.friends.lastName}, in ${mystery.rooms.name}.`
  }
}
document.getElementById('cookButton').onclick = revealMystery