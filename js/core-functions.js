
	function onKeyPressed(event) {
		if(event.keyCode == 38) {
			createBulletU();
		}
		
		
		if(event.keyCode == 37) {
			createBulletL();
			snake.id="snakeL";
		}
		
		if(event.keyCode == 39) {
			createBulletR();
		}
		if(event.keyCode == 65) {
			left = true;
			snake.id="snakeL";
		}
		if(event.keyCode == 68) {
			right = true;
			snake.id="snakeR";
		}
		if(event.keyCode == 87) {
			up = true;
			jump();
		}
		if(event.keyCode == 83) {
			down = true;
		}
		if(event.keyCode == 32) {
			captureSoldier();
		}
		
		if(event.keyCode == 69){
		lethal = !lethal;
		createjs.Sound.play("gunammo");
		}
	}
	
	
	
	function onKeyReleased(event) {
		snake.id = "snakeI";
	
		if(event.keyCode == 65) {
			left = false;
		}
		if(event.keyCode == 68) {
			right = false;
		}
		if(event.keyCode == 87) {
			up = false;
		}
		if(event.keyCode == 83) {
			down = false;
		}
	}
	
	
	function createSnake() {
	
		
		var myDiv = document.createElement('div');
		
		
		myDiv.id = "snakeI";
		
		
		myDiv.speedX = 0;
		myDiv.speedY = 0;
		
		
		myDiv.currentX = gameDiv.width / 2;
		myDiv.currentY = gameDiv.height -10;
		myDiv.size = 24;
		
		
		gameDiv.appendChild(myDiv);
		
		
		return myDiv;
	}
	
	
	function createBulletR() {
	
		
		var bulletDiv = document.createElement('div');
		
		
		bulletDiv.id = "bullet";
		
		
		bulletDiv.size = 12;
		bulletDiv.currentX = snake.currentX + bulletDiv.size;
		bulletDiv.currentY = snake.currentY + bulletDiv.size;
		bulletDiv.speedX = 4; 
		bulletDiv.speedY = 0; 
		
		
		bullets.push(bulletDiv);
		
		gameDiv.appendChild(bulletDiv);
		
		createjs.Sound.play("dart");
	}
	
	function createBulletL() {
	
		
		var bulletDiv = document.createElement('div');
		
		
		bulletDiv.id = "bullet";
		
		bulletDiv.size = 12;
		bulletDiv.currentX = snake.currentX + bulletDiv.size; 
		bulletDiv.currentY = snake.currentY + bulletDiv.size;
		bulletDiv.speedX = -4; 
		bulletDiv.speedY = 0; 
		
		
		bullets.push(bulletDiv);
		
		gameDiv.appendChild(bulletDiv);
		
		createjs.Sound.play("dart");
	}
	
	
	function createBulletU() {
	
		
		var bulletDiv = document.createElement('div');
		
		
		bulletDiv.id = "bulletU";
		
		bulletDiv.size = 12;
		bulletDiv.currentX = snake.currentX + bulletDiv.size; 
		bulletDiv.currentY = snake.currentY + bulletDiv.size;
		bulletDiv.speedX = 0; 
		bulletDiv.speedY = -4; 
		
		
		bullets.push(bulletDiv);
		
		gameDiv.appendChild(bulletDiv);
		
		createjs.Sound.play("dart");
	}
	
	function createDroneBullet() {
	
		
		
		var bulletDroneDiv = document.createElement('div');
		
		
		bulletDroneDiv.id = "bulletDrone";
		
		
		
		for (var i=0; i < drones.length; i++) {
		
			bulletDroneDiv.size = 12;
			bulletDroneDiv.speedX = 0; 
			bulletDroneDiv.speedY = 4;
		
		
			bulletDroneDiv.currentX = Math.random() * gameDiv.width; 
			bulletDroneDiv.currentY =  drones[i].currentY + bulletDroneDiv.size;

		}
		
		gameDiv.appendChild(bulletDroneDiv);
		bulletsDrone.push(bulletDroneDiv);
		createjs.Sound.play("laser");
		
		var rand = Math.round(Math.random() * (4000 - 500)) + 500;	
		setTimeout(createDroneBullet, rand);
	}
	
	
	

	
	function createSoldierBullet() {
	
		
		var bulletSoldierDiv = document.createElement('div');
		
		
		bulletSoldierDiv.id = "bulletSoldier";
		
		
		
		for (var i=0; i < soldiers.length; i++) {
		
		bulletSoldierDiv.size = 12;
		bulletSoldierDiv.speedX = 5; 
		bulletSoldierDiv.speedY = 0;
		
				
		bulletSoldierDiv.currentX = soldiers[i].currentX + bulletSoldierDiv.size; 
		bulletSoldierDiv.currentY =  soldiers[i].currentY + bulletSoldierDiv.size;;
		
		
		
		}
		gameDiv.appendChild(bulletSoldierDiv);
		bulletsSoldier.push(bulletSoldierDiv);
		createjs.Sound.play("gun");
		
		 var rand = Math.round(Math.random() * (4000 - 500)) + 500;	
		setTimeout(createSoldierBullet, rand);
	}
	
	

	
	function removeItems(itemsToRemove, theArray, theDiv) {
	
		
		for (var i=0; i < itemsToRemove.length; i++) {
		
		
			var index = theArray.indexOf(itemsToRemove[i]);
			
			
			theArray.splice(index, 1);
			
			
			theDiv.removeChild(itemsToRemove[i]);
		}
	}
	
	
	function flyBullets() {
	
		
		var waste = new Array();
		
		for (var i=0; i<bullets.length; i++) {
			
			bullets[i].currentX += bullets[i].speedX;
			bullets[i].currentY += bullets[i].speedY;
			
			
			bullets[i].style.left = bullets[i].currentX + "pt";
			bullets[i].style.top = bullets[i].currentY + "pt";
			
			
			if ( bullets[i].currentX > gameDiv.width) {
				
				waste.push(bullets[i]);
			}
			
			removeItems(waste, bullets, gameDiv);	
		}
	}
		
	function flyBulletsDrone() {
		
		var waste = new Array();
		
		for (var k=0; k<bulletsDrone.length; k++) {
			
			
			bulletsDrone[k].currentX += bulletsDrone[k].speedX;
			bulletsDrone[k].currentY += bulletsDrone[k].speedY;
			
			
		
			bulletsDrone[k].style.left = bulletsDrone[k].currentX + "pt";
			bulletsDrone[k].style.top = bulletsDrone[k].currentY + "pt";
			
			
			
			if (bulletsDrone[k].currentY > gameDiv.height+10) {
				
				waste.push(bulletsDrone[k]);
			}
		}
		
		removeItems(waste, bulletsDrone, gameDiv);
		
			
	}
	
	
	
	function flyBulletsSoldier() {
		
		var waste = new Array();
		
		for (var k=0; k<bulletsSoldier.length; k++) {
			
			
			bulletsSoldier[k].currentX -= bulletsSoldier[k].speedX;
			bulletsSoldier[k].currentY -= bulletsSoldier[k].speedY;
			
			
		
			bulletsSoldier[k].style.left = bulletsSoldier[k].currentX + "pt";
			bulletsSoldier[k].style.top = bulletsSoldier[k].currentY + "pt";
			
			
			
			if (bulletsSoldier[k].currentY < 0) {
				
				waste.push(bulletsSoldier[k]);
			}
		}
		
		removeItems(waste, bulletsSoldier, gameDiv);
		
			
	}
	

	
	function updateSnakeSpeed() {
		
		if (!left && !right) {
			snake.speedX /= 1.1;
		}
		else {
			if (left) {
				snake.speedX -= 0.1;
			}
			if (right) {
				snake.speedX += 0.1;
			}
		}
		
		
	}
	
	
	function updateSnakeLocation() {
		
		
		var oldX = snake.currentX;
		var oldY = snake.currentY;
		
		snake.currentX += snake.speedX;
		snake.currentY += snake.speedY;
		
		if (snake.currentX <= 3.0 || snake.currentX >= gameDiv.width) {
			snake.currentX = oldX;
			snake.speedX = 0;
		}
		
		if (snake.currentY <=3.0 || snake.currentY >= gameDiv.height) {
			snake.currentY = oldY;
			snake.speedY = 0;
		}
	
		
		snake.style.left = snake.currentX + "pt";
		snake.style.top = snake.currentY + "pt";		
	}
	

	
	function createDrone() {
	
		
		var droneDiv = document.createElement('div');
		
		
		droneDiv.id = "drone";
		
		
		droneDiv.size = 24;
		droneDiv.currentX = 0; 
		droneDiv.currentY = gameDiv.top;
		droneDiv.speedX = 2;
		droneDiv.speedY = 0;
		
		
		drones.push(droneDiv);
		
		gameDiv.appendChild(droneDiv);
	

		setTimeout(createDrone,500);
	}
	
	function createSoldier() {
	
		
		var soldierDiv = document.createElement('div');
		
		
		soldierDiv.id = "soldier";
		
		
		soldierDiv.size = 40;
		
		soldierDiv.currentX = gameDiv.width; 
		soldierDiv.currentY = gameDiv.height - 10;
		soldierDiv.speedX = -2; 
		soldierDiv.speedY = 0;
		
		
		soldiers.push(soldierDiv);
		
		gameDiv.appendChild(soldierDiv);
		
		
		setTimeout(createSoldier, Math.round(Math.random() * 2000));
		
		
		
	}
	
	
	function flySoldiers() {
	
		
		var waste = new Array();
		
		
		for (var i=0; i<soldiers.length; i++) {
			
			soldiers[i].currentX += soldiers[i].speedX;
			soldiers[i].currentY += soldiers[i].speedY;
			
			
			soldiers[i].style.left = soldiers[i].currentX + "pt";
			soldiers[i].style.top = soldiers[i].currentY + "pt";
			
			
			if (soldiers[i].currentX < 0) {
				
				waste.push(soldiers[i]);
				
			}
		}
		
		removeItems(waste, soldiers, gameDiv);		
	}
	
	function flyDrones() {
	
		
		var waste = new Array();
		
		
		for (var i=0; i<drones.length; i++) {
			
			drones[i].currentX += drones[i].speedX;
			drones[i].currentY += drones[i].speedY;
			
			
			drones[i].style.left = drones[i].currentX + "pt";
			drones[i].style.top = drones[i].currentY + "pt";
			
			
			if (drones[i].currentX > gameDiv.width) {
				
				waste.push(drones[i]);
				
			}
		}
		
		removeItems(waste, drones, gameDiv);		
	}
	
	function isColliding(b1, b2) {
	
		if ((b1.currentX > b2.currentX + b2.size - 1) || // is b1 on the right side of b2?
			(b1.currentY > b2.currentY + b2.size - 1) || // is b1 under b2?
			(b2.currentX > b1.currentX + b1.size - 1) || // is b2 on the right side of b1?
			(b2.currentY > b1.currentY + b1.size - 1))   // is b2 under b1?
		{
			// no collision
			return false;
		}
 
		// collision
		return true;	
	}

	function checkBulletCollisions() {
	
		var hitBullets = new Array();
		var hits = new Array();
		
		for (var i=0; i<bullets.length; i++) {
		
			hits.splice(0, hits.length);
			for (var j=0; j<drones.length; j++) {
				
				if (isColliding(bullets[i], drones[j]) == true && lethal == true) {
					createjs.Sound.play("explosion");
					hitBullets.push (bullets[i]);
					hits.push (drones[j]);					
					mobHits++;
					break;
				}				
			}
			removeItems(hits, drones, gameDiv);
			addExplosions(hits);			
		}
		removeItems(hitBullets, bullets, gameDiv);
		
		
	}
	
	
	function checkStuns() {
	
		var hitBullets = new Array();
		var hits = new Array();
		
		
		for (var i=0; i<bullets.length; i++) {
			hits.splice(0, hits.length);
			
				for (var j=0; j<soldiers.length; j++) {
				if (isColliding(bullets[i], soldiers[j]) == true && lethal == false) {
					createjs.Sound.play("stunsound");
					
					hitBullets.push (bullets[i]);
					hits.push (soldiers[j]);					
					mobHits++;
					soldiers[j].speedX = 0;
					soldiers[j].id = "stun";
					break;
					
				} else if (isColliding(bullets[i], soldiers[j]) == true && lethal == true) {
				
				
					createjs.Sound.play("killsound");
					
					hitBullets.push (bullets[i]);
					hits.push (soldiers[j]);					
					mobHits--;
					removeItems(hits, soldiers, gameDiv);
					addDeaths(hits);
					break;
				
				}
				
							
				}
		}

		
		removeItems(hitBullets, bullets, gameDiv);
				
	}
	
		
	
	function addExplosions(hits) {
		
		for (var j=0; j<hits.length; j++) {
				
			hits[j].id = "explosion";
			hits[j].size = 96;
			hits[j].style.width = hits[j].size+"px";
			hits[j].style.height = hits[j].size+"px";
			hits[j].style.opacity = "0.8";
			hits[j].removeExplosion = function() { 
				var theDiv = this;
				window.setTimeout( function() { 				
						gameDiv.removeChild(theDiv); 
					}, 800);  
				};
				
			gameDiv.appendChild(hits[j]);			
			hits[j].removeExplosion();
		}
	}
	
	function addDeaths(hits) {
		
		for (var j=0; j<hits.length; j++) {
				
			hits[j].id = "death";
			hits[j].size = 72;
			hits[j].style.width = hits[j].size+"px";
			hits[j].style.height = hits[j].size+"px";
			hits[j].style.opacity = "0.8";
			hits[j].removeDeath = function() { 
				var theDiv = this;
				window.setTimeout( function() { 				
						gameDiv.removeChild(theDiv); 
					}, 800);  
				};
				
			gameDiv.appendChild(hits[j]);			
			hits[j].removeDeath();
		}
	}
	
	function removeExplosion(hit) {
		gameDiv.removeChild(hit);
	}
	
	function removeDeath(hit) {
		gameDiv.removeChild(hit);
	}
	
	function checkSnakeCollision() {
			
		for (var k=0; k<bulletsSoldier.length; k++) {
			if (isColliding(snake, bulletsSoldier[k]) == true) {
				canContinue = false;
				endGame();
				return;
			}				
		}

			for (var i=0; i<bulletsDrone.length; i++) {
			if (isColliding(snake, bulletsDrone[i]) == true) {
				canContinue = false;
				endGame();
				return;
			}				
		}			
	}
	
	function captureSoldier() {
			
		var waste = new Array();
		
			for (var i=0; i<soldiers.length; i++) {
				if (isColliding(snake, soldiers[i]) == true && soldiers[i].speedX==0) {
			
					waste.push(soldiers[i]);
				
					removeItems(waste, soldiers, gameDiv);
					createjs.Sound.play("capture");
					mobsCaptured++;
					return;
				}				
			}			
	}

	function jump() {
		if (isJumping == false) {
			yVel = -15;
			isJumping = true;
		}
	}
 
		
		
	
	function endGame() {
		
		
		createjs.Sound.removeSound("start");
		createjs.Sound.removeSound("gun");
		createjs.Sound.removeSound("laser");
		
		bg.style.background = "url('gameover.jpg') fixed no-repeat black";
		bg.style.backgroundSize = "1000px 667px";
		
		var score = document.getElementById("endScore");
		
		score.innerHTML = "You scored " + parseInt(mobHits + mobsCaptured) + " points!";
		
		
		createjs.Sound.play("gameover");
		gameDiv.style.cursor ="pointer";
		gameDiv.onclick = function restart() {
		location.reload();
		};
		
	}
	
	
	
	
		
	function updateScores() {
		document.getElementById("mob-hits").innerHTML = "Hits: " + mobHits;
		document.getElementById("mobs-captured").innerHTML = "Captures: " + mobsCaptured;
		
		if(lethal==false) {
		bul.style.background= "url('assets/dart.png') left top no-repeat";
		bul.style.color = "green";
		bul.innerHTML = "Non-lethal";
		
		
		} else {
		bul.style.background= "url('assets/let.png') left top no-repeat";
		bul.style.color = "red";
		bul.innerHTML = "Lethal";
 
		}
	}
	
	
	function animate() {
		

		requestAnimationFrame(animate);
		
		
		if (isJumping) {
		yVel += gravity;
		snake.currentY += yVel;
		
         if (snake.currentY > gameDiv.height) {
             snake.currentY = gameDiv.height-10;
             yVel = 0;
             isJumping = false;
            }
		}
	
		
		if (canContinue == false) {
		
			return;
		}
			

		if (snake == null) {
			
			snake = createSnake();
			
			
			document.addEventListener('keydown', onKeyPressed);
			document.addEventListener('keyup', onKeyReleased);					
			
			
			createDrone();
			createSoldier();
			createDroneBullet();
			createSoldierBullet();
					
		}
		else {
			updateSnakeSpeed();
		
			updateSnakeLocation();
		
			flyBullets();
			
			flyBulletsDrone();
			
			flyBulletsSoldier();
			
			flyDrones();
			
			flySoldiers();
			
			checkBulletCollisions();
			
			checkSnakeCollision();
			
			checkStuns();
			
			updateScores();
			
		}
	}	
