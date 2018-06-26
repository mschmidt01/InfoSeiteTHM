$(document).ready(function() {
    TweenMax.staggerFrom(".btn-sem", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.2);
    TweenMax.staggerFrom(".spez0, .spez1, .spez2", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.2);
            
          
    $(".btn-sem").click(function(e){
        let eventTarget = $(e.target);
        $(eventTarget).effect("shake", {times:4, distance:5, direction:"down"}, 800);
     });
    
});

