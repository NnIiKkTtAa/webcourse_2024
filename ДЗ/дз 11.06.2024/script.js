var div_res = document.getElementById("res");

function check_username_and_password() {
    var username = form.username.value;
    var password = form.password.value;
    var symbols_in_password = password.length;

    var resultMessage = "";

    if (username == "") {
        resultMessage += "имя не должно быть пустым";
    }

    if (password == "") {
        resultMessage += "<br>пароль не должен быть пустым";
    } 
    
    if (symbols_in_password <= 6) {
        resultMessage += "<br>пароль должен быть больше шести символов";
    } 
    
    if (!hasUppercase(password)) {
        resultMessage += "<br>пароль должен содержать одну заглавную букву";
    }

    if (resultMessage === "") {
        resultMessage = "логин и пароль подходят";
    }

    div_res.innerHTML = resultMessage;
}

function hasUppercase(password) {
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function is_number_in_string(password) {
    return /\d/.test(password);
}
