console.log('Loaded!');
var element = document.getElementById('txt');
element.innerHTML = 'New Text';
var margin = 0;
var img=document.getElementById('img');
function MoveRight(){
    margin = margin + 5;
    img.style.marginLeft = margin + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveRight, 100);
};