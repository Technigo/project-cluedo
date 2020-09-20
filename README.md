# Cluedo - Mystery Randomizer

The purpose of this week was to create a randomizer with Cluedo theme using what we learned about objects, arrays and manipulating the DOM using Javascript.


## The problem

I followed the different steps described in the brief. I was positively surprised to find so many hints in the original code and I found it quite easy to achieve the blue level (at least before styling).

After Wednesday's lecture with Van, it felt pretty clear how to build the shuffleFavouriteWeapon function but it required a little bit more time to make the loading animations works as I attended.

And then I decided to go for the black level... I spent my Saturday on it, facing several issues related to scope and bad initialization timing, as illustrated in my StackOverflow question (https://stackoverflow.com/c/technigo/questions/1545). After hours of restructuring and control.log, I managed to manipulate the odd in the logic behind generating weapon. Then it was much easier to replicate the solution on rooms. I still don't get why we had to put an id in the weapon array though...

At last I spent some time on styling (colors, backgrounds and pictures) and rebuilt the css a bit to apply the "desktop first" approach, with different media queries for tablet and mobile.

I am pretty satisfied about the result. If I had more time, I would have kept the cards "unflipped" until clicking on the Reveal Mystery button and added a nice flip animation. 

## View it live

You can take a look at the result on https://sandrinescluedo.netlify.app/
You are welcome to visit my pull request https://github.com/Technigo/project-cluedo/pull/131 and leave some comments about my code.
Enjoy!
