//Ahora es el momento de agregar la lógica del juego en JavaScript. Primero, definimos algunas variables que necesitamos, como la velocidad de la pelota, las posiciones de los jugadores y el puntaje.//
var ball = {
	speed: 2,
	x: 400,
	y: 300,
	dx: -2,
	dy: 2
}

var player1 = {
	y: 250
}

var player2 = {
	y: 250
}

var scoreboard = {
	player1score: 0,
	player2score: 0
}

var gameStarted = false;

function moveBall() {
	console.log("moving ball");
	ball.x += ball.speed * ball.dx;
	ball.y += ball.speed * ball.dy;

	if (ball.y <= 0 || ball.y >= 580) {
		ball.dy *= -1;
	}

	if (ball.x <= 40 && ball.x >= 20 && ball.y >= player1.y && ball.y <= player1.y + 80) {
		ball.dx *= -1;
	}

	if (ball.x >= 760 && ball.x <= 780 && ball.y >= player2.y && ball.y <= player2.y + 80) {
		ball.dx *= -1;
	}

	if (ball.x <= 0 || ball.x >= 800) {
		if (ball.x <= 0) {
			scoreboard.player2score++;
			document.getElementById("player2score").innerHTML = scoreboard.player2score;
		} else {
			scoreboard.player1score++;
			document.getElementById("player1score").innerHTML = scoreboard.player1score;
		}
		
		ball.x = 400;
		ball.y = 300;
		ball.dx *= -1;
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
//para inicializar el juego



// En este código, agregamos cuatro funciones para mover a los jugadores hacia arriba y hacia abajo. También usamos el método setInterval para llamar la función moveBall cada 30 milisegundos.

//Finalmente, agregamos un controlador de eventos para detectar las teclas presionadas por los jugadores y llamar a las funciones correspondientes.