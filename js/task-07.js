const sizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text")

sizeControl.addEventListener("input", () => { textSize.style.fontSize = sizeControl.value+"px"})
