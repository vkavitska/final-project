'use strict';

$('#firstSlide').click(()=>{
    showCategory(0);
    showProducts(0,2);
});

$('#secondSlide').click(()=>{
    showCategory(0);
    showProducts(0,1);
});

$('#thirdSlide').click(()=>{
    showCategory(0);
    showProducts(0,1);
});

function showCategory(indexCategory) {
    document.getElementById('categoryName').innerHTML = products[indexCategory].category;
    let parent = document.getElementById('subcategoryName-li');
    parent.innerHTML = '';
    for (let i = 0; i < products[indexCategory].subCategory.length; i++) {
        let child = document.createElement('li');
        child.innerHTML = products[indexCategory].subCategory[i].name;
        child.setAttribute('data-items-index', i);
        child.setAttribute('data-category-index', indexCategory);
        child.onclick = clickItem;
        parent.appendChild(child);
    }
}