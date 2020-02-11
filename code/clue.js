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


const hall= {
  name: 'hall', 
  image: 'https://www.allertoncastle.co.uk/content/1062/Live/image/great_hall.jpg'
}

const lounge = {
  name: 'lounge',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/df/0c/9f/hummingbird-lounge.jpg'
}

const diningRoom = {
  name: 'dining room',
  image: 'https://cdn.home-designing.com/wp-content/uploads/2013/02/dining-room-old-school.jpeg'
}

const kitchen = {
  name: 'kitchen',
  image: 'https://www.homeizy.com/wp-content/uploads/2012/11/Color-Ideas-for-Old-Kitchen-Cabinets.jpg'
}

const ballRoom = {
  name: 'ball room',
  image: 'https://images.squarespace-cdn.com/content/v1/53aa06cae4b0c3e3776c63f0/1424472865442-EIPXFRLQOM8DW42LW8L1/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg'
}

const conservatory = {
  name: 'convervtory',
  image: 'https://www.gardendesign.com/pictures/images/600x600Max/tanglewood-conservatories-historic-replicas_430/garden-design_5204.jpg'
}

const billardRoom = {
  name: 'billard room',
  image: 'https://cdn.shopify.com/s/files/1/1062/7500/files/linwood-billiards-table_525d602c-d517-4ae5-9211-726d68fc8dce.jpg?10525131255629077244'
}

const library = {
  name: 'library',
  image: 'https://images.photowall.com/products/45534.jpg?h=699&q=85'
}

const studyRoom = {
  name: 'study room',
  image: 'https://i.pinimg.com/originals/90/d8/a5/90d8a5f9b6db6df0a8751b49a073d438.jpg'
}

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

const rooms = [
  hall, 
  lounge, 
  diningRoom,
  kitchen,
  ballRoom, 
  conservatory, 
  billardRoom, 
  library, 
  studyRoom
]

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerDescription').innerHTML =`${mystery.killer.description}`
}

const pickWeapon = () => {
  mystery.weapon =randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight} kg`
  document.getElementById('killerWeapon').src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room =randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room.name}`
  document.getElementById('killerRoom').src = mystery.room.image
}

const revealMystery = () => {
  let finalMessage = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
  document.getElementById('mystery').innerHTML = finalMessage
}


