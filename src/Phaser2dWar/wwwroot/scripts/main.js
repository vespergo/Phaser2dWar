/// <reference path="phaser.js" />
var game = new Phaser.Game(1000, 700, Phaser.CANVAS, 'main', { preload: preload, create: create });
var inTxt, background, menu;

//bases
var homeBaseRect;

function preload() {
    game.load.image('background', 'images/background.jpg');
    game.load.spritesheet('planets', 'images/planets.png', 110, 110);
    game.load.spritesheet('menu', 'images/menu.jpg');
}


function create() {
    background = game.add.sprite(0, 0, 'background');
    

    //starting colony
    var homeBase = game.add.sprite(106, 591, 'planets', 3);
    homeBase.anchor.set(0.5);
    homeBase.inputEnabled = true;
    homeBase.events.onInputDown.add(BackgroundClicked);

    menu = game.add.sprite(game.width / 2, game.height / 2, 'menu');
    menu.anchor.set(0.5);
    menu.visible = false;
    
}

function BackgroundClicked(mouse) {
    menu.visible = !menu.visible;
}

//player will have a starting planet.
//-manage cities
//-send scouting troops
//-defend planet
//-mine space resources
//-mine planet resources
//stats (pop, money, science, morale, tax)
//army (ships, men, weapon types with science)

//battles are conducted by determining what types of ships the other people have and what weapons they have. 
//each round a certain percentage of casualties from both sides determined by superiority of firepower and weapon grade

//when colony advances in size and morale, they can expand. if they are advanced in basic movement then they can also follow the dotted teleport lines.

//ultimate goal is to attack the mothership(central piece), which spawns enemy ships. winning the game


