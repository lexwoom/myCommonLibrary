function autoType(elementClass, typingSpeed){
  if ($(window).width() >= '992'){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find("h1");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text(" ");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1000);
}
}

function autoTypeduo(elementClass, typingSpeed){
  if ($(window).width() >= '992'){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursorduo" style="right: initial; left:0;"></div>');
  thhis = thhis.find("h2").first();
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text(" ");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1000);
}
}

$(document).ready(function(){
  autoType(".autotitle",50);
  setTimeout (function() {$(".cursor").css("display", "none")}, 2700);
  setTimeout (function(){autoTypeduo(".autosubtitle",50)}, 2700);
  setTimeout (function() {$(".cursorduo").css("display", "none")}, 6000);
});