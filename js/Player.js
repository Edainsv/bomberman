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
				if (this.isPossibleToWalk(this.map.position[this.posX][this.posY-1])) {
					player.remove();
					this.posY--;
					this.map.position[this.posX][this.posY].appendChild(player)
				}
				break;
				
			case 38: // Haut				
				if (this.isPossibleToWalk(this.map.position[this.posX-1][this.posY])) {
					player.remove();
					this.posX--;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;
				
			case 39: // Droite				
				if (this.isPossibleToWalk(this.map.position[this.posX][this.posY+1])) {
					player.remove();
					this.posY++;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;
				
			case 40: // Bas
				if (this.isPossibleToWalk(this.map.position[this.posX+1][this.posY])) {
					player.remove();
					this.posX++;
					this.map.position[this.posX][this.posY].appendChild(player);
				}
				break;

			case 32: // Bombe
				this.placeBomb();
				break;

			default:
				// Retourne la touche pressée
				console.log(key);
				break;
		}
	}

	isPossibleToWalk(e) {
		if (!e.classList.contains(this.map.blocks.unbreakable) && !e.classList.contains(this.map.blocks.breakable) && !e.classList.contains('bomb')) {
			return true;
		}
	}

	placeBomb() {
		// this.map.position[this.posX][this.posY].classList.add('normal_bomb', 'bomb');
	}

	getPosition() {
		return console.log('Vous êtes en [' + this.posX + ':' + this.posY + ']');
	}

	infoMap() {
		return this.map.position;
	}
}
