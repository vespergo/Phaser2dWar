/// <reference path="phaser.js" />
var game = new Phaser.Game(1000, 700, Phaser.CANVAS, 'main', { preload: preload, create: create });
var inTxt;

function preload() {
    game.load.image('background', 'images/background.jpg');
    game.load.spritesheet('planets', 'images/planets.png', 275, 275);
    
}


function create() {
    game.add.sprite(0, 0, 'background');
    var homePlanet = game.add.sprite(game.world.centerX, game.height - 100, 'planets', 7);
    homePlanet.anchor.set(0.5);
    homePlanet.scale.set(0.3);

    inTxt = game.add.text(game.world.centerX, 10, "Place your starting world.", { fill: 'white' });    
    inTxt.anchor.set(0.5, 0);
}

