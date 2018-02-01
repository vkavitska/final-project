"use strict";
/*developed by Viktoriia Kavitska*/

/*--------Local Storage---------*/
let basket=[];

if (localStorage.getItem('userData')) {
    basket = JSON.parse(localStorage.getItem('userData'));
    let totalQuantity=addQuantity();
    $('#basketIcon').html(totalQuantity);
}

function setToLocalStorage() {
    localStorage.setItem('userData', JSON.stringify(basket));
}
/*----------------------------*/

    function clickProduct(event) {
        let clickedProduct = event.target;
        let indexCategory = clickedProduct.getAttribute('data-category-index');
        let indexItem = clickedProduct.getAttribute('data-items-index');
        let indexProduct = clickedProduct.getAttribute('data-product-index');
        showProductsOnProductPage(indexCategory, indexItem, indexProduct);
        blockView('productBlock','block');
        blockView('categoriesPage','none');

    }

    function showProductsOnProductPage(indexCategory, indexItem, indexProduct) {
        let productInfo = document.getElementById('productInfo');
        productInfo.innerHTML = '';
                blockView('productBlock','block');

        for (let property in products[indexCategory].subCategory[indexItem].items[indexProduct]) {
            if (property === 'src') {
                let productImg = document.getElementById('productImg');
                productImg.innerHTML = '';
                let img = document.createElement('img');
                img.setAttribute('src', products[indexCategory].subCategory[indexItem].items[indexProduct].src);
                productImg.appendChild(img);
                continue; //Настя: зачем нам выводить адрес картинки?)
            }
            let p = document.createElement('p');
            p.innerHTML = products[indexCategory].subCategory[indexItem].items[indexProduct][property];
            productInfo.appendChild(p);
        }

        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'productQuantity');
        productInfo.appendChild(input);

        let button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Добавить в корзину');
        button.setAttribute('id', 'buy');
        productInfo.appendChild(button);

        /*send to basket (local storage include)*/
        let price = products[indexCategory].subCategory[indexItem].items[indexProduct].price;
        let name = products[indexCategory].subCategory[indexItem].items[indexProduct].itemName;

        button.onclick = function () {
            let quantity = parseInt(document.getElementById('productQuantity').value);
            let product = new BasketItem(name, price, quantity);
            /*add to basket*/
            addToBasket(product);
            /*send quantity to #basketIcon*/
            let totalQuantity=addQuantity();
            $('#basketIcon').html(totalQuantity);

            setToLocalStorage();
        };

        /*developed by Nastya Suvorova*/
        let navigation = document.getElementById('navigation');
        navigation.innerHTML = '';
        let liCategory = document.createElement('li');
        navigation.appendChild(liCategory);
        let liSubcategory = document.createElement('li');
        navigation.appendChild(liSubcategory);

        let aCategory = document.createElement('a');
        aCategory.innerHTML = products[indexCategory].category;
        aCategory.onclick = function()
        {
            blockView('productBlock','none');
            blockView('categoriesPage','block');
        };
        liCategory.appendChild(aCategory);
        let aSubcategory = document.createElement('a');
        liSubcategory.innerHTML = products[indexCategory].subCategory[indexItem].name;
        liSubcategory.className = 'active';
        liSubcategory.appendChild(aSubcategory);
        /*--------------------------------*/
    }


/*------------------------------------------------*/
