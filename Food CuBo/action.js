var a=document.getElementsByClassName('carousel-item active')[0];
var b;
var c=document.getElementsByClassName('carousel-caption');
var d;
var i;
for(i=0;i<c.length;i++){

	a=document.getElementsByClassName('carousel-item active')[0];
	b=a.clientHeight;
	b=b-236;
	d=((275/505)*b)+50;
	console.log(d);
	c[i].style.bottom=d+'px';
	// c[i].style.bottom=20+'px';
	}

	a=document.getElementsByClassName('carousel-item active')[0];
	b=a.clientHeight;
	b=b-47;
  if (document.body.scrollTop > b || document.documentElement.scrollTop > b){
  	console.log(b);
  	document.getElementsByTagName("img")[0].style.width="38px";
  	// document.getElementById("mynav").setAttribute('style','background-color:#E98074');
  	document.getElementById("mynav").style.setProperty('background-color','#E98074','important');
  	document.getElementById("text-logo").style.setProperty('color','white');
	}
  else{
  	document.getElementsByTagName("img")[0].style.width="70px";
  	document.getElementById("mynav").style.setProperty('background-color','rgba(233,128,116,0.2)','important');
  	document.getElementById("text-logo").style.setProperty('color','#E85A4F');
	}

	
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunctionStick()};


function scrollFunctionStick() {
	a=document.getElementsByClassName('carousel-item active')[0];
	b=a.clientHeight;
	b=b-47;
  if (document.body.scrollTop > b || document.documentElement.scrollTop > b){
  	console.log(b);
  	document.getElementsByTagName("img")[0].style.width="38px";
  	// document.getElementById("mynav").setAttribute('style','background-color:#E98074');
  	document.getElementById("mynav").style.setProperty('background-color','#E98074','important');
  	document.getElementById("text-logo").style.setProperty('color','white');
	}
  else{
  	document.getElementsByTagName("img")[0].style.width="70px";
  	document.getElementById("mynav").style.setProperty('background-color','rgba(233,128,116,0.2)','important');
  	document.getElementById("text-logo").style.setProperty('color','#E85A4F');
	}
}

window.onresize = reportWindowSize;
function reportWindowSize() {
	for(i=0;i<c.length;i++){

	a=document.getElementsByClassName('carousel-item active')[0];
	b=a.clientHeight;
	b=b-236;
	d=((275/505)*b)+50;
	console.log(d);
	c[i].style.bottom=d+'px';
	// c[i].style.bottom=20+'px';
	}
	
  
}

