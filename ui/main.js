console.log('Loaded!');
var element = document.getElementById('txt');
element.innerHTML = 'New Text';

var img=document.getElementByID('img');
img.onclick = function(){
    img.style.marginLeft = '200px';
};