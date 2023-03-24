in html, need to have the user input thir name using window.prompt
also add a few buttons in the browser

let name = window.prompt(some text telling the user to input their name)

<button>start game</button>

figure out how to start the gam when the user inputs their name and clicks the button

initialize startGame variable to = false
add Click Event Listener to set startGame = true
if startGame = true, run the code for the game

need to make a class of the player character with the properties
of hull : 20, firepower: 5, accuracy: .7

class Hero {
    constructor (name) {
        this.playerName = name
        this.hull = 20
        this.firePower = 5
        this.accuracy = .7
    }
}

make a method for the user to attack based off the accuracy

if math.random() < Hero.accuracy run the attack method

heroAttack() {
    let enemy = this.enemy
    this.alienHull = this.alienHull - this.firepower
}

make one alien ship to start, with the above properties

class Alien {
    constructor () {
        this.hull = Math.round(Math.random() * 4 + 3
        this.firePower = Math.round(Math.random()* 2) + 2
        this.accuracy = Math.random() * 0.2 + 0.6
    }
}

class AlienFactory {
    constructor () {
        this.aliens = []
    }
    makeNewShip() {
        let newAlien = new Alien()
        
    }
}

have the alien attack AFTER the user

if math.random() < alien.attack and alien.Hull ! = 0 run the alien attack;
alienAttack() {
     Hero.hull = Hero.hull - alien.firePower
}

if heroAttack = true
then alien attack

have the user attack AFTER the alien

if alien attack and Hero.hull != 0 attack the alien

if the alien ship dies, give the for the user to escape and end game

if this.alienHull == 0 and this.heroHull !== 0
endGameButton = document.createElement('button)
endGameButton.textContent = 'retreat?'
continueButton = document.createElement('button')
continueButton.textContent = 'Or Continue?'

if the user dies, end game

if this.heroHull == 0
let p = document.createElement('p)
p.textContent = 'Game over, you have died. the universe is over'

if the user destroyed all of the aliens, user wins

if aliens.length < 1
let p = document.createElement('p)
p.textContent = 'YOU WIN!!!