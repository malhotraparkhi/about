let imgarr=["IMG_1428_JPEG.jpg","IMG_4181.jpg","Parkhi Malhotra.jpg"];
var mainimg=document.getElementById("bitmoji-div");
function slideswitcher(number){
 mainimg.style.backgroundImage="url('assets/img/"+imgarr[number]+"')";
}