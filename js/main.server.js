var db = new Firebase("https://onedock-masterserver.firebaseio.com");
var emCont = [];
var pwCont = [];

//elements
var mailInUseAC = document.getElementById("mailInUseAC");

function ca() {
    var em = acEm.value;
    var pw = acPwO.value;
    if( emCont.indexOf(em) == -1 ) {
        db.push({type:"accountData",em:em,pw:pw});
    } else {
        mailInUseAC.style.display = "block";
        acEm.value = "";
        acPwO.value = "";
        acPwT.value = "";
    }
}

function la() {

}
var startListening = function() {
    db.on('child_added', function(snapshot) {
        var dt = snapshot.val();
        if( dt.type == "accountData" ) {
            emCont.push(dt.em);
            pwCont.push(dt.pw);
        }
    });
}
startListening();
