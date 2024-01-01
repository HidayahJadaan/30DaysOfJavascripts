const hrs = document.getElementById('hrs');
const mins = document.getElementById('min');
const sec = document.getElementById('sec');

// we need to update the time in each second

setInterval(() => {


    const currentTime = new Date();
    
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10 ? "0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
    
}, 1000);