window.onload = function() {
	var map = new GameMap(17, 17, 'canvas');
	var player1 = new Player(1, 1, map, 'player_1');

	map.initializeMap(); // Construit la map
	player1.initializePlayer();

	// map.constructMap()

	// Detecte l'appuie d'une touche
	document.onkeydown = function(btnPress) {
		player1.moveDirection(btnPress.keyCode);
	}
}

