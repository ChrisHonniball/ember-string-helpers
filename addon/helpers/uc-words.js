import { helper } from '@ember/component/helper';

export function ucWords(params, hash) {
  var string =  String(params[0]),
    force = (hash.force === true) ? true : false;

  if(!string) {

    return params[0];
  }

  if(force) {
    string = string.toLowerCase();
  }

  return string.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
    return $1.toUpperCase();
  });
}

export default helper(ucWords);
