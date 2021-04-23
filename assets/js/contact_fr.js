$(function(){
	$("#form_contact").submit(function(event){
		var form_nom = $("#nom").val();
		var form_email = $("#email").val();
		var form_sujet = $("#sujet").val();
		var form_message = $("#message").val();
		var form_data;
		$.ajax({
			type: "POST",
			url: "index.html",
			data: $(this).serialize(),
			success: function(result){
				if (result == "true") {
					$("#form_contact").html("<p style=\"color:green;\">Your message has been sent.<br />Merci.</p>");
				}
				else {
					$("#form_contact").html("<p style=\"color:red;\">Ooops, please try later.</p>");
				}
            },
            error: function() {
				$("#form_contact").html("<p style=\"color:red;\">Ooops, please try later.</p>");
            }
		});
        return false;
    });
});