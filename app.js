 /*Products Slide show*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add('active');
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*Customers reviews slideshow*/

const reviews = [
  {
    id : 1,
    name : 'Segun Bashir',
    img : '../img/segun.jpg',
    text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur deleniti obcaecati sed, quasi quo vitae aperiam officiis voluptates quis?'
  },

  {
    id : 2,
    name : 'Grace Kumba',
    img : '../img/grace.jpg',
    text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur deleniti obcaecati sed, quasi quo vitae aperiam officiis voluptates quis?'
  },

  {
    id : 3,
    name : 'Ummu Bilal',
    img : '../img/tawa.jpg',
    text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur deleniti obcaecati sed, quasi quo vitae aperiam officiis voluptates quis?'
  },
]

//Getting the DOM elements
const image = document.getElementById('customer-image');
const name = document.getElementById('name');
const info = document.getElementById('info');

//Getting the buttons
const prevBtn = document.querySelector('#prevBtn');
const nxtBtn = document.querySelector('#nxtBtn');

let currentCustomer = 0;

window.addEventListener('DOMContentLoaded', loadCustomers);

function loadCustomers() {
  const item = reviews[currentCustomer];
  image.src = item.img;
  name.textContent = item.name;
  info.textContent = item.text;
}

nxtBtn.addEventListener('click', () => {
  currentCustomer++;
  if(currentCustomer > reviews.length - 1){
    currentCustomer = 0;
  }
  loadCustomers(currentCustomer);
});

prevBtn.addEventListener('click', () => {
  currentCustomer--;
  if(currentCustomer < 1){
    currentCustomer = reviews.length - 1;
  }
  loadCustomers(currentCustomer);
})


//Hamburger menu
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', openNavBar);
//To toggle the navbar
function openNavBar(){
  nav.classList.toggle('nav-active');

//To animate the links
navLinks.forEach ((link, index) => {
  if(link.style.animation){
    link.style.animation = '';
  }else {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  }
})

//To animate the burger
burger.classList.toggle('toggle');
};