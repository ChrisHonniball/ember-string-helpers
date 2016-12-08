import { upperCase } from '../../../helpers/upper-case';
import { module, test } from 'qunit';

module('Unit | Helper | upper case');

test('all lower-case', function(assert) {
  var result = upperCase(['hello world']);
  assert.equal(result, 'HELLO WORLD');
});

test('mixed case', function(assert) {
  var result = upperCase(['heLlO wOrlD']);
  assert.equal(result, 'HELLO WORLD');
});
