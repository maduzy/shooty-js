//Start and end game sounds are from the Metal Gear Solid saga and therefore belong to Konami Entertainment. This assignment is made for educational purposes only.

createjs.Sound.registerSound({id:"gun", src:"assets/gunshot1.mp3"});
	createjs.Sound.registerSound({id:"gunammo", src:"assets/gunammo.mp3"});
	createjs.Sound.registerSound({id:"dart", src:"assets/gunshot2.mp3"});
	createjs.Sound.registerSound({id:"explosion", src:"assets/explosion.mp3"});
	createjs.Sound.registerSound({id:"killsound", src:"assets/hit.mp3"});
	createjs.Sound.registerSound({id:"stunsound", src:"assets/stun.mp3"});
	createjs.Sound.registerSound({id:"laser", src:"assets/laser1.mp3"});
	createjs.Sound.registerSound({id:"capture", src:"assets/capture.wav"});
	createjs.Sound.registerSound({id:"gameover", src:"assets/gameover.mp3"});
	createjs.Sound.registerSound({id:"start", src:"assets/start.mp3"});

	createjs.Sound.play("start");
	
	
	var yVel = 0;
	var gravity = 0.9; // 1.2;
	var isJumping = false;
	
	var up = false;
	var down = false;
	var left = false;
	var right = false;
	var space = false;
	
	var mobHits = 0;
	var mobsCaptured = 0;	
	var canContinue = true;
	
	var lethal = false;
	
	var snake = null;
	
	var bullets = new Array();
	var bulletsDrone = new Array();
	var bulletsSoldier = new Array();
	var drones = new Array();
	var soldiers = new Array();
	var bul = document.getElementById("bulletType");
	var bg = document.getElementsByTagName("body")[0];
	
	
	
	
	var gameDiv = document.createElement('DIV');
	gameDiv.id = "game";
	gameDiv.className = "game";
	gameDiv.left = 100;
	gameDiv.top = 100;
	gameDiv.width = 600;
	gameDiv.height = 375; //400
	gameDiv.style.position="absolute";
	gameDiv.style.left = gameDiv.left + "px";
	gameDiv.style.top = gameDiv.top + "px";	
	gameDiv.style.width = gameDiv.width + "px";
	gameDiv.style.height = gameDiv.height + "px";
	document.body.appendChild(gameDiv);
	
	
	bg.style.backgroundSize = "1000px 667px";
	document.addEventListener("keydown", function(event) {
		if(event.keyCode == 13) {
			var sallymode = document.getElementById("sally-mode");
			sallymode.parentNode.removeChild(sallymode);
			animate();
		}
	})
