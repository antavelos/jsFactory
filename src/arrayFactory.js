
if (typeof Array.prototype.unique !== 'function') {
	Array.prototype.unique = function() {
		uniqueArray = [];
		this.forEach(function(value){
			if (uniqueArray.indexOf(value) == -1) {
				uniqueArray.push(value);
			}
		});

		return uniqueArray;
	}
}

if (typeof Array.prototype.frequencies !== 'function') {
	Array.prototype.frequencies = function() {
		var frequencyArray = {};
		
		this.forEach(function(value) {
			frequencyArray[value] = 0;
		});

		this.forEach(function(value) {
			frequencyArray[value]++;
		});
		
		return frequencyArray;
	}
}

if (typeof Array.prototype.shuffle !== 'function') {
	Array.prototype.shuffle = function() {
		for (var i = 0; i < this.length; i++) {
			rand = getRandomInt(0, this.length - 1);

			// swap the current item with the random one
			temp = this[i];
			this[i] = this[rand];
			this[rand] = temp;
		}
		return this;
	}
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}