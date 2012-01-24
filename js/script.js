/* Author: paat sinsuwan

*/
this.makeCircle = function(cx, cy, r, canvas){
	if(r < 1){
		return null;
	}	
 	return canvas.circle(cx, cy, r);
}

this.makeRect = function(x, y, w, canvas){
	if(w < 1){
		return null;
	}
	return canvas.rect(x, y, w, w);
}

this.drawWTimeout = function(direction, ele, canv){
	setTimeout(function(){this.draw(direction, ele, canv)}, 1000);
}

this.draw = function(direction, ele, canv){
	tmp = direction(ele, canv)
	if(tmp != null){
		drawNext(tmp, canv)
	}
}

this.drawNext = function(ele, canv){
	if(ele.attrs.r == 0){
		mycallback = makeRect;
	}
	else{
		mycallback = makeCircle;
	}
	drawWTimeout(drawLeft, ele, canv);
	drawWTimeout(drawRight, ele, canv);
	drawWTimeout(drawTop, ele, canv);
	drawWTimeout(drawBottom, ele, canv);
}

this.getRadius = function(ele){
	//return ele.attrs.r;
	if(mycallback == makeRect){
		return ele.attrs.width;
	}
	return ele.attrs.r
}
this.getCx = function(ele){
	if(mycallback == makeRect){
		return ele.attrs.x;
	}
	return ele.attrs.cx;
}
this.getCy = function(ele){
	if(mycallback == makeRect){
		return ele.attrs.y;
	}
	return ele.attrs.cy;
}

this.drawLeft = function(ele, canv){
	tmpR = getRadius(ele) / 2;
	tmpCx = getCx(ele) - getRadius(ele) - tmpR;
	tmpCy = getCy(ele);
	return mycallback(tmpCx, tmpCy, tmpR, canv);
}
this.drawRight = function(ele, canv){
	tmpR = getRadius(ele) / 2;
	tmpCx = getCx(ele) + getRadius(ele) + tmpR;
	tmpCy = getCy(ele);
	return mycallback(tmpCx, tmpCy, tmpR, canv);
}
this.drawTop = function(ele, canv){
	tmpR = getRadius(ele) / 2;
	tmpCx = getCx(ele);
	tmpCy = getCy(ele) - getRadius(ele) - tmpR;
	return mycallback(tmpCx, tmpCy, tmpR, canv);
}
this.drawBottom = function(ele, canv){
	tmpR = getRadius(ele) / 2;
	tmpCx = getCx(ele);
	tmpCy = getCy(ele) + getRadius(ele) + tmpR;
	return mycallback(tmpCx, tmpCy, tmpR, canv);
}

this.start = function(){
	drawNext(a, paper);
}

var paper = Raphael("head", 1000, 600);
var mycallback, a;
var type = prompt("rect or circle");

if(type.toLowerCase() == "rect"){
	a = paper.rect(500, 300, 100, 100);
	start();
}
else if(type.toLowerCase() == "circle"){
	a = paper.circle(500, 300, 100);
	start();
}
else{
	alert("reload and type in predefined choices");
}


