# Platzi Mokepon Game

**A Fullstack App**

## Menu
- [Description](#description)
- [Technologies (summary)](#technologies-summary)
- [Setup](#setup)

## Description
[Go to menu](#menu)

A multiplayer online game where players choose a Mokepon, they walk around the map, and after collising with other Mokepon they will select attacks, and then the result will be showed.

There are 3 types of Mokepons Earth, Water, and Fire, each mokepon has 3 times its primary attack and once the primary attack of the rest, for a total of 5 attacks.

The mechanics of this game were initially based on the rock-paper-scissors game.

This game was developed from Platzi's "[New free course on basic programming](https://platzi.com/cursos/programacion-basica/)" course in Spanish.
In that course I learned HTML, CSS, responsive design, JavaScript, creating and manupulating DOM elements with JavaScript, connecting to REST API's with Fetch API, adding events, creating REST API's in Node.js with the Express library.

I redeveloped this game and changed JavaScript to TypeScript, and REST API's to WebSockets.

## Details of the App

- All players can play witouth creating an account, there is no authentication

- Both players must select all attacks to end the match, there is no time limit

- Both players are deleted from the game after finishing the match

- If a player reloads the page or closes the browser tab where the game is on, the player is removed from the game

- If you get stuck in the "Select your attacks" view, the enemy player may have left the game or is not selecting attacks, so please reload the page to play again


## Other details

I consider that the code of both Frontend and Backend can be improved a lot.


## Technologies (summary)
[Go to menu](#menu)

The `front-vanilla` and `back-node` folders have a more detailed list.

Frontend:
- Vanilla
- TypeScript

Backend:
- Express (Node.js)

## Setup
[Go to menu](#menu)

The `front-vanilla` and `back-node` folders have the instructions for setting up this project.

