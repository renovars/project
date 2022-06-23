$("#sendForm").on("click", function() {
    var name = $("#inputName").val();
    var surname = $("#inputSurname").val();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var repeatPassword = $("#inputRepeatPassword").val();

    $.ajax({
        url: 'php/form-process.php',
        type: 'POST',
        data: {'name': name, 'surname': surname, 'email': email, 'password': password, 'repeatPassword': repeatPassword},
        dataType: 'html',
        success: function(data){
            if (data == ""){
                $("#registrationForm").hide();
                $("#successRegistration").removeClass('invisible');
            } else {
                alert(data);
            }
        }

    })
});