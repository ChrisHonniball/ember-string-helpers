import { regexpReplace } from '../../../helpers/regexp-replace';
import { module, test } from 'qunit';

module('Unit | Helper | regexp replace');

// Replace this with your real tests.
test('replace space with underscore', function(assert) {
  var result = regexpReplace(['some long statement', '/ /', '_'], {flags:'g'});
  assert.equal(result, 'some_long_statement');
});

test('replace foo with bar', function(assert) {
  var result = regexpReplace(['I love foo!', '/foo/', 'bar'], {});
  assert.equal(result, 'I love bar!');
});

test('replace or, no global', function(assert) {
  var result = regexpReplace(['I misstype teh all of hte time...', 'teh|hte', 'the'], {} );
  assert.equal(result, 'I misstype the all of hte time...');
});

test('replace or, global', function(assert) {
  var result = regexpReplace(['I misstype teh all of hte time...', 'teh|hte', 'the'], {flags:'g'});
  assert.equal(result, 'I misstype the all of the time...');
});
