const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', chekForm);
const data = {};
function chekForm(evt) {
    evt.preventDefault();
    const { elements: { email, password } } = evt.currentTarget;
    if (email.value === "" || password.value === "") { alert("Всі поля повинні бути заповнені") }
    else {
        data.email = email.value;
        data.password = password.value;
        console.log(data)
    }
    evt.currentTarget.reset();
}
