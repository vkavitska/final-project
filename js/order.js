'use strict';

/*Developed by Tamara Lobzina*/

$('#goToIndexHtml').click(function(){
    location.href='../index.html';
});

$('#makePurchase').click(function(){
    window.open('form.html');
});

$('.payButton').click(function(){
    nameValidate();
    middleNameValidate();
    lastNameValidate();
    emailValidate();
    validatePhone();
    phoneValidate();
    validatePostCode();
});

function nameValidate() {
    let name = $('#firstName2').val();
    if (name === "") {
        $('#nameError2').html("Имя должно быть заполнено");
        $("input[name='orderPurchase[firstName]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }

    if ($('#firstName2').val().length < 3){
        $('#nameError2').html("Имя должно быть заполнено");
        $("input[name='orderPurchase[firstName]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
    console.log(name);
}


function middleNameValidate(){
    let middleName = $('#middleName2').val();
    if (middleName === "") {
        $('#middleNameError2').html("Отчество должно быть заполнено");
        $("input[name='orderPurchase[middleName]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
    console.log(middleName);
}


function lastNameValidate(){
    let lastName = $('#lastName2').val();
    if (lastName === "") {
        $('#lastNameError2').html("Фамилия должна быть заполнена");
        $("input[name='orderPurchase[lastName]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
    console.log(lastName);
}

function emailValidate() {
    let email = $('#email2').val();
    if (email === "") {
        $('#emailError2').html("Эл. почта (для уведомлений должна быть заполнена");
        $("input[name='orderPurchase[email]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
    if (!validateEmail(email)) {
        $('#emailError2').html("Эл. почта (для уведомлений должна быть заполнена");
        $("input[name='orderPurchase[email]']").css("background-color","#fdfafa"),("border","solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }

    console.log(email);
}

function validateEmail($email) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function validatePhone() {
    let phone = $('#phone').val();
    if (phone === "") {
        $('#phoneError').html("Номер телефона должен быть заполнен");
        $("input[name='orderPurchase[phone]").css("background-color", "#fdfafa"), ("border", "solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
    if(!phoneValidate(phone)){
        $('#phoneError').html("Номер телефона должен быть заполнен");
        $("input[name='orderPurchase[phone]").css("background-color", "#fdfafa"), ("border", "solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
}

function phoneValidate($phone) {
    let phoneReg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    return phoneReg.test($phone);
}

function validatePostCode() {
    let postcode = $('#zipCode').val();
    if (postcode === "") {
        $('#zipcodeError').html("Индексдолжен содержать 6 цифр");
        $("input[name='orderPurchase[zipCode]").css("background-color", "#fdfafa"), ("border", "solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }

    if (!validatePostCodeContent(postcode)){
        $('#zipcodeError').html("Индексдолжен содержать 6 цифр");
        $("input[name='orderPurchase[zipCode]").css("background-color", "#fdfafa"), ("border", "solid 1px #ffdada"),
            ("box-shadow", "0 0 6px 0 #ffdada");
    }
}

function validatePostCodeContent($postcode){
    let postcodeReg =/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    return postcodeReg.test($postcode);
}


// document.querySelector("input[name='orderPurchase[zipCode]").addEventListener("keypress", function (evt) {
//     if (evt.which < 48 || evt.which > 57)
//     {
//         evt.preventDefault();
//     }
// });
/*---------------------------------------------------------*/



