var city = document.querySelector(".sect-city")
var area = document.querySelectorAll(".deep li");

city.addEventListener('click', function(){
    if (event.target.tagName !== "A") {
        return;
    }

    var cityName = city.firstElementChild.children; //city의 배열

    for (var i = 0; i < cityName.length; i++) {
        cityName[i].classList.remove('on');
    }
    
    event.target.parentElement.classList.add("on");
})




