
function ArrayFactoryException(message){
	this.message = message;
	this.toString = function(){
		return message;
	};
}

/**
 * Returns the array with its unique elements.
 */
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

/**
 * Returns a dict with pairs of the unique values along with their 
 * frequencies.
 */
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

/**
 * Returns the array shuffled.
 */
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

if (typeof Array.prototype.zip !== 'function') {
	Array.prototype.zip = function(array) {
		if (!(array instanceof Array)) {
			throw new ArrayFactoryException('Function zip get only arrays as arguments.');
		}
		else {
			if (array.length == 0) {
				return this;
			}
			if (this.length == 0) {
				return array 
			}

			var zipped = new Array(),
				pair = this.length >= array.length ?
					   length = this.length:
					   length = array.length;

			;
			for (var i = 0; i < length; i++) {
				if (this[i]) {
					zipped.push(this[i])
				}
				if (array[i]) {
					zipped.push(array[i]);	
				}
			}
			return zipped//.concat(pair.second.slice(pair.first.length));
		}
	}
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}