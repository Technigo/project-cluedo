// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrsWhite = {
  firstName: 'Helen',
  lastName: 'White',
  color: 'white',
  description: 'She hate kids',
  age: 53,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const mrMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is evil',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Military'
}

const mrsPeacock = {
  firstName: 'Mary',
  lastName: 'Peacock', 
  color: 'blue', 
  description: 'An elegant aristocrat',
  age: 66,
  image: 'assets/peacock.png',
  occupation: 'Senator'
}

const mrPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is sneeky',
  age: 37, 
  image: 'assets/plum.png',
  occupation: 'Professor in Chemestry'
}

const missScarlet = {
  firstName: 'Louise',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is highly attractive',
  age: 25, 
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'beige',
  image: 'https://images-na.ssl-images-amazon.com/images/I/61vs9sn1fEL._SY355_.jpg'
}

const revolver = {
  name: 'revolver',
  weight: 3,
  color: 'black',
  image: 'https://brabilligt.se/wp-content/uploads/2018/11/782ab23c56e7cab1dc4fa171659a8ed2.jpg'
}

const candlestick = {
  name: 'candlestick',
  weight: 4, 
  color: 'silver',
  image: 'https://www.trendsandvision.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/A/M/AM11.jpg'
}

const knife = {
  name: 'knife',
  weight: 2,
  color: 'brown',
  image: 'https://cdn.shopify.com/s/files/1/3098/6414/products/IYnY6oQw6Kp6kysGYsgg_the-witcher-geralt-hunting-knife-foam-larp-replica-full-2-2_800x.jpg?v=1567176637'
  
}

const horseshoe = {
  name: 'horseshoe',
  weight: 5,
  color: 'darkgrey',
  image: 'https://cdn10.bigcommerce.com/s-hi7gs6/product_images/uploaded_images/using-horseshoes-luck.jpg?t=1503413030'
}

const poison = {
  name: 'poison',
  weight: 0,
color: 'red',
image: 'https://gumlet.assettype.com/freepressjournal/import/2019/03/poison.png?w=1200&h=750'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrMustard,
  mrsPeacock,
  mrPlum,
  missScarlet
]

const weapons = [
  rope, 
  revolver,
  candlestick,
  knife, 
  horseshoe,
  poison
]

const hall='hall'
const lounge ='lounge'
const diningRoom= 'dining Room'
const kitchen = 'kitchen'
const ballRoom = 'ball room'
const conservatory = 'convervatory'
const billardRoom = 'billard room'
const library =' library'
const study = 'study'

const rooms = [
  hall, 
  lounge, 
  diningRoom,
  kitchen,
  ballRoom, 
  conservatory, 
  billardRoom, 
  library, 
  study
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: '',
  weapon: '',
  room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName}
   ${mystery.killer.lastName}`
   document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
   document.getElementById('killerImage').src = mystery.killer.image
   document.getElementById('killerDescription').innerHTML =`${mystery.killer.description}`
   

   
  
}

//document.getElementById('killerCard').onclick = pickKiller();



// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon =randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight} kg`
  document.getElementById('killerWeapon').src = mystery.weapon.image
}
//document.getElementById('weaponCard').onclick = pickWeapon();

const pickRoom = () => {
  mystery.room =randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
  
}

//document.getElementById('roomCard').onclick = pickRoom();



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  let finalMessage = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  document.getElementById('mystery').innerHTML = finalMessage
}


