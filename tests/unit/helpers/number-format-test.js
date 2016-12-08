import { numberFormat } from '../../../helpers/number-format';
import { module, test } from 'qunit';

module('Unit | Helper | number format');

// Replace this with your real tests.
test('standard format, "," default 2 decimal places', function(assert) {
  var result = numberFormat(['1234.56'], {});
  assert.equal(result, '1,234.56');
});


test('standard format, "," seperation', function(assert) {
  var result = numberFormat(['1234.56'], {});
  assert.equal(result, '1,234.56');
});

test('decimal point and thousands separator flipped, explicit 2 decimal places', function(assert) {
  var result = numberFormat(['1234.56'], {decimals: 2, decimalPoint: ',', thousandsSeparator:' '});
  assert.equal(result, '1 234,56');
});

test('decimal point and no thousands separator, explicit 2 decimal places', function(assert) {
  var result = numberFormat(['1234.5678'], {decimals: 2, decimalPoint: '.', thousandsSeparator:''});
  assert.equal(result, '1234.57');
});


test('Integer, decimal point and thousands separator flipped, explicit 2 decimal places', function(assert) {
  var result = numberFormat(['67'], {decimals: 2, decimalPoint: ',', thousandsSeparator:'.'});
  assert.equal(result, '67,00');
});

test('Integer, default format, explicit 2 decimal places', function(assert) {
  var result = numberFormat(['67.311'], {decimals: 2});
  assert.equal(result, '67.31');
});

test('Rounding, default format, explicit 1 decimal places', function(assert) {
  var result = numberFormat(['1000.55'], {decimals: 1});
  assert.equal(result, '1,000.6');
});

test('Integer, decimal point and thousands separator flipped , explicit 5 decimal places', function(assert) {
  var result = numberFormat(['67000'], {decimals: 5, decimalPoint: ',', thousandsSeparator:'.'});
  assert.equal(result, '67.000,00000');
});

test('Rounding, decimal point 0 places', function(assert) {
  var result = numberFormat(['0.9'], {decimals: 0});
  assert.equal(result, '1');
});


test('Rounding, decimal point 2 places', function(assert) {
  var result = numberFormat(['1.20'], {decimals: 2});
  assert.equal(result, '1.20');
});


test("Trailing 0's, 4 decimal places", function(assert) {
  var result = numberFormat(['1.20'], {decimals: 4});
  assert.equal(result, '1.2000');
});

test("Trim 0's, 2 decimal places", function(assert) {
  var result = numberFormat(['1.20'], {decimals: 2, trimZeros:true});
  assert.equal(result, '1.2');
});

test("Trim 0's, 4 decimal places", function(assert) {
  var result = numberFormat(['1.20'], {decimals: 4, trimZeros:true});
  assert.equal(result, '1.2');
});

test("Trim 0's, 4 to 3 decimal places", function(assert) {
  var result = numberFormat(['1.2000'], {decimals: 3 });
  assert.equal(result, '1.200');
});

test("Decimal Point, space at the thousands, 2 decimal places", function(assert) {
  var result = numberFormat(['100 050.00'], {decimals: 2, decimalPoint: '.', thousandsSeparator:' ' });
  assert.equal(result, '100 050.00');
});

test("Scientific notation, explicit thousands separator with decimal point at 8 decimal places", function(assert) {
  var result = numberFormat(['1e-8'], {decimals: 8, decimalPoint: '.', thousandsSeparator:'' });
  assert.equal(result, '0.00000001');
});
