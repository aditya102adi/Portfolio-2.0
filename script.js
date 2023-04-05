const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")
/*=============== SHOW MENU ===============*/

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}

/*============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")
function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header")
  if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHigh);
function navHigh()
{
  let scrollY=window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight();
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').add("active-link")
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').remove("active-link")
    }
  })
}
/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPallet = document.querySelectorAll('.choose-color span');
var root=document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

//open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
//close model
const closeThemeModel = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModel);


/*===== FONTS =====*/

//remove active class from spans or font-size selectors
const removeSizeSelector = () =>{
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) 
    {
      fontSize = '12px';
    } 
    else if (size.classList.contains('font-size-2')) 
    {
      fontSize = '14px';
    } 
    else if (size.classList.contains('font-size-3')) 
    {
      fontSize = '16px';
    }
    else if (size.classList.contains('font-size-4')) 
    {
      fontSize = '18px';
    }

    document.querySelector('html').style.fontSize = fontSize;
  })
})

/*===== PRIMARY COLORS =====*/

//remove active class
const changeActiveColorClass =() => {
  colorPallet.forEach(colorPicker =>{
    colorPicker.classList.remove('active');
  })
}
colorPallet.forEach(color =>{
  color.addEventListener('click', ()=>{
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1'))
    {
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

/*===== THEME BACKGROUNDS =====*/
let lightCB;
let whiteCB;
let darkCB;


const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightCB);
  root.style.setProperty('--white-color-lightness', whiteCB);
  root.style.setProperty('--dark-color-lightness', darkCB);
}

//CHANGE BACKGROUND COLOR 
Bg1.addEventListener('click',()=>{

  Bg1.classList.add('active');

  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  window.location.reload(); 
})
Bg2.addEventListener('click', ()=>{
  darkCB = '95%';
  whiteCB = '20%';
  lightCB = '15%';


  Bg2.classList.add('active');

  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})
Bg3.addEventListener('click', ()=>{
  darkCB = '95%';
  whiteCB = '10%';
  lightCB = '0%';


  Bg3.classList.add('active');

  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
})
