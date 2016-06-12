// var container = document.querySelector("body");
//
// window.onload=function(){
//   container.addEventListener("click", getClickPosition, false);
// }

function getClickPosition(e){
  var parentPosition = getPosition(container);
  var x = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  var y = event.clientY - parentPosition.y;     // Get the vertical coordinate
  console.log(x, y);
}

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  }
}
