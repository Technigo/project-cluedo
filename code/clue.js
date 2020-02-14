// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS

// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: "url('assets/green.png')",
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is widely seen as quick-witted',
  age: 36,
  image: "url('assets/plum.png')",
  occupation: 'Professor'
}

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is usually a dignified, dapper and dangerous military man',
  age: 55,
  image: "url('assets/mustard.jpg')",
  occupation: 'Colonel'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is an elderly, still-attractive woman who nearly always maintains her dignity',
  age: 32,
  image: "url('assets/peacock.png')",
  occupation: 'Socialite'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'She is usually a frazzled servant',
  age: 65,
  image: "url('assets/white.png')",
  occupation: 'Housekeeper'
}

const missScarlett = {
  firstName: 'Josephine',
  lastName: 'Scarlett',
  color: 'red',
  description: 'She is a femme fatale',
  age: 25,
  image: "url('assets/scarlet.png')",
  occupation: 'Actress'
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  material: 'textile'
}

const knife = {
  name: 'Knife',
  material: 'metal'
}

const candlestick = {
  name: 'Candlestick',
  material: 'silver'
}

const dumbbell = {
  name: 'Dumbbell',
  material: 'iron'
}

const poison = {
  name: 'Poison',
  material: 'liquid'
}

const axe = {
  name: 'Axe',
  material: 'metal'
}

const bat = {
  name: 'Bat',
  material: 'wood'
}

const trophy = {
  name: 'Trophy',
  material: 'silver'
}

const pistol = {
  name: 'Pistol',
  material: 'metal'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// STEP 2 - CREATE ARRAYS TO SUSPECTS, WEAPONS AND ROOMS 

const suspects = [
  mrGreen,
  professorPlum,
  colonelMustard,
  mrsPeacock,
  mrsWhite,
  missScarlett
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
]

// STEP 3 - PICK A MURDERER, A WEAPON AND A ROOM

// OBJECT THAT KEEPS THE MYSTERY (with a killer, a weapon and a room)

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerText').style.background = mystery.killer.color
  document.getElementById(
    'killerText'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').style.background = mystery.killer.image
}

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponText'
  ).innerHTML = `${mystery.weapon.name}`
}

// This function will be invoked when you click on the room card.
const pickRoom = () => {

  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomText'
  ).innerHTML = `${mystery.room}`
}

document.getElementById('killer').addEventListener('click', pickKiller)
document.getElementById('weapon').addEventListener('click', pickWeapon)
document.getElementById('room').addEventListener('click', pickRoom)


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


// Get modal element
const modal = document.getElementById("simpleModal");

// Get open modal button
const modalBtn = document.getElementById("reveal");

// Get close button
const closeBtn = document.getElementById("closeBtn");

// Function to open modal
const reveal = () => {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  document.getElementById(
    'revealText'
  ).innerHTML = `Omg, the murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`

}

// Function to close modal
const closeModal = () => {
  modal.style.display = "none";
}

// Function to close modal if outside click/touch
const outsideClick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Listen for open click and open touch (on mobile devices)
modalBtn.addEventListener("click", reveal);
modalBtn.addEventListener("touchstart", reveal);

// Listen for close click and close touch (on mobile devices)
closeBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("touchstart", closeModal);

// Listen for outside click and outside touch (on mobile devices)
window.addEventListener("click", outsideClick);
window.addEventListener("touchstart", outsideClick);




