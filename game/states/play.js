
  	'use strict';
  	function Play() {}
 	Play.prototype = {
   create: function() {
   	this.frameRate = 20;
   	this.face = true;
   	this.salto = false;
   	this.gravity = 800;
   	this.velocidadX = 200;
   	this.drag = 600;
   	this.velocidadSalto = -200;

   	// Animaciones
 		var idle = [];
 		var dead = [];
 		var jump = [];
 		var slide = [];
 		var jumpMelee = [];
 		var melee = [];
 		var run = [];
 		var jumpShoot = [];
 		var runShoot = [];
 		var shoot = [];

 		for(var i = 1; i <= 10; i++) {
 			idle.push("Idle (" + i + ")");
 			dead.push("Dead (" + i + ")");
 			jump.push("Jump (" + i + ")");
 			slide.push("Slide (" + i + ")");
 			if(i <= 9)
 				runShoot.push("RunShoot (" + i + ")");
 			if(i <= 8) {
 				jumpMelee.push("JumpMelee (" + i + ")");
 				melee.push("Melee (" + i + ")");
 				run.push("Run (" + i + ")");
 			}
 			if(i <= 5)
 				jumpShoot.push("JumpShoot (" + i + ")");
 			if(i <= 4)
 				shoot.push("Shoot (" + i + ")");
 		}

	   this.player = this.game.add.sprite(this.game.width/2, this.game.height/2, 'player');
	   this.player.scale.setTo(0.25);
	   this.player.anchor.setTo(0.5);

	   this.player.animations.add('idle', idle);
	   this.player.animations.add('dead', dead);
	   this.player.animations.add('jump', jump);
	   this.player.animations.add('slide', slide);
	   this.player.animations.add('runShoot', runShoot);
	   this.player.animations.add('jumpMelee', jumpMelee);
	   this.player.animations.add('melee', melee);
	   this.player.animations.add('run', run);
	   this.player.animations.add('jumpShoot', jumpShoot);
	   this.player.animations.add('shoot', shoot);

	   this.player.animations.play('idle', this.frameRate, true);

	   // Físicas
	   this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
	   this.player.body.collideWorldBounds = true;
	   this.player.body.gravity.y = this.gravity;
	   this.player.body.drag.setTo(this.drag, 0);

   },
   update: function() {
   	if(this.player.body.blocked.down || this.player.body.touching.down)
   		this.salto = false;
   	if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !this.salto) {
   		if(!this.face) {
   			this.player.scale.x *= -1;
   			this.face = true;
   		}
   		this.player.animations.play('run', this.frameRate, true);
   		this.player.body.velocity.x = this.velocidadX;
   	}
   	else if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !this.salto) {
   		if(this.face) {
   			this.player.scale.x *= -1;
   			this.face = false;
   		}
   		this.player.animations.play('run', this.frameRate, true);	
   		this.player.body.velocity.x = -this.velocidadX;
   	}
   	else if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
   		if(this.player.body.blocked.down || this.player.body.touching.down) {
				this.player.animations.play('jump', this.frameRate, false);
   			this.salto = true;
   		}
   		this.player.body.velocity.y = this.velocidadSalto;
   	}
   	else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
   		
   	}
   	else {
   		if(!this.salto)
   			this.player.animations.play('idle', this.frameRate, true);
   	}

   },
   clickListener: function() {
   	this.game.state.start('gameover');
   }
  };