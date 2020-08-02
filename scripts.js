
const mapStart = document.querySelector('#map img');
mapStart.style.transform = 'translate3d(-1767.92px, -2551.29px, 0px)';

Draggable.create("#map img", {
   type:"x,y",
	   bounds:"#wrapper",
	   edgeResistance:0.5,
     intertia: true,
});
