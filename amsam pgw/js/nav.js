  const navSlide = () => {
    const cosa = document.querySelector('.cosa');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');
    //mover nav
    cosa.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');

           //animar links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }


        });
        
     //animar coas   
        cosa.classList.toggle('toggle');
    });
    

}
navSlide();


window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.gotop').classList.add('showe');
    }else{
        document.querySelector('.gotop').classList.add('showe');
    }
}


document.querySelector('.gotop').addEventListener('click', ()=>{
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   }) ;
});