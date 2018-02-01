'use strict';
/*developed by Viktoriia Kavitska && Tamara Lobzina*/
function BasketItem(name,price,quantity) {
    this.name=name;
    this.price=price;
    this.quantity=quantity;
}

function addToBasket(product) {
    let wasFound=false;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === product.name) {
            basket[i].quantity += product.quantity;
            wasFound=true;
            return;
        }
    }
    if(!wasFound){
        basket.push(product);
    }
}

function addQuantity(){
    let total=0;
    for (let i = 0; i < basket.length; i++){
        total+=basket[i].quantity;
    }
    return total;
    console.log(total);
}

function showBasket(basket) {
    let parent = document.getElementById('cart');
    parent.innerHTML='';
    for (let i = 0; i < basket.length; i++) {
        for(let property in basket[i]){
            let p = document.createElement('p');
            p.innerHTML=property +':'+basket[i][property];
            parent.appendChild(p);
        }
        let span=document.createElement('span');
        span.innerHTML='----------------------------';
        parent.appendChild(span);
    }
    let totalPrice=getTotalPrice();
    let total=document.createElement('p');
    total.innerHTML='Total amount of the order:'+totalPrice;
    parent.appendChild(total );
}

function getTotalPrice(){
    let totalPrice=0;
    let price;
    for (let i = 0; i < basket.length; i++) {
        price=basket[i].price*basket[i].quantity;
        totalPrice+=price;
    }
    return totalPrice;
}

$('#basketIcon').click(function() {
    showBasket(basket);
    $('#cartIconModal').modal('show');
});
/*----------------------------------------------*/

