const bodyEl= document.querySelector("body")
bodyEl.addEventListener("mousemove",(event)=>{
  //console.log("Mouse is moving")
  const PosX = event.offsetX;
  const PosY = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = PosX + "px";
  spanEl.style.top = PosY + "px";
  const size = Math.random()*100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(()=>{
    spanEl.remove();
  }, 3000);
})