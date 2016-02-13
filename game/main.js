'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'newgame');

  // Game States
  game.state.add('boot', Boot);
  game.state.add('gameover', GameOver);
  game.state.add('menu', Menu);
  game.state.add('play', Play);
  game.state.add('preload', Preload);
  
  game.state.start('boot');
};