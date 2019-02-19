import { formatPhone } from 'dummy/helpers/format-phone';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | format-phone', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('formatPhone', function(assert) {
    var result = formatPhone(['8661239876']);
    assert.equal(result,'(866) 123-9876');
  });
});