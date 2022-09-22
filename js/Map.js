class GameMap {
	constructor(sizeX, sizeY, idCanvas) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.canvas = document.getElementById(idCanvas);

		this.position = [];
	}

	constructMap() {
		// Définition de la map
		for (let x = 0; x < this.sizeX; x++) {
			this.position[x] = [];

			for (let y = 0; y < this.sizeY; y++) {
				this.position[x][y] = document.createElement('div');

				this.position[x][y].style.width = 800 / this.sizeX + 'px';
				this.position[x][y].style.height = 800 / this.sizeY + 'px';

				this.canvas.appendChild(this.position[x][y]);
			}
		}

		// Block Marcher
		for (let x = 0; x < this.sizeX; x++) {
			for (let y = 0; y < this.sizeY; y++) {
				this.position[x][y].classList.add('b-walk-herbe')
			}
		}

		// Block Incassable Contour
		for (let x = 0; x < this.sizeX; x++) {
			this.position[x][0].classList.add('b-incassable');
			this.position[x][this.sizeY-1].classList.add('b-incassable');

			// Retirer les class CSS qui autorisent le passage
			this.position[x][0].classList.remove('b-walk-herbe');
			this.position[x][this.sizeY-1].classList.remove('b-walk-herbe');
		}
		for (let y = 0; y < this.sizeY; y++) {
			this.position[0][y].classList.add('b-incassable');
			this.position[this.sizeX-1][y].classList.add('b-incassable');

			// Retirer les clas CSS qui autorisent le passage
			this.position[0][y].classList.remove('b-walk-herbe');
			this.position[this.sizeX-1][y].classList.remove('b-walk-herbe');
		}

		// Block Incassable Intérieur
		for (let x = 2; x < this.sizeX - 2; x+=2) {
			for (let y = 2; y < this.sizeY - 2; y+=2) {
				this.position[x][y].classList.add('b-incassable')
				this.position[x][y].classList.remove('b-walk-herbe');
			}
		}
	}

	getPosition(x, y) {
		return this.position[x][y];
	}

}