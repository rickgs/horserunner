  y = 280;
  distance = 0;
  direction = 2;
  jump = true;
  start = true;
  obstacle = 0;
  var oImg;
  var obstacleDistance = 0;
  var horseRight = 120;
  var obstacleHeight = 0;
  var horseBottom = 380;
  var obstacleSpeed = 0;
  var duck = false;
  horseHeight = 0;
  obstacleBottom = 125;
  var count = 0;
  speed = 10;
  updateTimer = 0;
  flash = false;

 
 function contentLoaded () {
	gamebackground = document.getElementById('gamebackground');
	horse = document.getElementById("horse");
	score = document.getElementById("score");
	wStart = document.getElementById("instructions");
	restart = document.getElementById("gamestart");
	
 restart.style.visibility = "hidden";
  var chars = new Array();
                var container = document.getElementById('container');

                window.addEventListener('keypress', function (e) {
				c = String.fromCharCode(e.keyCode);

                if ((e.keyCode === 119 || e.keyCode === 87) && duck == false) {
					
					if (start === true) {
						updateTimer = setInterval(update, 10);
						start = false
						wStart.innerHTML = "";
					} else if (jump === true) {
					direction = 0;
					jump = false;
					}
                }
				if (e.keyCode === 83 || e.keyCode === 115) {
				
				if (jump === true) {
					duck = true;
					
					y = 330;
					}
				} 
				
				
				
				
                }, false);
				
				 window.addEventListener('keyup', function (e) {
				 c = String.fromCharCode(e.keyCode);
				 
				  if (e.keyCode === 83 || e.keyCode === 115) {
				 duck = false;
				 y = 280;
				 } else {
				 console.log(e.keyCode);
				 }
				 }, false);
 
		function myFunction() {
}
 
 }
 
 function update() {
	console.log(count);
 
	if(count%2000 == 0 && count > 1) {
		speed = speed - 1;
		clearInterval(updateTimer);
		updateTimer = setInterval(update, (speed));
		flash = true;
		
	}
	if(count%400 == 0 && count%2000 != 0) {
	flash = false;
	}

	if(duck === true) {

		horse.setAttribute('height', '50px');
		horseHeight = 50;
	} else {
		horse.setAttribute('height', '100px');
		horseHeight = 0;
		}
	if(direction !== 2) {
		if(direction == 0) {
			if(distance < 56) {
				distance = distance + 7;
			}
			if(distance < 112 && distance >= 56) {
				distance = distance + 4;
				}
			if(distance >= 112) {
				distance = distance + 2;
			
				}
			if (distance == 156) {
			
				direction = 1;
			}
		} else {
			if(distance > 112) {
				distance = distance -2 ;
			} 
			if(distance <= 112 && distance > 56) {
				distance = distance - 4;
				}
			if(distance <=56) {
				distance = distance - 7;
			}
				if (distance == 0) {
					direction = 2;
					jump = true;
				}
		}
		horseBottom = 380 - distance - horseHeight;
		
		horse.style.top = (y - distance) + "px";
	}
	horse.style.top = (y - distance) + "px";
	
	if (count > 10000 && obstacle == 0) {

	clearInterval(updateTimer);
	updateTimer = setInterval(winUpdate, 10);
	return;
	
	
	
	
	
	
	
	}
	if(obstacle === 0 ) {
	
	obstacle = parseInt(1 + Math.random() * 5);
	oImg = document.createElement("img");
	
	oImg.setAttribute('src', 'obstacle' + obstacle + '.png'); 
	oImg.setAttribute('alt', 'na');
	oImg.style.position = 'absolute';
	oImg.style.left = '780px';
	
	switch(obstacle) {
	case 1: 
	obstacleDistance = 780;
	obstacleHeight = 336;
	obstacleBottom = 375;
		break;
	case 2:
	obstacleDistance = 780;
	obstacleHeight = 295;
	obstacleBottom = 375;
		break;
	case 3:
	obstacleDistance = 780;
	obstacleHeight = 270;
	obstacleBottom = 375;
	oImg.setAttribute('height', '105px');
	
		break;
	case 4:
	obstacleDistance = 780;
	obstacleHeight = 200;
	obstacleBottom = 229;
	obstacleSpeed = 2;
		break;
	case 5:
	obstacleDistance = 780;
	obstacleHeight = 280;
	obstacleSpeed = 1;
	obstacleBottom = 320;
	
		}
	oImg.style.top =  obstacleHeight + 'px'; //'125px';

	gamebackground.appendChild(oImg);
	
	} else {
	obstacleDistance = obstacleDistance - 5 - obstacleSpeed;
	oImg.style.left = obstacleDistance + "px";
	if(obstacleDistance < 0) {

		obstacle = 0
		obstacleDistance = 780;
		obstacleSpeed = 0;
		oImg.parentNode.removeChild(oImg);
	}
	}
	
	//if(obstacleDistance > horseRight - distance - 10 ) {
	if(obstacleDistance + 10 > horseRight) {
	
	} 
	else if (horseBottom - 100 + horseHeight > obstacleBottom  || horseBottom < obstacleHeight){
	

	}
	else{
	
	hImg = document.getElementById("horse");
	hImg.setAttribute('src', 'boom.gif');
	clearInterval(updateTimer);
	score.innerHTML = "Your final score was: " + parseInt(count/5);
	restart.innerHTML = "<button type='button' onclick='location.reload();' >Restart</button>"
	restart.style.visibility = "visible";
	return;
	
	}
 
 count = count + 1;
 if(flash == false) {
score.innerHTML = parseInt(count/5) ;
 } else if(count % 20 > -1 && count % 20 < 10) {
 score.innerHTML = parseInt(count/5);
 
} else {
score.innerHTML = "";
}
 
 }
 
 function winUpdate() {
if(obstacle == 0) {
	
	oImg.setAttribute('src', 'finish.png'); 
	oImg.setAttribute('alt', 'na');
	oImg.style.position = 'absolute';
	oImg.style.left = '700px';
	oImg.style.top = '300px';
	gamebackground.appendChild(oImg);
	obstacle = -1;
	obstacleDistance = 700;
} else {
	obstacleDistance = obstacleDistance - 5;
	oImg.style.left = obstacleDistance + "px";
	
	if(obstacleDistance + 10 < horseRight) {
	clearInterval(updateTimer);
	wStart.innerHTML = "Congratulations! You Win!";
	
	} 
}
	
 
	//clearInterval(updateTimer);
	//wStart.innerHTML = "Congratulations! You Win!";
 }
 