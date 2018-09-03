var db = new Firebase("https://onedock-masterserver.firebaseio.com");
var emCont = [];
var pwCont = [];

var dbIDcont = [];
var dbNMcont = [];

//elements
var mailInUseAC = document.getElementById("mailInUseAC");
var wrongInfoLG = document.getElementById("wrongInfoLG");

function ca() {
    var em = acEm.value;
    var pw = acPwO.value;
    if( emCont.indexOf(em) == -1 ) {
        db.push({type:"accountData",em:em,pw:pw});
        accountport.style.display = "none";
        dashport.style.display = "block";
        localStorage.loggedUN = em;
        rocation.reload();
    } else {
        mailInUseAC.style.display = "block";
        acEm.value = "";
        acPwO.value = "";
        acPwT.value = "";
    }
}

function la() {
    var em = lgEm.value;
    var pw = lgPw.value;
    if( emCont.indexOf(em)!=-1&&pwCont.indexOf(pw)!=-1 ) {
        accountport.style.display = "none";
        dashport.style.display = "block";
        localStorage.loggedUN = em;
        location.reload();
    } else {
        lgPw.value = "";
        wrongInfoLG.style.display = "block";
    }
}

nuDBsubmit.onclick = function () {
    var dbnm = nuDBname.value;
    var dbid = nuDBid.value;
    document.getElementById("nuDBmodal").style.display = "none";
    db.push({type:"dbInfo",owner:localStorage.loggedUN,dbid:dbid,na:dbnm});
}

var startListening = function() {
    db.on('child_added', function(snapshot) {
        var dt = snapshot.val();
        if( dt.type == "accountData" ) {
            emCont.push(dt.em);
            pwCont.push(dt.pw);
        } else if( dt.type == "dbInfo" ) {
            if( localStorage.loggedUN ) {
                if( localStorage.loggedUN == dt.owner ) {
                    dbIDcont.push(dt.dbid);
                    dbNMcont.push(dt.na);
                    updateDBlist();
                }
            }
        }
    });
}
startListening();
