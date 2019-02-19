import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formatDate(params, hash) {
  var date = params[0], formattedDate,
    inputFormat = hash.inputFormat,
    mDate = (date === 'now') ? moment() : moment(date, inputFormat),
    format = hash.format || "dddd, MMMM Do YYYY, h:mm a";

  if(typeof moment === 'undefined'){
    // eslint-disable-next-line no-console
    console.log(
      "%c{{format-date}} moment is undefined. Formatting disabled.",
      "color: red" // http://www.w3schools.com/html/html_colornames.asp
    );
    return date;
  }

  if(!mDate.isValid()) {
    // eslint-disable-next-line no-console
    console.log(
      "%c{{format-date}} invalid date.",
      "color: red" // http://www.w3schools.com/html/html_colornames.asp
    );
    return date;
  }

  formattedDate = mDate.format(format);

  return formattedDate;
}

export default helper(formatDate);
