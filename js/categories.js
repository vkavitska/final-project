'use strict';
/*developed by Viktoriia Kavitska*/

    function showCategories() {
        let parent = document.getElementById('categoryNameMainPage');
        for (let i = 0; i < products.length; i++) {
            let child = document.createElement('a');
            child.innerHTML = products[i].category;
            child.setAttribute('data-index', i);
            child.onclick = clickCategory;
            parent.appendChild(child);
        }

    }

    showCategories();

    function clickCategory(event) {
        let clickedCategory = event.target;
        let indexCategory = clickedCategory.getAttribute('data-index');
        clickButton('.categoryTags','data-index',indexCategory);
        document.getElementById('categoryName').innerHTML = products[indexCategory].category;
        let parent = document.getElementById('subcategoryName-li');
        parent.innerHTML = '';//очищать перед запуском цикла
        for (let i = 0; i < products[indexCategory].subCategory.length; i++) {
            let child = document.createElement('li');
            child.innerHTML = products[indexCategory].subCategory[i].name;
            child.setAttribute('data-items-index', i);
            child.setAttribute('data-category-index', indexCategory);
            child.onclick = clickItem;
            parent.appendChild(child);
        }
        priceFilter(indexCategory, 0);
        document.getElementsByClassName('page-block')[0].style.display = 'none';
        blockView('productBlock','none');
        blockView('categoriesPage','block');
        clickButton('#subcategoryName-li','data-items-index',0);
    
    }

function showProducts(indexCategory, indexItem, minPrice, maxPrice) {
    let parent = document.getElementById('products');
    parent.innerHTML='';
    for (let i = 0; i < products[indexCategory].subCategory[indexItem].items.length; i++) {
        if (products[indexCategory].subCategory[indexItem].items[i].price >= minPrice && products[indexCategory].subCategory[indexItem].items[i].price <= maxPrice) {
            let div = document.createElement('div');
            //!!!!!!!try to use Object.keys!!!!!!!
            let img = document.createElement('img');
            img.setAttribute('src', products[indexCategory].subCategory[indexItem].items[i].src);
            img.setAttribute('data-items-index', indexItem);
            img.setAttribute('data-category-index', indexCategory);
            img.setAttribute('data-product-index', i);
            div.appendChild(img);

            let p1 = document.createElement('p');
            p1.innerHTML = products[indexCategory].subCategory[indexItem].items[i].itemName;
            p1.setAttribute('data-items-index', indexItem);
            p1.setAttribute('data-category-index', indexCategory);
            p1.setAttribute('data-product-index', i);
            div.appendChild(p1);

            let p2= document.createElement('p');
            p2.innerHTML = products[indexCategory].subCategory[indexItem].items[i].price;
            p2.setAttribute('data-product-index', i);
            p2.setAttribute('data-items-index', indexItem);
            p2.setAttribute('data-category-index', indexCategory);
            div.appendChild(p2);

            div.onclick=clickProduct;
            parent.appendChild(div);
        }
    }
}

    function clickItem(event) {
        let clickedItem = event.target;
        let indexItem = clickedItem.getAttribute('data-items-index');
        let indexCategory = clickedItem.getAttribute('data-category-index');
        priceFilter(indexCategory, indexItem);
        clickButton('#subcategoryName-li','data-items-index',indexItem);

    }

/*-----------------------------------------------------------*/



