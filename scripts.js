
const mapStart = document.querySelector('#map img');
mapStart.style.transform = 'translate3d(-1477.71px, -2334.35px, 0px)';

Draggable.create("#map img", {
   type:"x,y",
	   bounds:"#wrapper",
	   edgeResistance:0.5,
     intertia: true,
});
