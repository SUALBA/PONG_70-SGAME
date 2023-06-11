//Ahora es el momento de agregar la lógica del juego en JavaScript. 
//Primero, definimos algunas variables que necesitamos, como la velocidad de la pelota, 
//las posiciones de los jugadores y el puntaje.//
const ball = {
	speed: 2,
	x: 400,
	y: 300,
	dx: -2,
	dy: 2
}

const player1 = {
	y: 250
}

const player2 = {
	y: 250
}

const scoreboard = {
	player1score: 0,
	player2score: 0
}

let gameStarted = false;


function moveBall() {
	console.log("moving ball");
	ball.x += ball.speed * ball.dx;
	ball.y += ball.speed * ball.dy;

	if (ball.y <= 0 || ball.y >= 580) {
		ball.dy *= -1;
	}

	if (ball.x <= 40 && ball.x >= 20 && ball.y >= player1.y && ball.y <= player1.y + 80) {
		ball.dx *= -1;
		playPingSound();
	}
	
	if (ball.x >= 760 && ball.x <= 780 && ball.y >= player2.y && ball.y <= player2.y + 80) {
		ball.dx *= -1;
		playPingSound();
	}

	if (ball.x <= 0 || ball.x >= 800) {
		if (ball.x <= 0) {
			scoreboard.player2score++;
			document.getElementById("player2score").innerHTML = scoreboard.player2score;
			playOutSound();
		} else {
			scoreboard.player1score++;
			document.getElementById("player1score").innerHTML = scoreboard.player1score;
			playOutSound();	
		}
		
		ball.x = 400;
		ball.y = 300;
		ball.dx *= -1;
	  // Verifica si algún jugador ha alcanzado los 10 puntos
	  if (scoreboard.player1score === 10 || scoreboard.player2score === 10) {
        endGame();
    }
}
function endGame() {
    gameStarted = false;
    document.getElementById("game-over").style.display = "block";
    // Realiza otras acciones necesarias al finalizar el juego
    
    // Espera un breve periodo de tiempo antes de mostrar el botón de inicio
    setTimeout(function() {
        document.getElementById("game-over").style.display = "none";
        document.getElementById("start-btn").style.display = "block";
    }, 2000); // 2000 representa 2000 milisegundos o 2 segundos, puede ajustarse.
}
//He utilizado la función setTimeout() para programar una tarea que se ejecutará después de un breve periodo de tiempo. 
//Dentro de la función de retrollamada de setTimeout(), ocultamos el mensaje "GAME OVER" (sera visible 2") y mostramos el botón de inicio.

	function playPingSound() {	
		const pingSound = document.getElementById("ping-sound");
		pingSound.play();			//sonido al chocar
	  }
	  function playOutSound() {
		const pingSound = document.getElementById("out-sound");
		pingSound.play();		//sonido al perder la bola
	  }
	document.getElementById("ball").style.top = ball.y + "px";
	document.getElementById("ball").style.left = ball.x + "px";
}

function movePlayer1Up() {
	if (player1.y > 0) {
		player1.y -= 20;
		document.getElementById("player1").style.top = player1.y + "px";
	}
}

function movePlayer1Down() {
	if (player1.y < 520) {
        player1.y += 20;
        document.getElementById("player1").style.top = player1.y + "px";
    }
}

function movePlayer2Up() {
	if (player2.y > 0) {
		player2.y -= 20;
		document.getElementById("player2").style.top = player2.y + "px";
	}
}

function movePlayer2Down() {
	if (player2.y < 520) {
		player2.y += 20;
		document.getElementById("player2").style.top = player2.y + "px";
	}
}



function startGame() {
    gameStarted = true;
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("player1score").innerHTML = scoreboard.player1score;
    document.getElementById("player2score").innerHTML = scoreboard.player2score;
	scoreboard.player1score = 0;
	scoreboard.player2score = 0;
    ball.speed = 2; // Reiniciar la velocidad de la pelota
    draw();
}

function draw() {
	if (gameStarted) {
	  moveBall();
	}
	
	requestAnimationFrame(draw);
}


document.addEventListener("keydown", function(event) {
	if (event.key === "w") {
		movePlayer1Up();
	} else if (event.key === "s") {
		movePlayer1Down();
	} else if (event.key === "ArrowUp") {
		movePlayer2Up();
	} else if (event.key === "ArrowDown") {
		movePlayer2Down();
	}
});

document.addEventListener("keydown", function(event) {
	if (event.key === "w") {
		movePlayer1Up();
	} else if (event.key === "s") {
		movePlayer1Down();
	} else if (event.key === "ArrowUp") {
		movePlayer2Up();
	} else if (event.key === "ArrowDown") {
		movePlayer2Down();
	}
});

// inicia el juego cuando se presiona el botón "Start"
document.getElementById("start-btn").addEventListener("click", function() {
	startGame();
	draw();
});




// En este código, agregamos cuatro funciones para mover a los jugadores hacia arriba y hacia abajo.
// También usamos el método setInterval para llamar la función moveBall cada 30 milisegundos.

//Finalmente, agregamos un controlador de eventos para detectar 
//las teclas presionadas por los jugadores y llamar a las funciones correspondientes.