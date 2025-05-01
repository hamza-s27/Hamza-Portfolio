

const andentPortal = document.querySelector('#portal');
const iprobo = document.querySelector('#iprobo');
const triggerImage1 = document.querySelector('.click1');
const triggerImage = document.querySelector('.clickable');

var numberOfBtn= document.querySelectorAll(".btn").length;
var numberOfh1= document.querySelectorAll("h1").length;

triggerImage.addEventListener('click', ()=>{
    
    iprobo.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
     
});



triggerImage1.addEventListener('click', ()=>{
     
    andentPortal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
     
});

for (var i = 0; i<numberOfBtn ; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        
        iprobo.style.display = 'none';
        andentPortal.style.display = 'none';
        document.querySelector('body').style.overflow = 'scroll';

    });
}


for (var i = 0; i<numberOfh1 ; i++){
    document.querySelectorAll("h1")[i].addEventListener("mouseover", function(){
        console.log("ifee");
        this.classList.add("ani");
        this.style.transform = 'scale(1.1)';
        
    });
}

for (var i = 0; i<numberOfh1 ; i++){
    document.querySelectorAll("h1")[i].addEventListener("mouseout", function(){
        //this.classList.remove("ani");
        this.style.transform = 'scale(1)';
        
    });
}



