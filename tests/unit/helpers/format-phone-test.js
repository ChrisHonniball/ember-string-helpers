import { formatPhone } from '../../../helpers/format-phone';
import { module, test } from 'qunit';

module('Unit | Helper | format phone');

// Replace this with your real tests.
test('formatPhone', function(assert) {
  var result = formatPhone(['8661239876']);
  assert.equal(result,'(866) 123-9876');
});
