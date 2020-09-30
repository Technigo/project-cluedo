# Cluedo - Mystery Randomizer

This project was made for Technigo Bootcamp 2020.

It's a tool for the game leader in [Cluedo](https://sv.wikipedia.org/wiki/Cluedo). By clicking on the three decks of cards you get a randomly generated killer, weapon and room.
The button prints out the revealed mystery.

The focus on this project was to practice objects and arrays and also to manipulate the DOM with JavaScript.


## How I solved the task

After creating objects for suspects, weapons and rooms, I created arrays to group them together. When clicking on a deck of cards an onclick event invokes a function that generates an item from one of the arrays. The items are stored in a separate object.

After that first step I did most of the styling and indulged in animations. A shaking header, loading animations, cards fading in, typing text and a button with hover effects... 
This week's motto: More is more! 

There is also som logic behind the sceene that increases the probability that a certain weapon or room will be generated depending on what was previously chosen.

If I had more time I would have explored what I could have done differently with the scrolling text. I discovered that if you click on the button several times before the text typing is done, incorrect text is printed.


## View it live

Here is a link to the deployed project: https://projectcluedo.netlify.app/
