const validation = document.querySelector("#validation-input")
validation.addEventListener('blur', check);

function check() {
    
    if (validation.value.length !== Number(validation.dataset.length)) { validation.classList.add("invalid")}
    else {validation.classList.replace("invalid","valid")}
}

console.dir(validation)
