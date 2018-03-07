function validateName() {
	var inputname = document.getElementById("inputName").value;
	if(inputname === ''){
		document.getElementById("sign1").style.display = "block";
	} else{
		document.getElementById("sign1").style.display = "none";
	}
}

function validateEmail() {
    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var inputemail = document.getElementById("inputEmail").value;
	if(inputemail === '' || re.test(inputemail) === false){
		document.getElementById("sign2").style.display = "block";
	} else{
		document.getElementById("sign2").style.display = "none";
	}
}

function validatePhone() {
	var inputphone = document.getElementById("inputPhone").value;
	if(inputphone === '' || isNaN(inputphone)){
		document.getElementById("sign3").style.display = "block";
	} else{
		document.getElementById("sign3").style.display = "none";
	}
}

function validateStay() {
	var inputstay = document.getElementById("inputStay").value;
	if(inputstay === ''){
		document.getElementById("sign4").style.display = "block";
	} else{
		document.getElementById("sign4").style.display = "none";
	}
}

function validateLength() {
	var inputlength = document.getElementById("inputLength").value;
	if(inputlength === '' || isNaN(inputlength) || inputlength == 0){
		document.getElementById("sign5").style.display = "block";
	} else{
		document.getElementById("sign5").style.display = "none";
	}
}

function validateRoom() {
	var inputroom = document.getElementById("inputRoom").value;
	if(inputroom === 'none'){
		document.getElementById("sign6").style.display = "block";
	} else{
		document.getElementById("sign6").style.display = "none";
	}
}