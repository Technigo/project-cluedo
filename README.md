`PROJECT 5`

# Build a piece of Cluedo

This week's been all about Javascript, learning about arrays and objects. We're going to hook that up with some html and css in this project!

**So - This week’s project is to create a piece of the famous board game [Cluedo](https://en.wikipedia.org/wiki/Cluedo).**

![](https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Cluedo_image1600w.jpg)

The user (who is the game leader and the one that will know all about the murder) should be able to click on three decks of cards, to randomly get a character, a weapon and a room. Then there should also be a button to reveal the mystery.  

The focus on this project is to practice objects and arrays and also to manipulate the DOM with JavaScript.

## Step 1 - Create the objects for suspects, weapons and rooms.

The suspects and the weapons have several details about them whilst the rooms only has a name.

**The suspects**
 Mr Green - Jacob Green
 Professor Plum - Victor Plum
 Miss Scarlet - Cassandra Scarlet
 Mrs Peacock - Eleanor Peacock
 Colonel Mustard - Jack Mustard
 Mrs White - Mrs White
 
**The Weapons**
Rope
Knife
Candlestick
Dumbbell
Poison
Axe
Bat
Trophy
Pistol

**The Rooms**
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

#### 🚨Before starting with step 2, commit the first iteration to github.

```
 git add .
 git commit -m "step 1 done"
 git push origin master
```

## Step 2 - Create arrays to group together suspects, weapons and rooms.

Try to console log the arrays to see that everyhting is there.

#### 🚨Before starting with step 3, commit the second iteration to github.

## Step 3 - Pick a murderer, a weapon and a room

When clicking on the cards, you should invoke the right functions to pick a murderer, a room and a weapon. 
That should be stored in the mysterty object and we should visually see the chosen cards in the browser.

#### 🚨Before starting with step 4, commit the third iteration to github.

## Step 4 - Reveal the mystery

When clicking the button Reveal Mystery, we should see a message saying something like:
*The murder was committed by Jacob Green, in the living room with a rope.*

## What you will learn 🧠

- Create and manipulate objects
- Create arrays
- More about manipulating the DOM using Javascript

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code and start coding!

## Requirements 🧪

- Code follows Technigo’s code guidelines.
- Site should have three clickable cards and a clickable button.
- You should be able to randomly pick suspects, weapons and rooms.
- You should be able to reveal the mystery.
- If selected; demo your solution for your team.

## How to hand in the code 🎯

- When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

- Navigate to your repo and create a Pull Request into the Technigo repo
- Add a link to your deployed site in the comments of the PR.
- Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'cluedo-site-project' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also reach out to your teachers.

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Design_**

- Make the site responsive.
- Spend some time to make it look nice.
- Add images of your suspects and maybe the weapons.

**_Deep-dive_**

- Add the functionality to say something like: "No mystery is yet to be revealed" if you click the reveal button but haven't selected suspect, weapon and room yet.
- Add a fourth deck of card, maybe about when the murder was commited.

**_Helpful readings_**

- [W3Schools - Objects](https://www.w3schools.com/js/js_objects.asp)
- [W3Schools - Arrays](https://www.w3schools.com/js/js_arrays.asp)

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
