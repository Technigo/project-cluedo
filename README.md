# Cluedo - Mystery Randomizer

This is a project I made when doing the Technigo bootcamp (autumn 2020). The project was to practice creating objects and arrays by creating the classic board game Cluedo. 

The game lets you pick three different cards that consists of clues to a committed murder. When you have picked the clues, you can reveal the crime by submitting a button. 

## The problem

To create the game I started with creating arrays of objects containing suspects, weapons and rooms. Then I used a math. function to randomly select different suspects, weapons and rooms. The random suspect, weapon and room will show after clicking on each card on the deck, which are all connected to a event handlers that executes a function for each card. To reveal the mystery, I created another event handler that will execute a reveal mystery function. I also created a event handler that will give you the possibility to refresh the page and start a new game.

The code was written in VS Code and in pararell I tested and viewed the site by using devtools.

Before deploying the news site, I tested it on several browsers such as google chrome, safari and firefox. If I had more time I would have made the site responsive. For now it only works on computer devises.

## View it live

A live demo of the website can be found on Netlify: https://thegameofcluedo.netlify.app/
