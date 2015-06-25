import Ember from 'ember';

export function formatDate(params, hash) {
  var value = params[0], formattedDate,
    format = hash.format || "dddd, MMMM Do YYYY, h:mm a",
    inputFormat = hash.inputFormat;
  
  switch( value ){
    case "now":
      inputFormat = format;
      value = moment().format(format);
    break;
    
    case "0000-00-00":
    case "0000-00-00 00:00:00":
    case "":
    case undefined:
    case null:
      return "No Date Provided";
  }
  
  if( !inputFormat ){
    if(value.length === 10){
      if( value.match(/-/) ){
        inputFormat = "YYYY-MM-DD";
      } else if( value.match(/\//) ){
        inputFormat = "MM/DD/YYYY";
      } else {
        console.log(
          "%c{{formatDate}} unable to determine inputFormat. Returning unformatted date.",
          "color: red;"
        );
        return value;
      }
    } else {
      if( value.match(/-/) ){
        inputFormat = "YYYY-MM-DD HH:mm:ss";
      } else if( value.match(/\//) ){
        inputFormat = "MM/DD/YYYY HH:mm:ss";
      } else {
        console.log(
          "%c{{formatDate}} unable to determine inputFormat. Returning unformatted date.",
          "color: red;"
        );
        return value;
      }
    }
  }
  
  formattedDate = moment(value, inputFormat).format(format);
  
  /*
  console.log(
    "%c{{formatDate}} value: %s, inputFormat: %s, format: %s, formattedDate: %s",
    "color: chocolate;", // http://www.w3schools.com/html/html_colornames.asp
    value,
    inputFormat,
    format,
    formattedDate
  );
  //*/
  
  return formattedDate;
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
