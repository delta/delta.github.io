var element = document.querySelector('form');
element.addEventListener('submit', event => {
    event.preventDefault();
    submit();
});

function submit() {
	var route = "/submit.php";
	var method = "POST";
    var data = {
        "name" : $("#name").val(),
        "rollno" : $("#rollno").val(),
        "phoneno" : $("#phoneno").val(),
        "email" : $("#email").val(),
        "github" : $("#github").val(),
        "gender" : $("input[name='gender']:checked").val(),
        "webdev" : $("#webdev").prop('checked') ? 1 : 0,
        "appdev" : $("#appdev").prop('checked') ? 1 : 0,
        "sysad" : $("#sysad").prop('checked') ? 1 : 0,
        "open" : $("#open").prop('checked') ? 1 : 0,
        "interests" : $("#interests").val()
    };

	var request = $.ajax({
		url : route,
		method : method,
		data : data,
		xhrFields : {
			withCredentials : true
		}
	});

	request.done(function(data){
		if(data.trim() == "Success") {
            alert("Successfully registered!");
            location.reload();
		} else {
            console.log(data);
            alert("Registration Failed. Please check your inputs.");
		}
	});
}
