# Cluedo - Mystery Randomizer

This project's goal is to create a piece inspired in the classic board game Cluedo 🕵️‍♀️. The user should be able to click on three decks of cards to randomly get: a killer, a weapon and a room. Then there should also be a button to "reveal" the mystery 🙈

The focus on this project is to practice objects and arrays and also to manipulate the DOM with JavaScript 👩‍💻💪

## How I built it - What I learned

- I've built the three card decks as arrays of objects (in the case of the killer and weapon deck) and the rooms deck is a basic array of different location names. When the user clicks on a card, a function is called which will randomly pick an element from each of the arrays: this will determine who the killer is, which weapon was used and in which room the murder took place. The mystery will always vary...
- I've added a function to generate at random a killer's favorite weapon. This one will be chosen from a manipulated array in which I've added the killer's favorite weapon's name three extra times, so that the chances of their favorite weapon being chosen are higher. For this, I've used a basic randomizer function and the push() method 💡
- Once the three cards have been picked, there's a button for revealing the crime, which is done by manipulating the DOM with JavaScript; and I've also added a Restart button, so the user can have a go at it again 😁
- I'm especially proud of the loaders which I've added once a card is clicked to give the impression that the choice is being generated. I've managed this by using the setTimeout() method ⏰

## View it live

Curious about who the killer is? 👀 Try it out, live at Netlify: https://mystifying-meitner-3dd588.netlify.app/
