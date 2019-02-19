import { substr } from 'dummy/helpers/substr';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | format-date', function(hooks) {
  setupTest(hooks);

	// Replace this with your real tests.
	test('number', function(assert) {
		let result = substr([42]);
		assert.equal(result, 42);
	});

	test('string', function(assert) {
		let result = substr(['substr'], {});
		assert.equal(result, 'substr');
	});

	test('empty object', function(assert) {
		let result = substr([{}]);
		assert.deepEqual(result, {});
	});

	test('object with properties', function(assert) {
		let result = substr([{a: 1, b: 2 }]);
		assert.deepEqual(result, {a: 1, b: 2 });
	});

	test('start >= length', function(assert) {
		let result = substr(['abcdefghij'], {start: 20, length: 2});
		assert.equal(result, '');
	});

	test('start <= -1', function(assert) {
		let result = substr(['abcdefghij'], {start: -3, length: 2});
		assert.equal(result, 'hi');
	});

	test('start == 1, length ommited ', function(assert) {
		let result = substr(['abcdefghij'], {start: 1});
		assert.equal(result, 'bcdefghij');
	});

	test('start == 1, length 0 ', function(assert) {
		let result = substr(['abcdefghij'], {start: 1, length: 0});
		assert.equal(result, '');
	});

	test('start == 1, length is negative ', function(assert) {
		let result = substr(['abcdefghij'], {start: 1, length: -1});
		assert.equal(result, '');
	});
});