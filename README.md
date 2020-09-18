# Cluedo/Smoothie - Smoothie Randomizer

This week's assignment was to make a Cluedo cardgame with built in favorite weapons, shuffle-function and revealing of the randomized mystery. However, I asked early on if I could create a smoothie-mixer site with same tech-specs, so that's what I've done.  


## The problem

I started off the same way as with Secrets Anonymous-site by using Figma to sketch up the overall layout and design, again to make time for coding only when starting to work on the code. Starting working on the code I followed the steps provided in the brief and by the time that the randomizer was working properly I started focusing on the purpose of the functions and how to create them. After applying the randomizer onto all three "decks", I wanted to make sure that the user had to select all ingredients before being able to see a recipe. 

The more I worked on the site I discovered more desired functions, such as changing the color of the reveal-button when all ingredients were selected. I also managed to add the loading-image as a separate function which I added to both the radomize-all function as well as the randomize one ingredient-buttons.

The select-a-favorite-function was a bit mind boggling, but I never gave up on trying and in the end I created a solution (not the most beautiful) that works. I decided to use the form/select to input the favorite and to toggle the randomization of the new array. A more elegant way would be to use the populate array-function that Maksymilian showed us today.

OBS. The 'shuffle favorite'-function is not applied to the site, but the code and strategy is written in the js-file on rows 159-166.

If I had more time I would begin with using the populate array-function mentioned above, and I would also have tried to add a new/remove object with the 'Manage your Inventory'-button that I created on the site. 

All in all- this was my most favorite project yet.


## View it live

https://smoothday.netlify.app/
