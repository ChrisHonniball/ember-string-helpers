import { helper } from '@ember/component/helper';

export function regexpReplace(params, hash) {
  var string = params[0],
    regex = params[1].replace(/^(\/)(.*)+(\/)$/, '$2'),
    flags = hash.flags,
    regexPattern = new RegExp(regex, flags),
    replacePattern = params[2];
  
  return string.replace(regexPattern, replacePattern);
}

export default helper(regexpReplace);
