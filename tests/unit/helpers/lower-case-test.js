import { lowerCase } from '../../../helpers/lower-case';
import { module, test } from 'qunit';

module('Unit | Helper | lower case');

test('all upper-case', function(assert) {
  var result = lowerCase(['HELLO WORLD']);
  assert.equal(result, 'hello world');
});

test('mixed case', function(assert) {
  var result = lowerCase(['heLlO wOrlD']);
  assert.equal(result, 'hello world');
});
