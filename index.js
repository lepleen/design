/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


//* CODIGO HOVER CABECALHO */
 //pega os elementos pelo DOM
 const hero = document.querySelector(".hero");
 const myimages = document.querySelectorAll(".myimages img");

 //configura a sensibilidade de cada imagem
 const sensitivities = [
   55, -50, 40
 ];

 //loop por todas as imagens
 for(let i = 0; i < myimages.length; i++){
   hero.addEventListener("mousemove", e => {
     setTimeout(() => {
       const x = e.clientX;
       const y = e.clientY;


       const w = hero.offsetWidth / 2;
       const h = hero.offsetHeight / 2;


       let convertX = ((x - w) * sensitivities[i]) / w;
       let convertY = ((y - h) * sensitivities[i]) / h;

       myimages[i].style.transform = `
       translateX(${convertX}px)
       translateY(calc(-50% - ${convertY}px)`;

     }, 200);
   });
 };



 const scrollDivs = document.querySelectorAll('.js-scroll');

 function animaScroll(){
  scrollDivs.forEach(divs => {
    const divTop = divs.getBoundingClientRect().top;
    if(divTop < 0 ){
      divs.classList.add('ativo');
    }
  });
}
 
 window.addEventListener('scroll', animaScroll);


 