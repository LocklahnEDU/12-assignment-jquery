$(document).ready(function(){
    $ (".showmore").click(function() {
     $("#info").toggleClass("blur");
     $("button").addClass("showless");
       $("button").removeClass("showmore");
       
      });
    });

$(document).ready(function(){
    $ (".showless").click(function() {
     $("#info").toggleClass("blur");
       $("button").addClass("showmore");
       $("button").removeClass("showless");
      });
    });
