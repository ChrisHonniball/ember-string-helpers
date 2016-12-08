import { formatDate } from '../../../helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('gibberish date', function(assert) {
  var result = formatDate(['gibberish'], {});
  assert.equal(result, 'gibberish');
});

test('default format of 0', function(assert) {
  var result = formatDate(['0000-00-00 00:00:00'], {});
  assert.equal(result, '0000-00-00 00:00:00');
});

test('default format', function(assert) {
  var result = formatDate(['2015-06-25 16:09:23'], {});
  assert.equal(result, 'Thursday, June 25th 2015, 4:09 pm');
});

test('date with format', function(assert) {
  var result = formatDate(['2015-06-25 16:09:23'], {format:'MM/DD/YYYY'});
  assert.equal(result, '06/25/2015');
});

test('date with complicated format', function(assert) {
  var result = formatDate(['2015-06-25 16:09:23'], {format:'ddd, MMM Do, YYYY h:mm a'});
  assert.equal(result, 'Thu, Jun 25th, 2015 4:09 pm');
});

test('now with format', function(assert) {
  var result = formatDate(['now'], {format:'dddd, MMMM Do YYYY h:mm a'});
  assert.ok(result);
});
