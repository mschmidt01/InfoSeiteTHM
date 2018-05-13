/*This animation highlights a range of html elements from a grid. All elemts are part of an array. The allocation can be part of a filter a.o. */


var selectedArray = ['#box1','#box3','#box5','#box7']; /*Arrays can later be filled by functions*/
var notSelectedArray = ['#box2','#box4','#box6','#box8','#box9'];

for (var i = 0; i < selectedArray.length; i++) /* Arrays can not be tweened. Therefor u have to use a loop.*/
{
  TweenMax.to(selectedArray[i], 2, {css:{backgroundColor:"rgba(255, 255, 153, 1)",zIndex:1, scale: 1.1}, delay: 3}); /*zIndex ist important. It  sets the elements to a new layer, so they wont affect the other elements when growing*/
}


for (var j = 0; j < notSelectedArray.length; j++)
{
  TweenMax.to(notSelectedArray[j], 2, {css:{backgroundColor:"rgba(235, 235, 224, .85)", opacity: 0.2}, delay:3});
}
