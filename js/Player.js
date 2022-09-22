class Player {
	constructor(posX, posY, map, player_id) {
		this.posX = posX;
		this.posY = posY
		this.map = map;
		this.player_id = player_id;
	}

	initializePlayer() {
		// Définition du personnage
		var perso = document.createElement('div');
		perso.id = this.player_id;
		perso.classList.add('perso');
		this.map.position[this.posX][this.posY].appendChild(perso);
	}

	moveDirection(key) {
		var player = document.getElementById('player_1');

		switch (key) {
			case 37: // Gauche
				if (this.map.position[this.posX][this.posY-1].classList.contains(this.map.blocks.grass)) {
					player.remove();
					this.posY--;
					this.map.position[this.posX][this.posY].appendChild(player)
				}
				break;
				
			case 38: // Haut				
				if (this.map.position[this.posX-1][this.posY].classList.contains(this.map.blocks.grass)) {
					player.remove();
					this.posX--;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;
				
			case 39: // Droite				
				if (this.map.position[this.posX][this.posY+1].classList.contains(this.map.blocks.grass)) {
					player.remove();
					this.posY++;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;
				
			case 40: // Bas
				if (this.map.position[this.posX+1][this.posY].classList.contains(this.map.blocks.grass)) {
					player.remove();
					this.posX++;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;

			default:
				// Retourne la touche pressée
				console.log(key);
				break;
		}
	}

	isPossibleToWalk(e) {
		if (this.map.position[this.posX][this.posY].classList.contains('b-walk-herbe')) {
			return true;
		}
	}

	getPosition() {
		return console.log('Vous êtes en [' + this.posX + ':' + this.posY + ']');
	}

	infoMap() {
		return this.map.position;
	}
}
