# unit-4-game

Game goes as follows: You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the target score provided. You lose the game when total score goes above the target score.

I created a gameReset function that encompasses all the number generation and crystal images. The function calls itself when a win or loss condition is met. The only global variables outside of the function are wins/losses/targetNum so that page keeps a running count of wins/losses and resets targetNum after each individual game.