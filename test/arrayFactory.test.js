var assert = require('assert'),
	factory = require('../src/arrayFactory');

module.exports = {
	// Testing Array.prototype.unique()
	'testUnique': function() {
		assert.deepEqual([1,2,3,4], [1,2,2,3,3,2,1,1,2,3,4,3,3,3,4,3,3,2,2,1].unique());
	},

	// Testing Array.prototype.freq()
	'testFrequencies': function() {
		assert.deepEqual({1:1, 2:2, 3:3, 4:4}, [1,2,3,4,2,3,4,3,4,4].frequencies());
	},

	// Testing Array.prototype.shuffle()
	'testShuffle': function() {
		assert.deepEqual(false, [1,2,3,4,5].shuffle() === [1,2,3,4,5]);
	},

	// Testing Array.prototype.zip()
	'testZipEmptyArument': function() {
		assert.deepEqual([1,2,3,4,5], [1,2,3,4,5].zip([]));
	},
	'testZipEmptyArray': function() {
		assert.deepEqual([1,2,3,4,5], [].zip([1,2,3,4,5]));
	},
	'testZipNormal': function() {
		assert.deepEqual([1,2,3,4,5,6,7,8,9], [1,3,5,7,9].zip([2,4,6,8]));
	},
	'testZipArraySmallerThanArument': function() {
		assert.deepEqual([2,1,4,3,6,5,8,7,9], [2,4,6,8].zip([1,3,5,7,9]));
	},

	// Testing Array.prototype.set()
	'testSetNormal': function() {
		assert.deepEqual([1,2,'a','a','a',6,7,8], [1,2,3,4,5,6,7,8].set(2,4,'a'));
	},

	// Testing Array.prototype.setAll()
	'testSetAll': function() {
		assert.deepEqual(['a', 'a', 'a', 'a', 'a'], [1,2,3,4,5].setAll('a'));
	},

	// Testing Array.prototype.rotate()
	'testRotateRight': function() {
		assert.deepEqual([4,5,6,1,2,3], [1,2,3,4,5,6].rotate(3));
	},
	'testRotateLeft': function() {
		assert.deepEqual([3,4,5,6,1,2], [1,2,3,4,5,6].rotate(-2));
	},
	'testRotateRightOffsetLongerThanLenth': function() {
		assert.deepEqual([4,5,6,1,2,3], [1,2,3,4,5,6].rotate(9));
	},
	'testRotateLeftOffsetLongerThanLenth': function() {
		assert.deepEqual([3,4,5,6,1,2], [1,2,3,4,5,6].rotate(-8));
	},
	'testRotateOffsetEqualToLength': function() {
		assert.deepEqual([1,2,3,4,5,6], [1,2,3,4,5,6].rotate(6));
	}

}; 