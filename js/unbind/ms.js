var db=new Firebase("https://onedock-masterserver.firebaseio.com"),emCont=[],pwCont=[],dbIDcont=[],dbNMcont=[],allDBcontentHub=[],mailInUseAC=document.getElementById("mailInUseAC"),wrongInfoLG=document.getElementById("wrongInfoLG");function ca(){var e=acEm.value,a=acPwO.value;-1==emCont.indexOf(e)?(db.push({type:"accountData",em:e,pw:a}),accountport.style.display="none",dashport.style.display="block",localStorage.loggedUN=e,rocation.reload()):(mailInUseAC.style.display="block",acEm.value="",acPwO.value="",acPwT.value="")}function la(){var e=lgEm.value,a=lgPw.value;-1!=emCont.indexOf(e)&&-1!=pwCont.indexOf(a)?(accountport.style.display="none",dashport.style.display="block",localStorage.loggedUN=e,location.reload()):(lgPw.value="",wrongInfoLG.style.display="block")}nuDBsubmit.onclick=function(){var e=nuDBname.value,a=nuDBid.value;document.getElementById("nuDBmodal").style.display="none",db.push({type:"dbInfo",owner:localStorage.loggedUN,dbid:a,na:e})};var startListening=function(){db.on("child_added",function(e){var a=e.val();"accountData"==a.type?(emCont.push(a.em),pwCont.push(a.pw)):"dbInfo"==a.type?localStorage.loggedUN&&localStorage.loggedUN==a.owner&&(dbIDcont.push(a.dbid),dbNMcont.push(a.na),localStorage.dbExists="true",updateDBlist()):"clientData"==a.type&&-1!=dbIDcont.indexOf(a.databaseId)&&(allDBcontentHub.push(a),updateDatabaseViewer())})};startListening();