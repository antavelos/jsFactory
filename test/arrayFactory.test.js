var assert = require('assert'),
	factory = require('../arrayFactory');

module.exports = {
	'unique': function() {
		assert.deepEqual([1,2,3,4], [1,2,2,3,3,2,1,1,2,3,4,3,3,3,4,3,3,2,2,1].unique());
	},
	'frequencies': function() {
		assert.deepEqual({1:1, 2:2, 3:3, 4:4}, [1,2,3,4,2,3,4,3,4,4].frequencies());
	},
	'shuffle': function() {
		assert.deepEqual(false, [1,2,3,4,5].shuffle() === [1,2,3,4,5]);
	}
}; 