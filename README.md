# Cluedo - Mystery Randomizer

I built a Randomizer page for the game Cluedo as a Javascript practice for the Technigo bootcamp.

## The problem

I struggled a lot because none of the onclick function worked and I didn't understand what was causing the problem. To solve the problem I asked my teammates, and posted my problem at Stack Overflow. The suggestion didn't work either so I finally took it to 1:1 consultation with one of our teachers at Technigo, where we found out that a error due to a line of code (where I simply wanted to console.log the one of the elements in a array but instead treated the element as an object) prior to the onclick functions prevented all the code after the error from working. So it wasn't exactly a problem related to function, but me not knowing that the lines of code that comes after an error could be affected by the error and therefore not work. 
I've also made a later change so that the answer will not be revealed unless the user chooses all the cards. This I solved by peeking into other classmates' code, and I borrowed the code (Object.values(mystery).includes('') where I make the If statement, which says that if the array of mystery contains any empty value(''), then it should print out the message saying choose the cards first. 

## View it live

https://dazzling-mayer-a96746.netlify.com/
