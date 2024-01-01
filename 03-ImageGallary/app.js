const scrollContainer = document.querySelector('.gallary');
const back = document.getElementById('back');
const next = document.getElementById('next');

scrollContainer.addEventListener('wheel', (e)=>{
e.preventDefault();
scrollContainer.scrollLeft += e.deltaY;
});

next.addEventListener('click', ()=>{
    scrollContainer.scrollLeft +=500;
});
back.addEventListener('click', ()=>{
    scrollContainer.scrollLeft -=500;
});