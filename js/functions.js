/*developed by Nastya Suvorova*/
function initMap() {
        let uluru = {lat: 46.4774700, lng: 30.7326200};
        let myCenter = {lat: 46.4774700, lng: 30.7306200};
        let map = new google.maps.Map(document.getElementById('contacts'), {
          zoom: 17,
          center: myCenter
        });
        let marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


function blockView(block,display) {
    document.getElementById(block).style.display = display;
}

//функция изменения цвета при клике на категорию
function clickButton(parent, attr, button){
  let children = $(parent).children();
  children.removeClass();
  for (let i = 0; i < children.length; i++) {
    if (children.eq(i).attr(attr) === button) {
      children.eq(i).addClass('buttonClickStyle');
    }
  }
}
/*-----------------------------------------*/



