let welcome = document.querySelector('.welcome-box');
let start= document.querySelectorAll('.animation');

for(let i=0; i< start.length;i++)
{
    start[i].style.animationPlayState = "paused";
    setTimeout(()=>
    {
        start[i].style.animationPlayState = "running";
    },1000);
   
}

  
const intro=()=>
{
  welcome.style.display = "none";
}

setTimeout(() => {
  welcome.style.display = "none";
  
}, 1000);

//==========
let Music =document.querySelector('#audio');
let musicButton=document.querySelector('#playMusic');
const playMusic=()=>
{
  if(Music.paused)
  {
    musicButton.textContent="Stop";
    Music.play();
    
  }
  else{
    musicButton.textContent="Play";
    Music.pause();
  }
}



let animation = {

  revealDistance : 150,
  initialOpacity : 0,
  transitionDelay : 0,
  transitionDuration : '3s',
  transitionProperty : 'all',
  transitionTimingFunction : 'ease'
}
let revealableContainers = document.querySelectorAll(".revealable");
const reveal=()=>
{
  for( let i=0; i<revealableContainers.length;i++)
  {  
    let windowHeight = window.innerHeight;
    
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
  /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
      
    } else {
  /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
     
    }
  }
  
}
console.log("Thank you for visiting my website!!! ><");
musicButton.addEventListener('click',playMusic);
window.addEventListener('scroll', reveal);
