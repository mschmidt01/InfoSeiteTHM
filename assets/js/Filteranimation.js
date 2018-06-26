var btn= TweenMax.staggerFrom(".btn0, .btn1, .btn2, .btn3, .btn4, .btn5, .btn6", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.2);

var bla= TweenMax.staggerFrom(".spez0, .spez1, .spez2", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.2);


/*$(".bla").click(function(){
    TweenMax.to(".bla", 0.5, {opacity:0, x:+100, ease:Back.easeIn}, 0.1);
    //TweenMax.staggerFrom(".bla", 2, {scale:0.5, opacity:0, delay:1.5, ease:Elastic.easeOut}, 0.2);
});

$(".btn").click(function(){
    TweenMax.to(".btn", 0.5, {opacity:0, x:+100, ease:Back.easeIn}, 0.1);
    //TweenMax.staggerFrom(".btn", 2, {scale:0.5, opacity:0, delay:1.5, ease:Elastic.easeOut}, 0.2);
});
*/
$(document).ready(function() {
    
    //var filter= ["#filter0", "#filter1", "#filter2", "#filter3", "#filter4", "#filter5", "#filter6", "#filter7", "#filter8", "#filter9"];
    
    //var btn= [".btn0", ".btn1", ".btn2", ".btn3", ".btn4", ".btn5", ".btn6"];
    
   // var btn;
    var i;
    
    //for(i=0; i<filter.length; i++){}

            
          
    $("#filter0").click(function(){
        
   /* var btn;
        
        if(filter[i]=0){
            var btn=".btn0";
        }else if (filter[i]=1){
            var btn=".btn1";
        }else if (filter[i]=2){
            var btn=".btn2";
        }else if (filter[i]=3){
            var btn=".btn3";
        }else if (filter[i]=4){
            var btn=".btn4";
        }else if (filter[i]=5){
            var btn=".btn5";
        }else if (filter[i]=6){
            var btn=".btn6";
        }else if (filter[i]=7){
            var btn=".spez0";
        }else if (filter[i]=8){
            var btn=".spez1"; 
        }else{
            var btn=".spez2";
        }   
        */
    
        $(".btn0").effect("shake", {times:4, distance:5, direction:"down"}, 800);
     });
    
    $("#filter1").click(function(){
        $(".btn1").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter2").click(function(){
        $(".btn2").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter3").click(function(){
        $(".btn3").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter4").click(function(){
        $(".btn4").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter5").click(function(){
        $(".btn5").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter6").click(function(){
        $(".btn6").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter7").click(function(){
        $(".spez0").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter8").click(function(){
        $(".spez1").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });
    
    $("#filter9").click(function(){
        $(".spez2").effect("shake", {time:4, distance:5, direction:"down"}, 800);
    });

});

