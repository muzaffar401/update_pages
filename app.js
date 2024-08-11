//register js
function validateUsername() {
    let text = document.querySelector("#text").value;
    let regex = /^[a-zA-Z]{3,12}$/;
    if (text === "") {
        document.getElementById("validation1").innerHTML = "Please fill out this field.";
        document.getElementById("validation1").style.color = "red";
    } else if (text.length < 3) {
        document.getElementById("validation1").innerHTML = "Username must be at least 3 characters long.";
        document.getElementById("validation1").style.color = "red";
    } else if (!/^[a-zA-Z]+$/.test(text)) {
        document.getElementById("validation1").innerHTML = "Numbers are not allowed in username.";
        document.getElementById("validation1").style.color = "red";
    } else if (!regex.test(text)) {
        document.getElementById("validation1").innerHTML = "Username must be 3-12 characters long and contain only letters.";
        document.getElementById("validation1").style.color = "red";
    } else {
        document.getElementById("validation1").innerHTML = "";
    }
}

function validateEmail() {
    let email = document.querySelector("#email").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById("validation2").innerHTML = "Please enter a valid email address.";
        document.getElementById("validation2").style.color = "red";
    } else {
        document.getElementById("validation2").innerHTML = "";
    }
}

function validatePassword() {
    let password = document.querySelector("#password").value;
    let lengthRegex = /^.{6,}$/;
    let fullRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password === "") {
        document.getElementById("validation3").innerHTML = "Please fill out this field.";
        document.getElementById("validation3").style.color = "red";
    } else if (!lengthRegex.test(password)) {
        document.getElementById("validation3").innerHTML = "Password must be at least 6 characters long.";
        document.getElementById("validation3").style.color = "red";
    } else if (!fullRegex.test(password)) {
        document.getElementById("validation3").innerHTML = "Password must include a special character, a number, an uppercase letter, and a lowercase letter.";
        document.getElementById("validation3").style.color = "red";
    } else {
        document.getElementById("validation3").innerHTML = "";
    }
}

function validatePhone() {
    let phone = document.querySelector("#tel").value;
    let regex = /^\d{11}$/;
    if (!regex.test(phone)) {
        document.getElementById("validation4").innerHTML = "Phone number must be exactly 11 digits.";
        document.getElementById("validation4").style.color = "red";
    } else {
        document.getElementById("validation4").innerHTML = "";
    }
}

function validateAll() {
    validateUsername();
    validateEmail();
    validatePassword();
    validatePhone();
}

function register() {
    validateAll();

    if (document.getElementById("validation1").innerHTML === "" &&
        document.getElementById("validation2").innerHTML === "" &&
        document.getElementById("validation3").innerHTML === "" &&
        document.getElementById("validation4").innerHTML === "") {
        let text = document.querySelector("#text").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let phone = document.querySelector("#tel").value;

        localStorage.setItem("username", text);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("phone", phone);
        location.assign("login.html");
    }
}

//login js
function validateUsername() {
    let text = document.querySelector("#text").value;
    if (text === "") {
        document.getElementById("validation5").innerHTML = "Please fill out this field";
        document.getElementById("validation5").style.color = "red";
    } else {
        document.getElementById("validation5").innerHTML = "";
    }
}

function validatePassword() {
    let password = document.querySelector("#password").value;
    if (password === "") {
        document.getElementById("validation6").innerHTML = "Please fill out this field";
        document.getElementById("validation6").style.color = "red";
    } else {
        document.getElementById("validation6").innerHTML = "";
    }
}

function validateAll() {
    validateUsername();
    validatePassword();
}

function login() {
    let text = document.querySelector("#text").value;
    let password = document.querySelector("#password").value;
    let gettext = localStorage.getItem('username');
    let getpassword = localStorage.getItem('password');

    validateAll();

    if (document.getElementById("validation5").innerHTML === "" &&
        document.getElementById("validation6").innerHTML === "") {
        if (text !== gettext) {
            document.getElementById("validation5").innerHTML = "Incorrect Username";
            document.getElementById("validation5").style.color = "red";
        } else if (password !== getpassword) {
            document.getElementById("validation6").innerHTML = "Incorrect Password";
            document.getElementById("validation6").style.color = "red";
        } else {
            window.location.href = "dashboard.html";
        }
    }
}

//dashboard js
let gettext = localStorage.getItem('username');
let dashboard = document.querySelector("#name");

if (dashboard) {
    dashboard.innerHTML = gettext;
}

console.log(gettext);
console.log(dashboard);

function logout() {
    alert("Logout");
    location.assign("login.html");
}

function removeAcc() {
    localStorage.clear();
    alert("Account removed");
    window.location.href = "Register.html";
}
