import Ember from 'ember';
import { number_format } from 'ember-string-helpers/utils/functions';

export function numberFormat(params, hash) {
  var value = String(params[0]) || "0",
    decimals = parseInt(hash.decimals) || 2,
    decimalPoint = hash.decimalPoint || ".",
    thousandsSeparator = hash.thousandsSeparator || ",",
    trimZeros = hash.trimZeros || false;
  
	if(value === 0 || value === '0'){
		return 0;
	}
  
  var formattedNum = number_format(value, decimals, decimalPoint, thousandsSeparator);
	
	if( trimZeros ){
		formattedNum = formattedNum.replace(/^0+|0+$/g, '').replace(/\.$/, '');
	}
  
  if(formattedNum === "") {
    return 0;
  }
  
	return formattedNum;
}

export default Ember.HTMLBars.makeBoundHelper(numberFormat);
