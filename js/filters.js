'use strict';
/*developed by Nastya Suvorova*/
function priceFilter(category,subCategory) {
    /*в arr получаем текущую подкатегорию*/
    let arr = products[category].subCategory[subCategory].items;
    let minPriceChange, maxPriceChange;

    /*массив цен*/
    let arrPrices = arr.map(function (items) {
        return items.price;
    });

    let minPrice = Math.min.apply(null, arrPrices);
    let maxPrice = Math.max.apply(null, arrPrices);

    /*функция слайдера из библиотеки jquery ui*/
    $(function () {
        $('#priceSlider').slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [Math.min.apply(null, arrPrices), Math.max.apply(null, arrPrices)],
            animate: 'normal',
            step: 10,
            /*Событие slide происходит при каждом перемещения мыши во время прокрутки*/
            slide: function (event, ui) {
                /*указываем в инпутах минимальное и максимальное значения, которые изменяем*/
                $('#minprice').val(ui.values[0]);
                $('#maxprice').val(ui.values[1]);
                showProducts(category, subCategory, ui.values[0], ui.values[1]);
            }
        });
        /*указываем в инпутах исходное минимальное и максимальное значение*/
        $('#minprice').val($('#priceSlider').slider('values', 0));
        $('#maxprice').val($('#priceSlider').slider('values', 1));


        $("#minprice").change(function () {
            let value1 = parseInt($("#minprice").val());
            let value2 = parseInt($("#maxprice").val());
            if (value1 > value2) {
                value1 = value2;
                $("#minprice").val(value1);
            }
            if (isNaN(value1) || value1 < $('#minprice').val($('#priceSlider').slider('values', 0))) {
                $("#minprice").val($('#priceSlider').slider('values', 0));
            }
            $("#priceSlider").slider("values", 0, value1);
        });

        $("#maxprice").change(function () {
            let value1 = parseInt($("#minprice").val());
            let value2 = parseInt($("#maxprice").val());
            if (value1 > value2) {
                value2 = value1;
                $("#maxprice").val(value2);
            }
            if (isNaN(value2) || value2 > $('#maxprice').val($('#priceSlider').slider('values', 1))) {
                $("#minprice").val($('#priceSlider').slider('values', 1));
            }
            $("#priceSlider").slider("values", 1, value2);
        });


        showProducts(category, subCategory, minPrice, maxPrice);
    });
}

/*---------------------------------------------------*/
