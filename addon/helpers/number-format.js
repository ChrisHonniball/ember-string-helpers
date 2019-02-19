import { helper } from '@ember/component/helper';
import { number_format } from 'ember-string-helpers/utils/functions';

export function numberFormat(params, hash) {
  var number = String(params[0]) || "0",
    decimals = (typeof hash.decimals !== 'undefined') ? parseInt(hash.decimals) : 2,
    decimalPoint = (typeof hash.decimalPoint !== 'undefined') ? hash.decimalPoint : ".",
    thousandsSeparator = (typeof hash.thousandsSeparator !== 'undefined') ? hash.thousandsSeparator : ",",
    trimZeros = (hash.trimZeros === true) ? true : false;
  
	if(number === 0 || number === '0'){
		return 0;
	}
  
  var formattedNum = number_format(number, decimals, decimalPoint, thousandsSeparator);
	
	if( trimZeros ){
		formattedNum = formattedNum.replace(/^0+|0+$/g, '').replace(/\.$/, '');
	}
  
  if(formattedNum === "") {
    return 0;
  }
  
	return formattedNum;
}

export default helper(numberFormat);
