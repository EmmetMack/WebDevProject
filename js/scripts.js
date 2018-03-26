function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var txtDob = $("#dob").val() ;
	var dob = new Date(txtDob);
	if (dob >= new Date()) {
		alert("Date of birth is not valid. Date has to be before today.");
		return false;
	}
	var phNum = $("#phone").val();
	var sln = phNum.length
	var bool = isNaN(phNum)
	if (isNaN(phNum)){
		alert("Phone number is not valid or not in a valid format");
		return false;
	}
	if (sln != 10) {
		alert("Phone number is not valid or not in a valid format");
		return false;
	}
}