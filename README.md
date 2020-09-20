# Cluedo - Mystery Randomizer

The purpose of this project was to build a randomizer that can be used when hosting the famous board game "Cluedo". The site randomly provides a suspect, weapon and room to create a mystery for the game. 

## Background

The project was realized using HTML, CSS and Javascript. It was created for educational purposes during the Technigo Bootcamp for frontend developers in fall 2020. 

## What it does

The user can click on three different card decks with a number of suspects, weapons and rooms respectively to create a mystery consisting of one suspect, weapon and room each. When clicking on the "Reveal Mystery"-button in the bottom of the page, a summary of the mystery appears. 

The randomizer behind the decks was created with Javascript and isn't entirely random: Each suspect has a favourite weapon (that changes randomly on each click) and depending on the current favourite weapon of a suspect, it will be more likely to draw this weapon when clicking on the weapon-deck. 
In a similar way, certain weapons are more likely to be found in certain rooms. As soon as a weapon is chosen, these rooms will be more likely to be found in the rooms-deck. 
As part of the assignment, there are loaders appearing on the card decks after clicking and before the chosen suspect/weapon/room is shown.

## Browser compatibility and limitations

The page is responsive and was tested with dev tools in Chrome, Firefox and Edge. Everything works as expected. 
Due to the large files for the graphics, the page loads slowly when loading it for the first time. I would have fixed this, if there had been more time for the assignment. 

## View it live

You can see the page live on Netlify here: https://henrikes-mystery-picker.netlify.app/ 
