function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const target = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

let val = 0;
target.children[0].addEventListener("input", addVal)
target.children[1].addEventListener("click", createBoxes);
target.children[2].addEventListener("click", destroyBoxes);
function addVal(evt) { 
  val = Number(evt.currentTarget.value),
      console.log(val)
  }



function createBoxes () {
  let markup = [];
  for (let i = 1; i <= val; i += 1) {
    markup.push(`<div style="width:${30 + (10*(i-1))}px; height:${30 + (10*(i-1))}px; background-color:${getRandomHexColor()};">${i}</div>`)
     }
  return boxes.insertAdjacentHTML("afterbegin", markup),
  console.log(markup)
   
}
  
function destroyBoxes() { 
  boxes.innerHTML = "";
  
}


