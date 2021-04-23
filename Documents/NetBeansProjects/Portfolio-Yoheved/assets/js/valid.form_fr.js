function surligne(champ, erreur)
{
	if(erreur) {
		champ.style.borderColor = "#FF5050";
	} else {
		champ.style.border = "solid 1px rgba(0, 0, 0, 0.15)";
	}
}

function verifText(champ)
{
	if(champ.value.length < 1) {
		surligne(champ, true);
		return false;
	} else {
		surligne(champ, false);
		return true;
	}
}

function verifEmail(champ)
{
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(champ.value)) {
		surligne(champ, true);
		return false;
	} else {
		surligne(champ, false);
		return true;
	}
}

function verifForm()
{
	var Ok = true;
	var nomTxt = document.forms["contact"]["nom"];
    if (nomTxt.value.length < 1) {
        nomTxt.style.borderColor = "#FF5050";
		Ok = false;
    }
	
	var emailTxt = document.forms["contact"]["email"];
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(emailTxt.value)) {
		emailTxt.style.borderColor = "#FF5050";
		Ok = false;
	}
	
	var sujetTxt = document.forms["contact"]["sujet"];
    if (sujetTxt.value.length < 1) {
        sujetTxt.style.borderColor = "#FF5050";
		Ok = false;
    }
	
	var messageTxt = document.forms["contact"]["message"];
    if (messageTxt.value.length < 1) {
        messageTxt.style.borderColor = "#FF5050";
		Ok = false;
    }
	
	if(Ok == false) {
		document.getElementById("error_form").innerHTML = "Please complete the fields";
	}
	else {
		document.getElementById("error_form").innerHTML = "";
	}
	
	return Ok;
}