//huge stuff
var accountport = document.getElementById("accountport");
var dashport = document.getElementById("dashport");
var databaseport = document.getElementById("databaseport");

//accountport elements
var accountCreate = document.getElementById("accountCreate");
var accountLogin = document.getElementById("accountLogin");

//accountCreate elements
var acEm = document.getElementById("acEm");
var acPwO = document.getElementById("acPwO");
var acPwT = document.getElementById("acPwT");

var acCAbtn = document.getElementById("acCAbtn")

var acLIsw = document.getElementById("acLIsw");

//databaseport elements
var addDBsiteBTN = document.getElementById("addDBsiteBTN");

var dibSpan = document.getElementById("dibSpan");

var addToWebsite = document.getElementById("addToWebsite");

var dbWindowContent = document.getElementById("dbWindowContent");
var dbWindowContentFiltered = document.getElementById("dbWindowContentFiltered");
var usrWindowContent = document.getElementById("usrWindowContent");
var usrFilterContent = document.getElementById("usrFilterContent");

//accountLogin elements
var lgEm = document.getElementById("lgEm");
var lgPw = document.getElementById("lgPw");

var lgLAbtn = document.getElementById("lgLAbtn");

var lgACsw = document.getElementById("lgACsw");

var nuDBbtn = document.getElementById("nuDBbtn");
var closeSpan = document.getElementsByClassName("close")[0];
var closeTwo = document.getElementsByClassName("close")[1];

//nu Db related stuff. I mean, come on. These are just basic stuff to buff. (lol)
var nuDBname = document.getElementById("nuDBname");
var nuDBid = document.getElementById("nuDBid");
var nuDBsubmit = document.getElementById("nuDBsubmit");

var noDBmade = document.getElementById("noDBmade");
var allDBwrapper = document.getElementById("allDBwrapper");

//logout button (theres only one element for this, and it feels kind of stupid to write comments for this)
var logoutUserBtn = document.getElementById("logoutUserBtn");
var homeBtn = document.getElementById("homeBtn");

//modal... again
var addDatabaseToSiteModal = document.getElementById("addDatabaseToSiteModal");
var addDatabaseToSiteModalContent = document.getElementById("addDatabaseToSiteModalContent");

//codeModal thingy
var copyCode = document.getElementById("copyCode");
var addToSiteCopyarea = document.getElementById("addToSiteCopyarea");

//variables to store data
var selectedDBid = "";
var ownedDBid = [];

function init() {
    if( localStorage.dbExists == "true" ) {
        noDBmade.style.display = "none";
        document.getElementById("loadingDB").style.display = "block";
    }
    document.getElementById("splashport").style.display = "none";
    document.getElementById("programport").style.display = "block";
    accountLogin.style.display = "none";

    allDBwrapper.style.display = "none";

    //set old style for load conflicts
    document.getElementById("nuDBmodalContent").style.left = (window.innerWidth - 368)/2 + "px";
    document.getElementById("addDatabaseToSiteModalContent").style.left = (window.innerWidth - 650)/2 + "px";
    allDBwrapper.style.height = window.innerHeight - 51 - 10 + "px";

    if( localStorage.loggedUN ) {
        accountport.style.display = "none";
        dashport.style.display = "block";
    } else {
        accountport.style.display = "block";
        dashport.style.display = "none";
    }
    databaseport.style.display = "none";
}

function scale() {
    document.getElementById("nuDBmodalContent").style.left = (window.innerWidth - 368)/2 + "px";
    document.getElementById("addDatabaseToSiteModalContent").style.left = (window.innerWidth - 650)/2 + "px";
    allDBwrapper.style.height = window.innerHeight - 51 - 10 + "px";
}

nuDBbtn.onclick = function () {
    document.getElementById("nuDBmodal").style.display = "block";
}
closeSpan.onclick = function () {
    document.getElementById("nuDBmodal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("nuDBmodal")) {
        document.getElementById("nuDBmodal").style.display = "none";
    }
}

logoutUserBtn.onclick = function () {
    //i never thought logging out would be so simple!
    localStorage.clear();
    location.reload();
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
function thirdPartyCall() {
    document.getElementById("nuDBmodal").style.display = "block";
}
nuDBname.onkeyup = function () {
    if( nuDBname.value.length != 0 ) {
        nuDBsubmit.disabled = false;
        nuDBid.value = localStorage.loggedUN.split("@")[0] +"-"+ nuDBname.value;
    } else {
        nuDBsubmit.disabled = true;
        nuDBid.value = "";
    }
}
function updateDBlist() {
    if( dbIDcont.length != 0 ) {
        noDBmade.style.display = "none";
        document.getElementById("loadingDB").style.display = "none";
        allDBwrapper.style.display = "block";
        allDBwrapper.innerHTML = "";
        for( i=0; i<dbIDcont.length; i++ ) {
            allDBwrapper.innerHTML += "<button class='dbListBtn' ref='クリックして開く' onclick='openDB("+'"'+dbIDcont[i]+'"'+")'><div class='serverSmallIconWrapper'><img src='img/icons/dbCol.svg' height='30px'></div><div class='dbNameWrapper'>" + dbNMcont[i] + "</div><div class='dbIDwrapper'>" + dbIDcont[i] + "</div></button>";
        }
    } else {
        noDBmade.style.display = "block";
        allDBwrapper.style.display = "none";
    }
}

function openDB(dib) {
    dashport.style.display = "none";
    databaseport.style.display = "block";
    selectedDBid = dib;
    dibSpan.innerHTML = dib;
    updateDatabaseViewer(dib);
    addToSiteCopyarea.value = '<od id="OneDockDBTag">'+dib+'</od>\n<script src="https://mushroomisgod.github.io/OneDock/lib/onedock.min.js" ></script>\n<link rel="stylesheet" href="https://mushroomisgod.github.io/OneDock/lib/onedock.min.css"><script>\nOneDock.init(OneDock.databaseId);\n</script>';
    document.getElementById("dbNameHeader").innerHTML = dib;

}
addDBsiteBTN.onclick = function () {
    addDatabaseToSiteModal.style.display = "block";
}
closeTwo.onclick = function () {
    addDatabaseToSiteModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById("addDatabaseToSiteModal")) {
        document.getElementById("addDatabaseToSiteModal").style.display = "none";
    }
}
homeBtn.onclick = function () {
    databaseport.style.display = "none";
    dashport.style.display = "block";
}
function updateDatabaseViewer(dbid) {
    dbWindowContent.innerHTML = "";
    for(i=0;i<allDBcontentHub.length;i++) {
        var dtX = allDBcontentHub[i];
        if( dtX.databaseId == dbid ) {
            if( dtX.dcat == "customData" ) {
                var contentControlled = JSON.stringify(dtX).split("{")[1].split("}")[0].split(",");
                var finalContent = [];
                for(o=0;o<contentControlled.length;o++) {
                    if( contentControlled[o].search("databaseId") == -1 && contentControlled[o].search("dcat") == -1 && contentControlled[o].search("type") == -1 ) {
                        finalContent.push("<div class='tagTitle'>"+contentControlled[o].split(":")[0].split('"')[1]+"</div><div class='tagContent'>"+contentControlled[o].split(":")[1].split('"')[1]+"</div>");
                    }
                }
                dbWindowContent.innerHTML += "<div class='dataSetWrapper'>"+finalContent.join(" ")+"</div>"+"<as></as>";
            } else if( dtX.dcat == "accountDtx" ) {
                usrWindowContent.innerHTML = "";
                usrWindowContent.innerHTML += "<div class='userSetWrapper'>"+dtX.em+"<button class='onlineStatusUsr' id='onlineStatusFor"+dtX.em+"'>オフライン</button></div>"+"<aw></aw>";
            } else if( dtX.dcat == "userStatus" ) {
                var inspectID = "onlineStatusFor" + dtX.em;
                if( dtX.status == "online" ) {
                    document.getElementById(inspectID).disabled = true;
                    document.getElementById(inspectID).innerHTML = "オンライン";
                } else {
                    document.getElementById(inspectID).disabled = false;
                    document.getElementById(inspectID).innerHTML = "オフライン";
                }
            }
        }
    }
}
copyCode.onclick = function () {
    addToSiteCopyarea.select();
    document.execCommand('copy');
    copyCode.innerHTML = "コピーされました";
    copyCode.disabled = true;
    setTimeout( function () {
        copyCode.innerHTML = "コードをコピー";
        copyCode.disabled = false;
    }, 1000)
}
function showDataTab() {
    document.getElementById("databaseContentViewer").style.display = "block";
    document.getElementById("dataViewTab").disabled = true;
    document.getElementById("userViewTab").disabled = false;
    document.getElementById("userContentViewer").style.display = "none";

}
function showUserTab() {
    document.getElementById("databaseContentViewer").style.display = "none";
    document.getElementById("dataViewTab").disabled = false;
    document.getElementById("userViewTab").disabled = true;
    document.getElementById("userContentViewer").style.display = "block";
}
function filterDatabase(ele) {
    if( ele.value == "" ) {
        dbWindowContent.style.display = "block";
        dbWindowContentFiltered.style.display = "none";
    } else {
        var filterTarget = dbWindowContent.innerHTML.split("<as></as>");
        dbWindowContent.style.display = "none";
        dbWindowContentFiltered.style.display = "block";
        dbWindowContentFiltered.innerHTML = "";
        for( i=0; i<filterTarget.length-1; i++ ) {
            if(filterTarget[i].search(ele.value) != -1) {
                dbWindowContentFiltered.innerHTML += filterTarget[i];
            }
        }
    }
}
function filterUsers(ele) {
    if( ele.value == "" ) {
        usrWindowContent.style.display = "block";
        usrFilterContent.style.display = "none";
    } else {
        var filterTarget = usrWindowContent.innerHTML.split("<aw></aw>");
        usrWindowContent.style.display = "none";
        usrFilterContent.style.display = "block";
        usrFilterContent.innerHTML = "";
        for( i=0; i<filterTarget.length-1; i++ ) {
            if(filterTarget[i].search(ele.value) != -1) {
                usrFilterContent.innerHTML += filterTarget[i];
            }
        }
    }
}
