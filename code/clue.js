// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

 const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "assets/green.png",
    occupation: "Entrepreneur"
  }
 const professorPlum = {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Master detective",
    age:"38",
    image: "assets/plum.png",
    occupation: "professor"
  }
 const missScarlet = {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "will do anything to stay in the sportight",
    age:"25",
    image: "assets/scarlet.png",
    occupation: "Actress"
  }
  const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "classy social butterfly",
    age:"32",
    image: "assets/peacock.png",
    occupation: "Socialite"
  }
  const colonelMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "ex-football player",
    age:"50-60",
    image: "assets/mustard.png",
    occupation: "Colonel"
  }
  const mrsWhite = {
    firstName: "Mrs",
    lastName: "White",
    color: "white",
    description: " long time nanny and cook",
    age:"60-70",
    image: "assets/white.png",
    occupation: "Housekeeper"
  }



 
  
   
 
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

  const Rope = {
    name: "rope",
    weight: 10
  }
  const Knife = {
    name: "Knife",
    weight: 7
  }
  const Candlestick = {
    name: "Candlestick",
    weight: 12
  }
  const Dumbbell = {
    name: "Dumbbell",
    weight: 2
  }
  const Poison = {
    name: "Poison",
    weight: 8
  }
  const Axe = {
    name: "Axe",
    weight: 14
  }
  const Bat = {
    name: "Bat",
    weight: 13
  }
  const Trophy = {
    name: "Trophy",
    weight: 11
  }
  const Pistol = {
    name: "Pistol",
    weight: 20
  }


 

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  "mrGreen",
  "mrsWhite",
  "professorPlum",
  "missScarlet",
  "mrsPeacock",
  "colonelMustard"
]
console.log(suspects)

const weapons = [
"Rope",
"Knife",
"Candlestick",
"Dumbbell",
"Poison",
"Axe",
"Bat",
"Trophy",
"Pistol"
]
console.log(weapons)

const rooms = [
"DinningRoom",
"Conservatory",
"Kitchen",
"Study",
"Library",
"BilliardRoom",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"LivingRoom",
"Observatory",
"Theater",
"GuestHouse",
"Patio"
]
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
