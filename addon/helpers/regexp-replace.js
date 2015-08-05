import Ember from 'ember';

export function regexpReplace(params, hash) {
  var string = params[0],
    regex = params[1].replace(/^(\/)(.*)+(\/)$/, '$2'),
    flags = hash.flags,
    regexPattern = new RegExp(regex, flags),
    replacePattern = params[2];
  
  return string.replace(regexPattern, replacePattern);
}

export default Ember.Helper.helper(regexpReplace);
