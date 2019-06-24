import { Entry } from "./entry-logic.js";
import './styles.css';

var entry;
var hInput;
var bInput;
var wCount;
var vCount;
var cCount;
var counters = [];
var i = 0;
var teaser;

$(function() {

  $("form").submit(function(event){
    event.preventDefault();

    hInput = $("input#header").val();
    bInput = $("input#body").val();

    // console.log(hInput);
    // console.log(bInput);

    entry = new Entry(hInput, bInput);

    console.log("entry "+entry.body);



    wCount = entry.Words();
    counters.push(wCount);
    vCount = entry.Vowel();
    counters.push(vCount);
    cCount = entry.Consonants();
    counters.push(cCount);

    $("#output").prepend("<h1>"+hInput+"</h1><br><h2><span id="'teaser'"></span><span id="'text'"></span></h2>");


    $("#title").prepend(hInput);
    $("#text").prepend(bInput);

    counters.forEach(function(number){
      if (i == 0){
        $("#counter").append("Word Count in body: "+number + "<br>");
        i++;
      } else if (i == 1) {
        $("#counter").append("Vowel Count in body: "+number + "<br>");
        i++;
      } else if (i == 2) {
        $("#counter").append("Consonant Count in body: "+number + "<br>");
        i++;
      }
    });

    teaser = entry.Teaser();
    $("#teaser").text(teaser);
    $("#teaser").click(function(){
      $("#text").show();
      $("#teaser").hide();
    })
  });
});
