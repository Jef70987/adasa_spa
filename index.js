let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carlDom = document.querySelector('.carousel');
let listitemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRan = 3000;
let timeautonext =10000;
let runTimeOut;
let runautorun = setTimeout(()=>{
    nextDom.click();
},timeautonext);
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listitemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carlDom.classList.add('next');
    }else{
        let positionlastitem = itemSlider.length = 1;
        listitemDom.prepend(itemSlider[positionlastitem]);
        thumbnailDom.prepend(itemThumbnail[positionlastitem]);
        carlDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout (()=> { 
        carlDom.classList.remove('next');
        carlDom.classList.remove('prev');
    },timeRan);

    clearTimeout(runautorun);
    runautorun = setTimeout(()=>{
        nextDom.click();
    },timeautonext);
}
