// var wordCount = [];
var vowels = ['a','e','i','o','u'];
var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
var count;
var entryLength =[];
var teaser = [];


export function Entry (title, body) {
  this.title = title,
  this.body = body;
}

Entry.prototype.Words = function() {
  entryLength = this.body.split(" ");
  return entryLength.length;
};

Entry.prototype.Vowel = function() {
  count = 0;
  var arrayV = this.body.toLowerCase().split("");
  arrayV.forEach(function(letter){
    if (vowels.indexOf(letter) > -1) {
      count++;
    }
  });
  return count;
};

Entry.prototype.Consonants = function() {
  count = 0;
  var arrayC = this.body.toLowerCase().split("");
  arrayC.forEach(function(letter){
    if (consonants.indexOf(letter) > -1) {
      count++;
    }
  });
  return count;
};

Entry.prototype.Teaser = function() {
  count = 0;
  teaser = [];
  entryLength.forEach(function(word){
    if (count < 8) {
      teaser.push(word);
      teaser.push(" ");
      count++;
    }
  });
  return teaser.join(['']);
};
