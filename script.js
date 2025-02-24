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
    musicButton.textContent="🔇";
    Music.play();
    
  }
  else{
    musicButton.textContent="🎵";
    Music.pause();
  }
}



let animation = {

  revealDistance : 250,
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
let nextBtn = document.getElementById("nextBtn");
let hiddenBox1= document.getElementsByClassName("hiddenBox1");
let hiddenBox2= document.getElementsByClassName("hiddenBox2");
var hide=0;
const hideshow=()=>
{
  
  if(hide==0)
  {
    for (var i = 0; i < hiddenBox1.length; i++) {
      hiddenBox1[i].style.display="none";
      hiddenBox2[i].style.display="flex";
  
    }
    hide=1;
  }
  else
  {
    for (var i = 0; i < hiddenBox2.length; i++) {
      hiddenBox1[i].style.display="flex";
      hiddenBox2[i].style.display="none";
  
    }
    hide=0;
  }
}
nextBtn.onclick = ()=> {

  nextBtn.classList.toggle("rotated");

}

let catgBtn = document.querySelectorAll('.catg');

catgBtn.forEach((cbtn, index) => {
    cbtn.addEventListener('click', function() {
        // Reset style for all buttons
        catgBtn.forEach(button => {
          button.style.boxShadow = '';
        });

        // Set style for the clicked button
        cbtn.style.boxShadow = '0 5px 5px green';
    });
});

//======Project showcase=====
let projects = [
  {
    name: "Personal Webpage",
    content: `
    The website was built from scratch, serving as a platform to showcase my portfolio and skills. 
    I utilized languages such as HTML, CSS, and JavaScript to create a responsive and user-friendly interface. 
    This project has been a dynamic and ongoing effort to effectively present my professional persona online
              `,
    image: "img/project1.png",
    lang:"HTML, CSS, JS",
    git:"https://github.com/HuyNLy/Personal_Webpage"
  },
  {
    name: "K-Detector",
    content: `
    I was responsible for the complete lifecycle, from conception to deployment,
     using the React.js framework. My primary responsibilities included designing the
    user interface, developing the game logic, and integrating JSON file for enhanced functionality. 
    The result was an interactive game that not only provided a fun user experience but also demonstrated my advanced technical skills and commitment to creating high-quality applications. 
    This project served as a testament to my ability to deliver results while working independently and managing all aspects of a full-stack development project. `,
    image: "img/project2.png",
    lang:"Javascript",
    git:"https://github.com/HuyNLy/K-Detector"
  },
  {
    name: "Personal Webpage3",
    content: `
    The website was built from scratch, serving as a platform to showcase my portfolio and skills.
    project has been a dynamic and ongoing effort to effectively present my professional persona online
     `,
    image: "img/project1img.png",
    lang:"HTML, CSS, JS",
    git:""
  },
  {
    name: "l",
    content: `Tdfgfdgdfgdfhe website was built from scratch, serving as a platform to showcase my portfolio and skills.
              project has been a dynamic and ongoing effort to effectively present my professional persona online`,
    image: "img/devpost.png",
    lang:"Python",
    git:""
  },
  
];
let i =0;
function updateContent() {
  
  let currentImg = document.querySelector('.currentImg');
  let nextImg = document.querySelector('.nextImg');
  let nextIndex = (i + 1) % projects.length;
  let nextNextIndex = (i + 2) % projects.length;

  

  let content = `
    <div class="webDev">
      <div>
        <h2>${projects[i].name}</h2>
        <p>${projects[i].content}</p>
        <div >
          <button class='projectBtn back'> «</button>
          <button class=' projectBtn next'> »</button>
        </div>
      </div>

      <div class ='projWrapper'>
        <div class ='projImg'>
          <img  class = 'currentImg' src="${projects[i].image}" width="260px" height="290px">
          <img  src="${projects[nextIndex].image}" width="200px" height="170px">
          <img src="${projects[nextNextIndex].image}" width="200px" height="170px">
          <div class="pTitle">${projects[i].name}
            <li>${projects[i].lang}</li>
          </div>
        </div>

        <div>
          <a  style=" filter:  invert(100%);"href="${projects[i].git}" target="_blank">
            <img src='img/git.png' width="50px">
          </a>
        </div>

      </div>


     
     
   
     
    </div>
  `;
  let myProject = document.querySelector('.myProject');
  myProject.style.backgroundImage = `url(${projects[i].image})`;
  myProject.innerHTML = content;

  // Add event listeners for the newly created buttons
  document.querySelector('.back').addEventListener('click', function() {
    i = (i - 1 + projects.length) % projects.length;
    updateContent();
  });

  document.querySelector('.next').addEventListener('click', function() {
    i = (i+1) % projects.length;
    updateContent();
  });

  
}

// Initial call to display the first project
updateContent();

//=========================



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      let target = document.querySelector(this.getAttribute('href'));
      let offset = window.innerHeight/5;  
      let elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      let offsetPosition = elementPosition - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  });
});

console.log("Thank you for visiting my website!!! ><");
musicButton.addEventListener('click',playMusic);
window.addEventListener('scroll', reveal);
nextBtn.addEventListener('click', hideshow);
