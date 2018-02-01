'use strict';

$('#goToIndexHtml').click(function(){
    location.href='../index.html';
});

$('#makePurchase').click(function () {
    location.href='../order.html';
});

$('#shapki').click(function(){
    showProductsOnProductPage(0, 2, 1);
});

$('#rukzak').click(function(){
    showProductsOnProductPage(0, 1, 3);
});

$('#portmone').click(function(){
    showProductsOnProductPage(0, 1, 1);
});

/*developed by Nastya Suvorova*/
$('.contactsLink').click(function() {
    blockView('categoriesPage','none');
    blockView('productBlock','none');
    blockView('Slider','none');
    blockView('shipping','none');
    blockView('contactsBlock','block');
    initMap();
    let children = $('.categoryTags').children();
    children.removeClass();
});

$('.shippingHandling').click(function() {
    blockView('categoriesPage','none');
    blockView('productBlock','none');
    blockView('Slider','none');
    blockView('contactsBlock','none');
    blockView('shipping','block');
    let children = $('.categoryTags').children();
    children.removeClass();
});
/*-------------------------------------*/
