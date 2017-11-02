// JavaScript Document
function addEvent(obj,sEv,fn)
{
  if(obj.attachEvent){
	  obj.attachEvent('on'+sEv,fn)
  }else{
	  obj.addEventListener(sEv,fn,false)
  }
}
function onWheel(obj,fn)
{
	function wheel(ev)
	{
		var oEvent=ev||event;
		var bCur=oEvent.detail?oEvent.detail>0:oEvent.wheelDelta<0;
		fn.call(obj,bCur);
		if(oEvent.preventDefault){
		   oEvent.preventDefault();
		}
		return false;//ie 谷歌
	}
	addEvent(obj,'DOMMouseScroll',wheel);
	addEvent(obj,'mousewheel',wheel);
}
onmousewheel="return bbimg(this)" 

function bbimg(o){ 
   // var zoom=parseInt(o.style.zoom, 10)||100;
    //zoom+=event.wheelDelta/12;
    //if (zoom>=50 && zoom<=400) o.style.zoom=zoom+'%'; 
    //return false; 
	var scale = 1.5;
	function myWheel(ev){
		var oEvent = ev || event;
		var bCur = oEvent.detail?oEvent.detail>0:oEvent.wheelData<0;
		if(bCur){
			alert();
			o.style.width = parseInt((scale * parseInt(o.style.width))) +'px';
			o.style.height = parseInt((scale * parseInt(o.style.height))) +'px';
		}else{
			o.style.width = -parseInt((scale * parseInt(o.style.width))) +'px';
			o.style.height = -parseInt((scale * parseInt(o.style.height))) +'px';
		}
		if(oEvent.preventDefault){
			oEvent.preventDefault();
		}
		return false;
	}
	addEvent(o,'DOMMouseScroll',myWheel);
	addEvent(o,'mousewheel',myWheel);
	//alert(o.style.width +':' + o.style.height);
	//alert(parseInt((scale * parseInt(o.style.width))));
	//o.style.width = parseInt((scale * parseInt(o.style.width))) +'px';
	//o.style.height = parseInt((scale * parseInt(o.style.height))) +'px';
} 