import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import * as haiku from './js/haikuChecker.js';

$(document).ready(function(){
  $('haiku-form').submit(function(event){
    event.preventDefault();;
    const inputtedLine1 = $('#line1').val();
    const inputtedLine2 = $('#line2').val();
    const inputtedLine3 = $('#line3').val();
  });
});