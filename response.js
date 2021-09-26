const btn=document.querySelector('.btn');
const videocontainer=document.querySelector('.video-container');

const close=document.querySelector('.close');

btn.addEventListener('click',()=>{
    videocontainer.classList.add('show');
})

close.addEventListener('click',()=>{
    videocontainer.classList.remove('show');
    
})

function myFunction() {
    alert("You have successfully filled that subscribe form. Our team will contact you soon for further process..");
}
