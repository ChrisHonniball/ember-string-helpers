import Ember from 'ember';

export function formatPhone(params/*, hash*/) {
  var phone = params[0];
  
  if( !phone ){
    console.warn(
      "%c{{format-phone}} Invalid phone number passed: %s",
      "color: orange;", // http://www.w3schools.com/html/html_colornames.asp
      phone
    );
    return phone;
  }
  
  return String(phone).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export default Ember.Helper.helper(formatPhone);
