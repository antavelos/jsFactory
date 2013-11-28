var assert = require('assert'),
	factory = require('../src/arrayFactory');

module.exports = {
	'unique': function() {
		assert.deepEqual([1,2,3,4], [1,2,2,3,3,2,1,1,2,3,4,3,3,3,4,3,3,2,2,1].unique());
	},
	'frequencies': function() {
		assert.deepEqual({1:1, 2:2, 3:3, 4:4}, [1,2,3,4,2,3,4,3,4,4].frequencies());
	},
	'shuffle': function() {
		assert.deepEqual(false, [1,2,3,4,5].shuffle() === [1,2,3,4,5]);
	},
	'zip': function() {
		// assert.deepEqual(-1, [1,2,3,4,5].zip('a'));
		assert.deepEqual([1,2,3,4,5], [1,2,3,4,5].zip([]));
		assert.deepEqual([1,2,3,4,5], [].zip([1,2,3,4,5]));
		assert.deepEqual([1,2,3,4,5,6,7,8,9], [1,3,5,7,9].zip([2,4,6,8]));
		assert.deepEqual([2,1,4,3,6,5,8,7,9], [2,4,6,8].zip([1,3,5,7,9]));
	}
}; 