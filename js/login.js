'use strict';

/*developed by Viktoriia Kavitska*/

$(document).ready(function() {

    function enteredLoginData() {
        let enteredData = {};
        enteredData.login = $('#email').val();
        enteredData.password = $('#password').val();
        return enteredData;
    }

    function validateEmail() {
        let email = $('#email').val();
        $('#errorEmail').html('');
        if (email.length === 0) {
            $('#errorEmail').html("*this field is required");
            return false;
        }
        let email_pattern = /.+@.+\..+/i;
        let checkEmail = email_pattern.test(email);
        if (!checkEmail) {
            $('#errorEmail').html("*enter correct email");
            return false;
        }
        return true;
    }

    function validatePassword() {
        let password = $('#password').val();
        $('#errorPassword').html('');
        if (password.length === 0) {
            $('#errorPassword').html("*this field is required");
            return false;
        }
        return true;
    }

    function validateLoginForm() {
        let email=validateEmail();
        let password=validatePassword();
        if(email===false ||password===false){
            return false;
        }
        return true;
    }

    $('#btnSignin').click(function (){
        let validate=validateLoginForm();
        if(validate===true) {
            let data = enteredLoginData();
            console.log(data);
            if ((users.email === data.login) && (users.password === data.password)) {
                $('#loginModal').modal('hide');
                $('#helloMsg').html('Welcome to our website,' +''+users.firstName+'!');
                $('#helloAlert').css('display', 'block');
            }
            else {
                $('#noRegister').html('*You must register');
            }
        }
});

    function clearLoginData () {
        $('#errorEmail').html('');
        $('#errorPassword').html('');
        $('#email').val('');
        $('#password').val('');
    }


    $('#loginModal').on('hidden.bs.modal', function(){
        /* hidden.bs.modal - this event is fired immediately when the hide instance method has been called.*/
        clearLoginData();
});
});
/*-----------------------------------------------------------------------------------*/