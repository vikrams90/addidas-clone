const textElement = document.getElementById("changetxt");
const texts = ["Free delivery, free returns", "UPI and Netbanking available", "Relax buddy"];
let index = 0;

setInterval(() => {
  textElement.textContent = texts[index];
  index++;
  if (index >= texts.length) {
    index = 0;
  }
}, 5000);
  
  // Call the function to start the text changing.



  function hideNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.top = "-150px";
  }
  
  function showNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.top = "0";
  }
  var prevScroll = window.scrollY;
  window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
      hideNavbar();
    } else {
      showNavbar();
    }
    prevScroll = currentScroll;
  });


  function hideE(){
    const elementHide = document.getElementById("sale-p");
    elementHide.style.display="none"

  }