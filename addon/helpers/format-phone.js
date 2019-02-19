import { helper } from '@ember/component/helper';

export function formatPhone(params/*, hash*/) {
  var phone = params[0];
  
  if( !phone ){
    // eslint-disable-next-line no-console
    console.warn(
      "%c{{format-phone}} Invalid phone number passed: %s",
      "color: orange;", // http://www.w3schools.com/html/html_colornames.asp
      phone
    );
    return phone;
  }
  
  return String(phone).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export default helper(formatPhone);
