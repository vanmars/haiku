import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as haiku from './js/haikuChecker.js';

$(document).ready(function(){
  $('#haiku-form').submit(function(event){
    event.preventDefault();
    const inputtedLine1 = $('#line1').val();
    const inputtedLine2 = $('#line2').val();
    const inputtedLine3 = $('#line3').val();

    const result = haiku.checkHaiku(inputtedLine1, inputtedLine2, inputtedLine3);

    if (result) {
      $('#results-div').show();
      $('#results-div').html(`<h4>You have a Haiku!</h4><br><p>${inputtedLine1}</p><p>${inputtedLine2}</p><p>${inputtedLine3}</p>`);
    } else {
      $('#results-div').show();
      $('#results-div').html(`<h4>Wah wah! You do NOT have a Haiku!</h4>`);
    }
  });
});