const Marcel = {
  FirstName: 'Marcel',
  LastName: 'the Monkey',
  Description: 'He was born to steal',
  Age: 3,
  Image: 'assets/marcel.png',
  Occupation: 'Monkey',
  FavouriteFood: 'Banana'
};

const Ross = {
  FirstName: 'Ross',
  LastName: 'Geller',
  Description: 'A palaeontologist working at the Museum of Natural History and in love with Rachel.',
  Age: 27,
  Image: 'assets/ross.png',
  Occupation: 'Palaeontologist',
  FavouriteFood: 'Muffin'
};

const Chandler = {
  FirstName: 'Chandler',
  LastName: 'Muriel Bing',
  Description: 'Making jokes whe he feels himself uncomfortable and loves Monica.',
  Age: 27,
  Image: 'assets/chandler.png',
  Occupation: 'Transponster',
  FavouriteFood: 'Pizza'
};

const Monica = {
  FirstName: 'Monica',
  LastName: 'Geller',
  Description: 'Monica was overweight as a child.',
  Age: 26,
  Image: 'assets/monica.png',
  Occupation: 'Chef',
  FavouriteFood: 'Kiwi-lime pie'
};

const Rachel = {
  FirstName: 'Rachel',
  LastName: 'Green',
  Description: 'A fashion enthusiast and Monica Gellers best Friend from childhood.',
  Age: 25,
  Image: 'assets/rachel.png',
  Occupation: 'Waitress',
  FavouriteFood: 'Trifle'
};

const Phoebe = {
  FirstName: 'Phoebe',
  LastName: 'Buffay',
  Description: 'She writes and sings her own strange songs, accompanying herself on the guitar.',
  Age: 27,
  Image: 'assets/phoebe.png',
  Occupation: 'A self-taught musician.',
  FavouriteFood: 'Nothing which had a Name'
};

const Hamburger = {
  Name: 'Hamburger',
  Taste: 'Taste: 9',
  Image: 'assets/hamburger.jpg'
}

const RachelTrifle = {
  Name: "Rachel's Trifle",
  Taste: 'Taste: 2',
  Image: 'assets/trifle.jpg'
}

const Turkey = {
  Name: 'Turkey',
  Taste: 'Taste: 10',
  Image: 'assets/turkey.jpeg'
}

const RedBAgel = {
  Name: 'Red BAgel',
  Taste: 'Taste: 6',
  Image: 'assets/bAgel.jpg'
}

const Pizza = {
  Name: 'Pizza',
  Taste: 'Taste: 7',
  Image: 'assets/pizza.png'
}

const Muffin = {
  Name: 'Muffin',
  Taste: 'Taste: 4',
  Image: 'assets/muffin.jpg'
}

const KiwiPie = {
  Name: 'Kiwi Pie',
  Taste: 'Taste: 3',
  Image: 'assets/pie.jpg'
}

const Sandwich = {
  Name: 'Sandwich',
  Taste:'Taste: 5',
  Image: 'assets/sandwich.jpg'
}

const MonicaDiningRoom = {
  Name: "Monica's Dining Room",
  Image: 'assets/mdr.jpg'
}

const RossApartment = {
  Name: "Ross' Apartment",
  Image: 'assets/ra.jpg'
}

const ChandlerDiningRoom = {
  Name: "Chandler's Dining Room",
  Image: 'assets/cdr.jpg'
}

const RachelRoom = {
  Name: "Rachel's Room",
  Image: 'assets/rbr.jpg'
}

const MonicaRoom = {
  Name: "Monica's Room",
  Image: 'assets/mbr.png'
}

const MonicaLivingRoom = {
  Name: "Monica's Living room",
  Image: 'assets/mlr.jpg'
}

const CentralPerk = {
  Name: "Central Perk",
  Image: 'assets/cp.jpg'
}

const Balcony = {
  Name: "the Balcony",
  Image: 'assets/balcony.jpg'
}

const Hall = {
  Name: "the Hall",
  Image: 'assets/stairwell.jpg'
}

const ChandlerLivingRoom = {
  Name: "Chandler's Living Room",
  Image: 'assets/clr.jpg'
}

const Friend = [
  Ross,
  Chandler,
  Monica,
  Rachel,
  Phoebe,
  Marcel
];

const Foods = [
  Hamburger,
  RachelTrifle,
  Turkey,
  RedBAgel,
  Pizza,
  Muffin,
  KiwiPie,
  Sandwich,
];

const Rooms = [
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
  Friend: null,
  Foods: null,
  Rooms: null
}

const pickfriends = () => {
  mystery.friends = randomSelector(Friend)
  document.getElementById('friendsName').innerHTML = mystery.friends.FirstName, mystery.friends.LastName;
  document.getElementById('friendsAge').innerHTML = mystery.friends.Age;
  document.getElementById('friendsOccupation').innerHTML = mystery.friends.Occupation;
  document.getElementById('friendsDescription').innerHTML = mystery.friends.Description;
  document.getElementById('friendsImage').src = mystery.friends.Image
}

document.getElementById('friendsCard').onclick = pickfriends

const pickFoods = () => {
  mystery.Foods = randomSelector(Foods)
  document.getElementById('FoodsName').innerHTML = mystery.Foods.Name;
  document.getElementById('FoodsImage').src = mystery.Foods.Image;
  document.getElementById('FoodsTaste').innerHTML = mystery.Foods.Taste
}

document.getElementById('FoodCard').onclick = pickFoods

const pickRooms = () => {
  mystery.Rooms = randomSelector(Rooms)
  document.getElementById('RoomsName').innerHTML = mystery.Rooms.Name;
  document.getElementById('RoomsImage').src = mystery.Rooms.Image
}

document.getElementById('RoomsCard').onclick = pickRooms

const revealMystery = () => {
  if (!mystery.friends || !mystery.Foods || !mystery.Rooms ){
    document.getElementById('mystery').innerHTML = "You must find Joey's food!"
  } else {
    document.getElementById('mystery').innerHTML = `The ONE who ate Joey's ${mystery.Foods.Name} was ${mystery.friends.FirstName} ${mystery.friends.LastName}, in ${mystery.Rooms.Name}.`
  }
}
document.getElementById('CookButton').onclick = revealMystery