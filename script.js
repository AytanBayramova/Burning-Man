const burgerBtn=document.querySelector('.fa-bars')
// const overlayMenyumuz = document.querySelector('.overlay')
const offCanvansDivi  = document.querySelector('offcanvas-menu')
const closeBtn = document.querySelector('.fa-xmark')
const saytiOzundeSaxlayanDiv = document.querySelector('.kontainer')


 function openOverlayMenu(){
    offCanvansDivi.style.width = "250px"
   
    saytiOzundeSaxlayanDiv.classList.add('menimshexsiclassim')
} 

 function closeOverlayMenu(){
    offCanvansDivi.style.width = "0"
  saytiOzundeSaxlayanDiv.classList.remove('menimshexsiclassim')
}

burgerBtn.addEventListener('click', openOverlayMenu)
closeBtn.addEventListener('click', closeOverlayMenu)


  AOS.init();

  //typing effect

  const h1Elementi = document.getElementsByClassName('h1-elementi') [0]
  console.log(h1Elementi)

  let i =0 

  const text = "Burning man"
  let speed = 120

  function typingTextEffect (){
    if(i<text.length){
        h1Elementi.innerHTML += text.charAt(i)
        i++
        setTimeout(typingTextEffect,speed)
    }
  }
  window.onload = typingTextEffect