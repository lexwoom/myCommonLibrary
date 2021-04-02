function getUrlVar(){
    var urlVar = window.location.search; // получаем параметры из урла
    var arrayVar = []; // массив для хранения переменных
    var valueAndKey = []; // массив для временного хранения значения и имени переменной
    var resultArray = []; // массив для хранения переменных
    arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
    if(arrayVar[0]=="") return false; // если нет переменных в урле
    for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
        valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
        resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
    }
    return resultArray; // возвращаем результат
}
var gets = getUrlVar();
var elem = document.getElementById('picHolder');
if(gets.test==1) {
elem.insertAdjacentHTML("afterbegin", '<div class="banner_text">ПРОМОАКЦИИ И ДЕГУСТАЦИИ<br> С ЗАБОТОЙ О ЗДОРОВЬЕ ПОКУПАТЕЛЕЙ - <br>КАЖДЫЙ КУСОЧЕК В ИНДИВИДУАЛЬНОЙ УПАКОВКЕ</div><div class="slider_banner">[[getImageList? &tvname=`resourcealbum` &tpl=`gallery_item_tpl`]]</div>');
} else {
elem.insertAdjacentHTML("afterbegin", '<a href="/uslugi/banner-na-fasade.html" class="link-flex"><img src="images/banner_under_image.png" alt="" class="lf-img1"><img src="images/banner_overlay_caption.png" alt="" class="lf-img2"></a>');
}
