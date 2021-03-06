
let interval;

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var inputActivities = document.querySelector('input[name="activity"]');

checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('click', function(event){
    inputActivities.value = '';
    checkboxes.forEach(function(checkbox){
      if(checkbox.checked === true){
        inputActivities.value += checkbox.name + "; "
      }
    })
  })
})


var meet = document.querySelectorAll('.meet-paragraph');

var readMoreBtn = document.querySelector('.read-more');



function showMoreParagraphs(){
  var length = meet.length - 1;

  meet.forEach(function(paragraph, idx){
    paragraph.style.display = 'block';
    readMoreBtn.style.display = 'none';
  });
}


var mobileMenuOpen = document.querySelector('.mobile-menu-open');
var mobileMenuDismiss = document.querySelector('.mobile-menu-dismiss');
var mobileMenu = document.querySelector('.nav-menu ul');
var menuLinks = document.querySelectorAll('.menu-link');

mobileMenuOpen.addEventListener('click', function(){
  mobileMenu.classList.remove('-hide');
  mobileMenu.classList.add('-show');
  mobileMenuDismiss.classList.remove('-hide');
  mobileMenuDismiss.classList.add('-show');
  mobileMenuDismiss.style.position = 'absolute';
  mobileMenuDismiss.style.right = '30px';
  mobileMenuDismiss.style.top = '15px';

});
mobileMenuDismiss.addEventListener('click', function(){
  mobileMenu.classList.remove('-show');
  mobileMenuDismiss.classList.remove('-show');
  mobileMenuDismiss.classList.add('-hide');

});



menuLinks.forEach(function(menuLink){
  menuLink.addEventListener('click', function(){
  mobileMenu.classList.remove('-show');
  mobileMenuDismiss.classList.remove('-show');
  mobileMenuDismiss.classList.add('-hide');
})
});



// nav menu open styles

// ul{
//   display: block;
//   width: 100%;
//   position: absolute;
//   right: 0;
//   top: 0;
//   background: $color-white;
// }
// ul li{
//   padding: 15px;
//   text-align: center;
//   display: block;
//   margin: 15px;
// }
// }


readMoreBtn.addEventListener('click', showMoreParagraphs);

window.onscroll = function() {stickyNav()};
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky + 400) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const controls = document.querySelectorAll('.control');
const slides = document.querySelectorAll('.slide');

controls.forEach((control, idx) => {
  control.addEventListener('click', () => {
    showSlide(idx);
    clearInterval(interval);
  });
});

function showSlide(index){
  slides.forEach((slide, idx) => {
    if(idx === index){
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })

  controls.forEach((slide, idx) => {
    if(idx === index){
      slide.style.backgroundColor = 'black';
    } else {
      slide.style.backgroundColor = 'white';
    }
  })
}

let currSlide = 0;

window.addEventListener('DOMContentLoaded', () => {
  showSlide(currSlide);

  interval = setInterval(function(){
    currSlide = (currSlide + 1) % slides.length;
    showSlide(currSlide);
  }, 6000);

});

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.querySelector('.slides');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX <= touchstartX) {
      currSlide = (currSlide - 1) % slides.length;
      if(currSlide < 0){
        currSlide = slides.length - 1;
      }
      showSlide(currSlide);
    }

    if (touchendX >= touchstartX) {
      currSlide = (currSlide + 1) % slides.length;
      showSlide(currSlide);
    }

    // if (touchendY <= touchstartY) {
    //     console.log('Swiped up');
    // }
    //
    // if (touchendY >= touchstartY) {
    //     console.log('Swiped down');
    // }
    //
    if (touchendY === touchstartY) {
      clearInterval(interval);
    }
}
