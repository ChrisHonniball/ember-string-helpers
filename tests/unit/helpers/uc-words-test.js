import { ucWords } from '../../../helpers/uc-words';
import { module, test } from 'qunit';

module('Unit | Helper | uc words');

// Replace this with your real tests.
test('all lower-case', function(assert) {
  var result = ucWords(['hello world'], {});
  assert.equal(result, 'Hello World');
});

test('all upper-case', function(assert) {
  var result = ucWords(['HELLO WORLD'], {});
  assert.equal(result, 'HELLO WORLD');
});

test('all upper-case | force = true', function(assert) {
  var result = ucWords(['HELLO WORLD'], {force: true});
  assert.equal(result, 'Hello World');
});


test('mixed case', function(assert) {
  var result = ucWords(['heLlO wOrlD'], {});
  assert.equal(result, 'HeLlO WOrlD');
});


test('mixed case | force = true', function(assert) {
  var result = ucWords(['heLlO wOrlD'], {force: true});
  assert.equal(result, 'Hello World');
});
