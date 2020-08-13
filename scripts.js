
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

meet.forEach(function(paragraph, idx){
  if(idx > 1){
    paragraph.style.display = 'none';
  }
});

function showMoreParagraphs(){
  var length = meet.length - 1;

  meet.forEach(function(paragraph, idx){
    paragraph.style.display = 'block';
    readMoreBtn.style.display = 'none';
  });
}


readMoreBtn.addEventListener('click', showMoreParagraphs);
