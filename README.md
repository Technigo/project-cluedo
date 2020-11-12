# Cluedo - Mystery Randomizer

The project is a website inspired by the Cluedo game. The user are able to click the three decks of cards to randomly pick a killer, a weapon and a room. After that the user are able to click a button to 'Reveal the Mystery'. 

## The problem

I started the project by creating all the objects for each suspect, weapon and room. All these objects had different values. Then I created arrays of the objects to group them together. After that, I created functions that randomly pick killer, weapon and room for the different cards for every time you click on them. I choosed which information regarding the different objects that shall be visible in the DOM by connecting the JavaScript with the HTML code. Finally, I created a button with onclick-function that reveals the mystery after killer, weapon and room are choosen. These steps were quite easy with good help from instructions and all steps really maked sense. 

I styled the page a bit by changing background for the whole site using a picture, changing colors and adding pictures for all objects. I added information to the suspects about favourite weapon and then created a Shuffle-function that randomly choose the suspect's favourite weapon. It did not went out perfectly, several suspects can have the same favourite weapon and the function that should make it more likely that their actual favourite weapon appears both as favourite weapon information and in the weapon card did not really worked out the way I wanted. I made several tries and then removed it due to lack of time. 

At least I got the loader animation to work in CSS and I got it to appear as wanted with help of JavaScript by adding addEventListener method and timeout function. It was fun getting the loaders to work and I will probably elaborate more with them in the future.

## Learning objectives

- Create and manipulate Objects

- Create Arrays

- Manipulating the DOM using JavaScript

## Tech

- JavaScript

- HTML

- CSS 

## View it live

Link to view the site live: https://cluedoshuffle.netlify.app/

