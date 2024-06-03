var div_res = document.getElementById("res");

function check_username_and_password() {
    var username = form.username.value;
    var password = form.password.value;
    var symbols_in_password = password.length;

    div_res.innerHTML = "";

    if (username == "") {
        div_res.innerHTML = "имя не должно быть пустым";
    }

    if (password == "") {
        div_res.innerHTML += "<br>пароль не должен быть пустым";
    } 
    
    if (symbols_in_password <= 6) {
        div_res.innerHTML += "<br>пароль должен быть больше шести символов";
    } 
    
    if (!hasUppercase(password)) {
        div_res.innerHTML += "<br>пароль должен содержать одну заглавную букву";
    }

    is_number_in_string(password);
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