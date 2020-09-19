# Cluedo - Mystery Randomizer [View Live!](https://cluedo-who-is-the-murder.netlify.app/)

### This project was made as part of Technigo’s front-end developer boot camp Fall 2020.
This week’s project was to create a piece of the classic board game Cluedo. I have practicing this by creating objects and arrays and also connect this to the DOM.

## The process and structure
When you click the deck-cards a murder, a room and a weapon are randomly generated. This is done by functions in Javascript and where I first have stored a list of murders, rooms and weapons in object's and array's.

When clicking on the cards this happens in the Javascript:

1. I invoke a functions to pick (generate) a murderer, a room or a weapon. 
2. I store that in a new objcet called mystery
3. I reach the DOM via getElemetById and visually present the chosen cards in the browser.

Hearbeat animations is added to the deck-cards which signify that generating of a suspect, weapon and room is currently during processing. It last a couple seconds and then the murder, weapon and room is presented.

At the bottom of the page there is a button to Reveal the crime, you needed to click all three cards before the reveal the crime message is displayed.

If I have had more time I would have

* Make the site look nicer, put more time on the styling
* Add more animation

## View it live

The site is deployed [here](https://cluedo-who-is-the-murder.netlify.app/)

Check it out!
