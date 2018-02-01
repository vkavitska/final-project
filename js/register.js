'use strict';

/*developed by Viktoriia Kavitska*/
let users;

$(document).ready(function () {

    function enteredRegisterData () {
        let usersData = {};
        usersData.firstName = $('#firstName').val();
        usersData.lastName = $('#lastName').val();
        usersData.email = $('#emailRegister').val();
        usersData.phone = $('#phone').val();
        usersData.address = $('#address').val();
        usersData.password = $('#passwordRegister').val();
        return usersData;
    }

    function clearRegisterData () {
        $('#firstName').val('');
        $('#lastName').val('');
        $('#emailRegister').val('');
        $('#phone').val('');
        $('#address').val('');
        $('#passwordRegister').val('');
        $('#firstNameError').html('');
        $('#lastNameError').html('');
        $('#emailError').html('');
        $('#phoneError').html('');
        $('#addressError').html('');
        $('#passwordError').html('');
    }

    function validateFirstName () {
        let firstName = $('#firstName').val();
        $('#firstNameError').html('');
        if (firstName.length === 0) {
            $('#firstNameError').html("*this field is required");
            return false;
        }
        let name_pattern = /[a-z]+/i;
        let checkFirstName = name_pattern.test(firstName);
        if (!checkFirstName) {
            $('#firstNameError').html("*you must enter only letters");
            return false;
        }
        return true;
    }

    function validateLastName () {
        let lastName = $('#lastName').val();
        $('#lastNameError').html('');
        if (lastName.length === 0) {
            $('#lastNameError').html("*this field is required");
            return false;
        }
        let name_pattern = /[a-z]+/i;
        let checkLastName = name_pattern.test(lastName);
        if (!checkLastName) {
            $('#lastNameError').html("*you must enter only letters");
            return false;
        }
        return true;
    }

    function validateEmail () {
        let email = $('#emailRegister').val();
        $('#emailError').html('');
        if (email.length === 0) {
            $('#emailError').html("*this field is required");
            return false;
        }
        let email_pattern = /.+@.+\..+/i;
        let checkEmail = email_pattern.test(email);
        if (!checkEmail) {
            $('#emailError').html("*enter correct email");
            return false;
        }
        return true;
    }

    function validatePhone () {
        let phone = $('#phone').val();
        $('#phoneError').html('');
        if (phone.length === 0) {
            $('#phoneError').html("*this field is required");
            return false;
        }
        let phone_pattern = /[0-9]+/i;
        let checkPhone = phone_pattern.test(phone);
        if (!checkPhone) {
            $('#phoneError').html("*you must enter only digits");
            return false;
        }
        return true;
    }

    function validateAddress () {
        let address = $('#address').val();
        $('#addressError').html('');
        if (address.length === 0) {
            $('#addressError').html("*this field is required");
            return false;
        }
        let address_pattern = /[0-9a-z]+/i;
        let checkAddress = address_pattern.test(address);
        if (!checkAddress) {
            $('#addressError').html("*enter the correct address, consisting only of letters and digits");
            return false;
        }
        return true;
    }

    function validatePassword (){
        let password = $('#passwordRegister').val();
        $('#passwordError').html('');
        if (password.length === 0) {
            $('#passwordError').html("*this field is required");
            return false;
        }
        return true;
    }

    function validateRegisterForm() {
        let firstName=validateFirstName();
        let lastName=validateLastName();
        let email=validateEmail();
        let phone=validatePhone();
        let address=validateAddress();
        let password=validatePassword();
        if(firstName===false || lastName===false || email===false || phone===false || address===false || password===false ){
            return false;
        }
        return true;
    }

    $('#btnSignup').click(function () {
        let validate = validateRegisterForm();
        if (validate===true) {
            users = enteredRegisterData();
            console.log(users);
                $('#registerModal').modal('hide');
    });


    $('#registerModal').on('hidden.bs.modal', () => {/* hidden.bs.modal - this event is fired immediately when the hide instance method has been called.*/
        clearRegisterData();
    });
});
//*------------------------------------------------------------------------------*/