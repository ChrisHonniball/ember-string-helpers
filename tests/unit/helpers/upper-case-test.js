import { upperCase } from 'dummy/helpers/upper-case';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | format-date', function(hooks) {
  setupTest(hooks);

  test('all lower-case', function(assert) {
    var result = upperCase(['hello world']);
    assert.equal(result, 'HELLO WORLD');
  });

  test('mixed case', function(assert) {
    var result = upperCase(['heLlO wOrlD']);
    assert.equal(result, 'HELLO WORLD');
  });

  test('Number type, no conversion', function(assert) {
    var result = upperCase([1]);
    assert.equal(result, 1);
  });

  test('empty', function(assert) {
    var result = upperCase([]);
    assert.equal(result, undefined);
  });

  test('object {}', function(assert) {
    var result = upperCase({});
    assert.equal(result, undefined);
  });
});