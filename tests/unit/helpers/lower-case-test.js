import { lowerCase } from 'dummy/helpers/lower-case';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | lower-case', function(hooks) {
  setupTest(hooks);

  test('all upper-case', function(assert) {
    var result = lowerCase(['HELLO WORLD']);
    assert.equal(result, 'hello world');
  });

  test('mixed case', function(assert) {
    var result = lowerCase(['heLlO wOrlD']);
    assert.equal(result, 'hello world');
  });
});