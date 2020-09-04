
const mapStart = document.querySelector('#map img');
mapStart.style.transform = 'translate3d(-1718.7px, -2302.15px, 0px)';

Draggable.create("#map img", {
   type:"x,y",
	   bounds:"#wrapper",
	   edgeResistance:0.5,
     intertia: true,
});

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
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
