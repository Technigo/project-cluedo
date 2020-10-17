# Project Cluedo - Mystery Randomizer
The goal for this project was to create a Cluedo mystery randomizer. 
The basic requirements were to: 
1. Create 3 cards that are clickable and when clicked will randomly generate a killer, weapon and a room based on pre-defined information. 
2. The information (or crime) from these cards will be revealed in a sentance when the user clicks on the "reveal mystery" button.
3. To style the page.

## The problem
In order to achieve this we had to create objects for each suspect, weapon and room which gave a number of properties for us to use. Then put each of these objects into a main array for their category e.g. suspects, weapons and rooms so they could be to group them together.  

I approached this project and the basic requirements by:
1. Reading through the brief and making sure that I understood the main objectives.
2. Following each of the steps, saving changes and pushing to github. 
3. If I was unsure of how to define anything in javaScript, CSS or HTML I reffered to the notes I had taken from the videos, my code sandbox practice, googled it and asked both on Stack overflow, teamates and my partner. 
4. I tried to be as methodical as possible to ensure that I got the basic steps done. 
5. In terms of styling I found some nice images online for the weapons and rooms. I wanted the page to have a cohesive feel to it and give each card, when revealed, their own colour like on the killer cards. I created two patterns, one for the background and one for the cards. And I found a nice magnify glass image which I used in the header and for the animated loader. 

## What I learnt:
1. I learnt how to use the addEventListener for the onclick callback function. On the pizzabot project I defined that in the HTML code instead. So that was a big aha moment for me. 
2. I also learnt that you don't have to call the function in the jaavscript file if you have an onclick in the HTML file as this is doing this for you because you have set the function name to the onclick in the html. 
3. When I was creating the loader I got some great help on stackoverflow from some fellow team members. I learnt more about how when you call a function it can trigger another one to be called. As well as the setTimeOut method which allowed for my animation to run and created a delay for the second function being called and revealing the card details. 
4. In relation to that I also learnt how to use classList to add a CSS class to a certain HTML element in order for my animation to run. Before the animation was run it was a static image of a magnify glass, but once the function was called the classList added my animation class for that img and it made the animation run.
5. In general when it comes to javaScript I feel like I am getting used to the syntax and how things are working together both in the javascript file and the seperate HTML and CSS files.  
6. Last but not least I learnt from this project that you always have to be thinking about points of execution and which functions relate to that. For example when the user clicks on the card what get's called and why. To be methodical when writing javaScript and to console.log more inside the code to see what is being returned in the console.log in dev tools. 

## If I had more time:
1. I would try and and crack the black level. I managed (with some help) to create the shuffleFavouriteWeapon function. They next step would have been to create the weighted arrays in order for the weapon card to be more likely to select the fave weapon of the killer on that card that was shown. Unfortunately at this point I felt that this is something I want to try at a later date as I am only just grasping what is happening in the code at the moment and don't want to confuse myself further. 
2. I would implement more of the methodical ways of problem solving and not be scared to make changes and try things out in the fear of breaking my code!

## View it live

https://condescending-neumann-78ee0c.netlify.app/
