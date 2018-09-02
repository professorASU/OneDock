//accountport elements
var accountCreate = document.getElementById("accountCreate");
var accountLogin = document.getElementById("accountLogin");

//accountCreate elements
var acEm = document.getElementById("acEm");
var acPwO = document.getElementById("acPwO");
var acPwT = document.getElementById("acPwT");

var acCAbtn = document.getElementById("acCAbtn")

var acLIsw = document.getElementById("acLIsw");

//accountLogin elements
var lgEm = document.getElementById("lgEm");
var lgPw = document.getElementById("lgPw");

var lgLAbtn = document.getElementById("lgLAbtn");

var lgACsw = document.getElementById("lgACsw");

function init() {
    document.getElementById("splashport").style.display = "none";
    document.getElementById("programport").style.display = "block";
    accountLogin.style.display = "none";
    if( localStorage.loggedUN ) {
        accountport.style.display = "none";
        dashport.style.display = "block";
    } else {
        accountport.style.display = "block";
        dashport.style.display = "none";
    }
}

acLIsw.onclick = function () {
    accountCreate.style.display = "none";
    accountLogin.style.display = "block";
}

lgACsw.onclick = function () {
    accountCreate.style.display = "block";
    accountLogin.style.display = "none";
}

acEm.onkeyup = function () {
    if( acEm.value.length != 0 && acPwO.value.length != 0 && acPwO.value.length != 0 && acPwO.value == acPwT.value ) {
        acCAbtn.disabled = false;
    } else {
        acCAbtn.disabled = true;
    }
}
acPwO.onkeyup = function () {
    if( acEm.value.length != 0 && acPwO.value.length != 0 && acPwO.value.length != 0 && acPwO.value == acPwT.value ) {
        acCAbtn.disabled = false;
    } else {
        acCAbtn.disabled = true;
    }
}
acPwT.onkeyup = function () {
    if( acEm.value.length != 0 && acPwO.value.length != 0 && acPwO.value.length != 0 && acPwO.value == acPwT.value ) {
        acCAbtn.disabled = false;
    } else {
        acCAbtn.disabled = true;
    }
}

lgEm.onkeyup = function () {
    if( lgEm.value.length != 0 && lgPw.value.length != 0 ) {
        lgLAbtn.disabled = false;
    } else {
        lgLAbtn.disabled = true;
    }
}
lgPw.onkeyup = function () {
    if( lgEm.value.length != 0 && lgPw.value.length != 0 ) {
        lgLAbtn.disabled = false;
    } else {
        lgLAbtn.disabled = true;
    }
}

acPwT.onblur = function () {
    if( acPwO.value == acPwT.value ) {
        pswNotMatchAC.style.display = "none";
    } else {
        pswNotMatchAC.style.display = "block";
    }
}

acPwO.onblur = function () {
    if( acPwT.value.length != 0 ) {
        if( acPwO.value == acPwT.value ) {
            pswNotMatchAC.style.display = "none";
        } else {
            pswNotMatchAC.style.display = "block";
        }
    } else {
        pswNotMatchAC.style.display = "none";
    }
}
