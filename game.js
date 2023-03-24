let heroName = window.prompt('Please enter your name') // allows the input to equal the user name

let startGame = false // a variable to check if the game has started, initially set to false

let startGameButton = document.querySelector('#start-game') // caches the button to a variable
let retreatButton = document.createElement('button')
let continueButton = document.createElement('button')
let newDiv = document.createElement('div')
retreatButton.textContent = 'Retreat (ends game)'
continueButton.textContent = 'Continue (fight next alien)'
retreatButton.style.display = 'none'
continueButton.style.display = 'none'

// This code is to change the text of the stats whenever needed
let heroHullText = document.querySelector('#hero-hull')
let heroFirePowerText = document.querySelector('#hero-firepower')
let heroAccuracyText = document.querySelector('#hero-accuracy')

let alienHullText = document.querySelector('#alien-hull')
let alienFirePowerText = document.querySelector('#alien-firepower')
let alienAccuracyText = document.querySelector('#alien-accuracy')

// this code is to start the game
const startSaveUniverse = () => {
    startGame = true

    let nameBox = document.querySelector('#player-name')
    nameBox.textContent = heroName
}

const afterFight = () => {
    continueButton.style.display = 'flex'
    retreatButton.style.display = 'flex'
    document.body.appendChild(newDiv)
    newDiv.appendChild(retreatButton)
    newDiv.appendChild(continueButton)


    console.log('You beat the alien')
}

const endGame = () => {
    console.log('game over')
    startGame = false
}

const victory = () => {
    console.log('YOU WIN')
    startGame = false
}




// All the properties that the player character needs
class Hero {
    constructor(name) {
        this.playerName = name
        this.hull = 20
        this.heroFirePower = 5
        this.accuracy = 0.7
    }
    attack(alien) {
        if (Math.random() < this.accuracy) {
            let damage = this.heroFirePower
            alien.hull -= damage
            alienHullText.textContent = `Hull: ${alien.hull}`
            console.log(`The player hit the alien for ${damage} damage! the alien hull has ${alien.hull} health left  `)
        } else {
            console.log('The player missed')
        }
    }
}

// All the properties that the aliens need

let randomHull = Math.round(Math.random() * 4 + 3)
let randomFirePower = Math.round(Math.random() * 2) + 2
let randomAccuracy = Math.random() * 0.2 + 0.6
class Alien {
    constructor(hull,firePower,accuracy) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
    attack(hero) {
        if (Math.random() < this.accuracy) {
            let damage = this.firePower
            hero.hull -= damage
            heroHullText.textContent = `Hull: ${hero.hull}`
            console.log(`The alien hits ${hero.playerName} for ${damage} damage. ${hero.playerName} has ${hero.hull} health left`);
        } else {
            console.log(`The alien misses ${hero.playerName}.`);
        }
    }

}

// Allows the creation of multiple aliens
class AlienFactory {
    constructor() {
        this.aliens = []
    }
    makeNewShip(hull,firePower,accuracy) {
        let newAlien = new Alien(hull,firePower,accuracy)
        this.aliens.push(newAlien)
        return newAlien

    }
}


startGameButton.addEventListener('click', function (event) {

    startSaveUniverse() // start the game when the button is clicked

    if (startGame == true) {

        startGameButton.remove() // remove the button when it is clicked but also starts the game
        // creates new instances of the hero and alien classes
        let alienFactory = new AlienFactory()
        let hero = new Hero(heroName)
        let alien1 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)
        let alien2 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)
        let alien3 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)
        let alien4 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)
        let alien5 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)
        let alien6 = alienFactory.makeNewShip(Math.round(Math.random() * 4 + 3),Math.round(Math.random() * 2) + 2, Math.random() * 0.2 + 0.6)



        let i = 0
        let currentAlien = alienFactory.aliens[i]

        while (i < alienFactory.aliens.length) { // runs the game while i is < the length of the array
            if (hero.hull !== 0 && currentAlien.hull !== 0) {// if the alien and hero is still alive
    
                hero.attack(currentAlien)
                currentAlien.attack(hero)
                console.log(hero)
                console.log(currentAlien)
            }
            if (hero.hull <= 0) { // if hero dies, end game
                console.log('YOU HAVE DIED')
                endGame()
                break
            } else if (currentAlien.hull <= 0) { // if alien dies remove the alien from array
                alienFactory.aliens.splice(i, 1)
                console.log(alienFactory.aliens) // checks if the statement is running
                console.log(i)
                //
                let result = window.prompt('You Beat The Alien! Would you like to continue (enter yes to fight the next ship) or retreat? type retreat)');
                if (result.toLowerCase() !== 'no' || result.toLowerCase() !== 'retreat') {
                    console.log(hero)
                     if (alienFactory.aliens.length === 0 ) { // if all aliens are dead, hero wins
                        console.log('You saved the universe')
                        victory()
                        break
                    } else { // if not, face the next alien
                        currentAlien = alienFactory.aliens[i]
                        console.log('Keep playing')
                    }
                } else { // if input anyhting of than yes, stop game
                    console.log('game over')
                    endGame()
                    break
                }

                currentAlien = alienFactory.aliens[i]
            }
            // i++
            currentAlien = alienFactory.aliens[i]
        }


    }

})



