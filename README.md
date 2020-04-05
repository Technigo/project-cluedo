# Cluedo - Mystery Randomizer

The task was to create a piece of the classic game Cluedo. The user is able to click four cards to pick a random killer, weapon, room & date. There is also a Reveal button to show the mystery.

## Approach

I created a function for each card. This function calls a randomizer function to return something from an object or an array, and store it in the Mystery object. The Reveal button gathers information from this object and prints out the mystery. I made a forEach loop to determine if all cards are clicked (in this case hide the button). I also created a fourth deck of cards, that prints out a random date. Added some styling and made it somewhat responsive.

## Deployed

https://project-cluedo.netlify.com/
