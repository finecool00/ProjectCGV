/* 영화 목록 추가 */

// var movieList = document.querySelector(".movie_select_list");

// var movieLi = document.createElement("li");
// var movieImg = document.createElement("img");
// var movieA = document.createElement("a");

// movieImg.src = "imgs/ageAll.svg";
// movieA.innerHTML = '도라이몽-징구와 하늘의 유토피아';

// movieLi.appendChild(movieImg);
// movieLi.appendChild(movieA);
// movieList.appendChild(movieLi);

/* 영화 정렬 */
//예매율 순
// var sort = document.querySelector(".movie_select_sort");
// sort.addEventListener('click', function() {
// });

/* 영화 선택결과 */
var list1 = document.querySelector(".movie_select_list .lists .a");
var list2 = document.querySelector(".movie_select_list .lists .b");
var list3 = document.querySelector(".movie_select_list .lists .c");
var list4 = document.querySelector(".movie_select_list .lists .d");
var list5 = document.querySelector(".movie_select_list .lists .e");

var movie_info_img = document.querySelector(".movie_info_img");
var movie_info_text = document.querySelector(".movie_info_text");

list1.onclick = function() {
 
    movie_info_img.src = "imgs/small04.jpg";
    movie_info_text.innerHTML = "도라에몽<br/>"
                                + "-진구와 하늘의 유토피아-";

}

list2.onclick = function() {

    movie_info_img.src = "imgs/small05.jpg";
    movie_info_text.innerHTML = "악마들"

}

list3.onclick = function() {

    movie_info_img.src = "imgs/small01.jpg";
    movie_info_text.innerHTML = "미션 임파서블<br/>"
                                + "-데드 레코딩-";

}

list4.onclick = function() {

    movie_info_img.src = "imgs/small02.jpg";
    movie_info_text.innerHTML = "스파이더맨<br/>"
                                + "-어크로스 더 유니버스-";

}

list5.onclick = function() {

    movie_info_img.src = "imgs/small03.jpg";
    movie_info_text.innerHTML = "엘리멘탈"

}

/* 극장 선택결과 */

var store_select_store1 = document.querySelector(".store_select_list > li > .a");
var store_select_store2 = document.querySelector(".store_select_list > li > .b");
var store_select_store3 = document.querySelector(".store_select_list > li > .c");

var store_select_store4 = document.querySelector(".store_select_list2 > li > .a2");
var store_select_store5 = document.querySelector(".store_select_list2 > li > .b2");
var store_select_store6 = document.querySelector(".store_select_list2 > li > .c2");

var theater_info_result = document.querySelector(".theater_info_result");


store_select_store1.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store1.innerHTML;
}
store_select_store2.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store2.innerHTML;
}
store_select_store3.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store3.innerHTML;
}

store_select_store4.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store4.innerHTML;
}
store_select_store5.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store5.innerHTML;
}
store_select_store6.onclick = function() {
    theater_info_result.innerHTML = "극장 : CGV" + store_select_store6.innerHTML;
}


/* 날짜 선택결과 */

var marker1 = document.querySelector(".marker1");
var marker2 = document.querySelector(".marker2");
var marker3 = document.querySelector(".marker3");
var marker4 = document.querySelector(".marker4");
var marker5 = document.querySelector(".marker5");
var marker6 = document.querySelector(".marker6");

var marking1 = document.querySelector(".marking1");
var marking2 = document.querySelector(".marking2");
var marking3 = document.querySelector(".marking3");
var marking4 = document.querySelector(".marking4");
var marking5 = document.querySelector(".marking5");
var marking6 = document.querySelector(".marking6");

var lili = document.querySelectorAll(".date_list > li");

var result_dow1 = document.querySelector(".dows1");
var result_dow2 = document.querySelector(".dows2");
var result_dow3 = document.querySelector(".dows3");
var result_dow4 = document.querySelector(".dows4");
var result_dow5 = document.querySelector(".dows5");
var result_dow6 = document.querySelector(".dows6");

var result_dow_num1 = document.querySelector(".dow_num1");
var result_dow_num2 = document.querySelector(".dow_num2");
var result_dow_num3 = document.querySelector(".dow_num3");
var result_dow_num4 = document.querySelector(".dow_num4");
var result_dow_num5 = document.querySelector(".dow_num5");
var result_dow_num6 = document.querySelector(".dow_num6");

var month = document.querySelector(".year_month_box2 > .month");
var theater_info_date = document.querySelector(".theater_info_date");

var theater_info_time = document.querySelector(".theater_info_time")
var time_result_a = document.querySelector(".time_seat_detail > .x")
var time_result_b = document.querySelector(".time_seat_detail_a > .y")


/* 시간 선택 */
var placeholder = document.querySelector(".placeholder_hidden > span");
var day = document.querySelector(".day > .day_img");
var day_cont = document.querySelector(".day > .day_content");
var night = document.querySelector(".night > .night_img");
var night_cont = document.querySelector(".night > .night_content");
var detail_summary = document.querySelector(".detail_summary");
var time_detail = document.querySelector(".time_seat_detail");
var time_detail2 = document.querySelector(".time_seat_detail_a");

function textVisible() {

    placeholder.style.display = 'none';
    day.style = "visibility:visible";
    day_cont.style = "visibility:visible";
    night.style = "visibility:visible";
    night_cont.style = "visibility:visible";
    detail_summary.style = "visibility:visible";
    time_detail.style = "visibility:visible";
    time_detail2.style = "visibility:visible";
    
}

marker1.onclick = function() {
    
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";

    marking1.style.display = "inline"
    marking1.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num1.innerHTML + '일(' + result_dow1.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "11:30";
    time_detail.lastElementChild.innerHTML = "48석";
    time_detail2.firstElementChild.innerHTML = "15:00";
    time_detail2.lastElementChild.innerHTML = "40석"


    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;
        
    }



}
marker2.onclick = function() {

    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";

    marking2.style.display = "inline";
    marking2.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num2.innerHTML + '일(' + result_dow2.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "12:00";
    time_detail.lastElementChild.innerHTML = "24석";
    time_detail2.firstElementChild.innerHTML = "15:00";
    time_detail2.lastElementChild.innerHTML = "13석"

    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;
        
    }



}
marker3.onclick = function() {

    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";

    marking3.style.display = "inline";
    marking3.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + + result_dow_num3.innerHTML + '일(' + result_dow3.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "16:00";
    time_detail.lastElementChild.innerHTML = "24석";
    time_detail2.firstElementChild.innerHTML = "15:00";
    time_detail2.lastElementChild.innerHTML = "13석"


    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;
        
    }



}
marker4.onclick = function() {

    marking5.style = "visibility:hidden";
    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";

    marking4.style.display = "inline";
    marking4.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num4.innerHTML + '일(' + result_dow4.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "14:00";
    time_detail.lastElementChild.innerHTML = "4석";
    time_detail2.firstElementChild.innerHTML = "17:35";
    time_detail2.lastElementChild.innerHTML = "13석"


    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;
        
    }



}
marker5.onclick = function() {

    marking6.style = "visibility:hidden";
    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";

    marking5.style.display = "inline";
    marking5.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num5.innerHTML + '일(' + result_dow5.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "10:40";
    time_detail.lastElementChild.innerHTML = "57석";
    time_detail2.firstElementChild.innerHTML = "19:00";
    time_detail2.lastElementChild.innerHTML = "5석"


    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;
        
    }


}
marker6.onclick = function() {

    marking1.style = "visibility:hidden";
    marking2.style = "visibility:hidden";
    marking3.style = "visibility:hidden";
    marking4.style = "visibility:hidden";
    marking5.style = "visibility:hidden";

    marking6.style.display = "inline";
    marking6.style = "visibility:visible";

    theater_info_date.innerHTML = '날짜 : ' + month.innerHTML + '월' + result_dow_num6.innerHTML + '일(' + result_dow6.innerHTML + ')';

    time_detail.firstElementChild.innerHTML = "12:00";
    time_detail.lastElementChild.innerHTML = "33석";
    time_detail2.firstElementChild.innerHTML = "15:00";
    time_detail2.lastElementChild.innerHTML = "38석"

    textVisible();

    time_result_a.onclick = function () {

        theater_info_date.innerHTML += ' ' + time_result_a.innerHTML;
        
    }
    time_result_b.onclick = function () {
    
        theater_info_date.innerHTML += ' ' + time_result_b.innerHTML;

    }
}


/* 할인정보 안내 */

var discount = document.querySelector(".discount_info > a");

console.log(discount);
discount.onclick = function() {
    window.open('discountPop.html', '할인안내', 'width=600px, height=500px, left=500px, top=500px');
}


/* 인원수 선택 */
var peopleCount1 = document.querySelector(".people_count_nums > li > .num1");
var peopleCount2 = document.querySelector(".people_count_nums > li > .num2");
var peopleCount3 = document.querySelector(".people_count_nums > li > .num3");
var peopleCount4 = document.querySelector(".people_count_nums > li > .num4");
var peopleCount5 = document.querySelector(".people_count_nums > li > .num5");

var rows = document.querySelectorAll(".seat_group > a");
var cntArr = new Array();
// var cnts = peopleCount.children[i].firstElementChild.innerHTML;
// var cntArr = new Array(2);

// console.log(cntArr);
// console.log(peopleCount.children.length);

peopleCount1.onclick = function() {

    cntArr = new Array(1);

}

peopleCount2.onclick = function() {

    cntArr = new Array(2);

}
peopleCount3.onclick = function() {

    cntArr = new Array(3);

}
peopleCount4.onclick = function() {

    cntArr = new Array(4);

}
peopleCount5.onclick = function() {

    cntArr = new Array(5);

}

// for(var i = 0; i < peopleCount.children.length; i++) {

//     if(peopleCount.children[i].firstElementChild.innerHTML != 1) {
//         var cntArr = new Array(2);
//         console.log(cntArr);
//     } else {
//         var cntArr = new Array(1);
//         console.log(cntArr);
//     }

// }

/* 좌석선택 */
var rowA1 = document.querySelector(".seat_group1 > .a1");
var rowA2 = document.querySelector(".seat_group1 > .a2");
var rowA3 = document.querySelector(".seat_group1 > .a3");
var rowA4 = document.querySelector(".seat_group1 > .a4");
var rowA5 = document.querySelector(".seat_group1 > .a5");
var rowA6 = document.querySelector(".seat_group1 > .a6");
var rowA7 = document.querySelector(".seat_group1 > .a7");
var rowA8 = document.querySelector(".seat_group1 > .a8");
var rowA9 = document.querySelector(".seat_group1 > .a9");
var rowA10 = document.querySelector(".seat_group1 > .a10");

var seatInfo = document.querySelector(".seat_info");

rowA1.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA1.innerHTML;
    cntArr.push(1);
})
rowA2.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA2.innerHTML;
    cntArr.push(1);
})
rowA3.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA3.innerHTML;
    cntArr.push(1);
})
rowA4.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA4.innerHTML;
    cntArr.push(1);
})
rowA5.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA5.innerHTML;
    cntArr.push(1);
})
rowA6.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA6.innerHTML;
    cntArr.push(1);
})
rowA7.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA7.innerHTML;
    cntArr.push(1);
})
rowA8.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA8.innerHTML;
    cntArr.push(1);
})
rowA9.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA9.innerHTML;
    cntArr.push(1);
})
rowA10.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA10.innerHTML;
    cntArr.push(1);
})


var rowB1 = document.querySelector(".seat_group2 > .b1");
var rowB2 = document.querySelector(".seat_group2 > .b2");
var rowB3 = document.querySelector(".seat_group2 > .b3");
var rowB4 = document.querySelector(".seat_group2 > .b4");
var rowB5 = document.querySelector(".seat_group2 > .b5");
var rowB6 = document.querySelector(".seat_group2 > .b6");
var rowB7 = document.querySelector(".seat_group2 > .b7");
var rowB8 = document.querySelector(".seat_group2 > .b8");
var rowB9 = document.querySelector(".seat_group2 > .b9");
var rowB10 = document.querySelector(".seat_group2 > .b10");

rowB1.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB1.innerHTML;
    cntArr.push(1);
})
rowB2.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB2.innerHTML;
    cntArr.push(1);
})
rowB3.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB3.innerHTML;
    cntArr.push(1);
})
rowB4.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB4.innerHTML;
    cntArr.push(1);
})
rowB5.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB5.innerHTML;
    cntArr.push(1);
})
rowB6.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB6.innerHTML;
    cntArr.push(1);
})
rowB7.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB7.innerHTML;
    cntArr.push(1);
})
rowB8.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB8.innerHTML;
    cntArr.push(1);
})
rowB9.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB9.innerHTML;
    cntArr.push(1);
})
rowB10.addEventListener('click', function() {
    seatInfo.innerHTML += " B" + rowB10.innerHTML;
    cntArr.push(1);
})

var rowC1 = document.querySelector(".seat_group3 > .c1");
var rowC2 = document.querySelector(".seat_group3 > .c2");
var rowC3 = document.querySelector(".seat_group3 > .c3");
var rowC4 = document.querySelector(".seat_group3 > .c4");
var rowC5 = document.querySelector(".seat_group3 > .c5");
var rowC6 = document.querySelector(".seat_group3 > .c6");
var rowC7 = document.querySelector(".seat_group3 > .c7");
var rowC8 = document.querySelector(".seat_group3 > .c7");
var rowC9 = document.querySelector(".seat_group3 > .c8");
var rowC10 = document.querySelector(".seat_group3 > .c10");

rowC1.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC1.innerHTML;
    cntArr.push(1);
})
rowC2.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC2.innerHTML;
    cntArr.push(1);
})
rowC3.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC3.innerHTML;
    cntArr.push(1);
})
rowC4.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC4.innerHTML;
    cntArr.push(1);
})
rowC5.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC5.innerHTML;
    cntArr.push(1);
})
rowC6.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC6.innerHTML;
    cntArr.push(1);
})
rowC7.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC7.innerHTML;
    cntArr.push(1);
})
rowC8.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC8.innerHTML;
    cntArr.push(1);
})
rowC9.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC9.innerHTML;
    cntArr.push(1);
})
rowC10.addEventListener('click', function() {
    seatInfo.innerHTML += " C" + rowC10.innerHTML;
    cntArr.push(1);
})

var rowD1 = document.querySelector(".seat_group4 > .d1");
var rowD2 = document.querySelector(".seat_group4 > .d2");
var rowD3 = document.querySelector(".seat_group4 > .d3");
var rowD4 = document.querySelector(".seat_group4 > .d4");
var rowD5 = document.querySelector(".seat_group4 > .d5");
var rowD6 = document.querySelector(".seat_group4 > .d6");
var rowD7 = document.querySelector(".seat_group4 > .d7");
var rowD8 = document.querySelector(".seat_group4 > .d8");
var rowD9 = document.querySelector(".seat_group4 > .d9");
var rowD10 = document.querySelector(".seat_group4 > .d10");

rowD1.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD1.innerHTML;
    cntArr.push(1);
})
rowD2.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD2.innerHTML;
    cntArr.push(1);
})

rowD3.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD3.innerHTML;
    cntArr.push(1);
})
rowD4.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD4.innerHTML;
    cntArr.push(1);
})
rowD5.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD5.innerHTML;
    cntArr.push(1);
})
rowD6.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD6.innerHTML;
    cntArr.push(1);
})
rowD7.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD7.innerHTML;
    cntArr.push(1);
})
rowD8.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD8.innerHTML;
    cntArr.push(1);
})
rowD9.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD9.innerHTML;
    cntArr.push(1);
})
rowD10.addEventListener('click', function() {
    seatInfo.innerHTML += " D" + rowD10.innerHTML;
    cntArr.push(1);
})

var rowE1 = document.querySelector(".seat_group5 > .e1");
var rowE2 = document.querySelector(".seat_group5 > .e2");
var rowE3 = document.querySelector(".seat_group5 > .e3");
var rowE4 = document.querySelector(".seat_group5 > .e4");
var rowE5 = document.querySelector(".seat_group5 > .e5");
var rowE6 = document.querySelector(".seat_group5 > .e6");
var rowE7 = document.querySelector(".seat_group5 > .e7");
var rowE8 = document.querySelector(".seat_group5 > .e8");
var rowE9 = document.querySelector(".seat_group5 > .e9");
var rowE10 = document.querySelector(".seat_group5 > .e10");

rowE1.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE1.innerHTML;
    cntArr.push(1);
})
rowE2.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE2.innerHTML;
    cntArr.push(1);
})
rowE3.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE3.innerHTML;
    cntArr.push(1);
})
rowE4.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE4.innerHTML;
    cntArr.push(1);
})
rowE5.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE5.innerHTML;
    cntArr.push(1);
})
rowE6.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE6.innerHTML;
    cntArr.push(1);
})
rowE7.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE7.innerHTML;
    cntArr.push(1);
})
rowE8.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE8.innerHTML;
    cntArr.push(1);
})
rowE9.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE9.innerHTML;
    cntArr.push(1);
})
rowE10.addEventListener('click', function() {
    seatInfo.innerHTML += " E" + rowE10.innerHTML;
    cntArr.push(1);
})

var rowF1 = document.querySelector(".seat_group6 > .f1");
var rowF2 = document.querySelector(".seat_group6 > .f2");
var rowF3 = document.querySelector(".seat_group6 > .f3");
var rowF4 = document.querySelector(".seat_group6 > .f4");
var rowF5 = document.querySelector(".seat_group6 > .f5");
var rowF6 = document.querySelector(".seat_group6 > .f6");
var rowF7 = document.querySelector(".seat_group6 > .f7");
var rowF8 = document.querySelector(".seat_group6 > .f8");
var rowF9 = document.querySelector(".seat_group6 > .f9");
var rowF10 = document.querySelector(".seat_group6 > .f10");

rowF1.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF1.innerHTML;
    cntArr.push(1);
})
rowF2.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF2.innerHTML;
    cntArr.push(1);
})
rowF3.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF3.innerHTML;
    cntArr.push(1);
})
rowF4.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF4.innerHTML;
    cntArr.push(1);
})
rowF5.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF5.innerHTML;
    cntArr.push(1);
})
rowF6.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF6.innerHTML;
    cntArr.push(1);
})
rowF7.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF7.innerHTML;
    cntArr.push(1);
})
rowF8.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF8.innerHTML;
    cntArr.push(1);
})
rowF9.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF9.innerHTML;
    cntArr.push(1);
})
rowF10.addEventListener('click', function() {
    seatInfo.innerHTML += " F" + rowF10.innerHTML;
    cntArr.push(1);
})

var rowG1 = document.querySelector(".seat_group7 > .g1");
var rowG2 = document.querySelector(".seat_group7 > .g2");
var rowG3 = document.querySelector(".seat_group7 > .g3");
var rowG4 = document.querySelector(".seat_group7 > .g4");
var rowG5 = document.querySelector(".seat_group7 > .g5");
var rowG6 = document.querySelector(".seat_group7 > .g6");
var rowG7 = document.querySelector(".seat_group7 > .g7");
var rowG8 = document.querySelector(".seat_group7 > .g8");
var rowG9 = document.querySelector(".seat_group7 > .g9");
var rowG10 = document.querySelector(".seat_group7 > .g10");

rowG1.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA1.innerHTML;
    cntArr.push(1);
})
rowG2.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA2.innerHTML;
    cntArr.push(1);
})
rowG3.addEventListener('click', function() {
    seatInfo.innerHTML += " A" + rowA3.innerHTML;
    cntArr.push(1);
})
rowG4.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG4.innerHTML;
    cntArr.push(1);
})
rowG5.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG5.innerHTML;
    cntArr.push(1);
})
rowG6.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG6.innerHTML;
    cntArr.push(1);
})
rowG7.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG7.innerHTML;
    cntArr.push(1);
})
rowG8.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG8.innerHTML;
    cntArr.push(1);
})
rowG9.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG9.innerHTML;
    cntArr.push(1);
})
rowG10.addEventListener('click', function() {
    seatInfo.innerHTML += " G" + rowG10.innerHTML;
    cntArr.push(1);
})

var rowH1 = document.querySelector(".seat_group8 > .h1");
var rowH2 = document.querySelector(".seat_group8 > .h2");
var rowH3 = document.querySelector(".seat_group8 > .h3");
var rowH4 = document.querySelector(".seat_group8 > .h4");
var rowH5 = document.querySelector(".seat_group8 > .h5");
var rowH6 = document.querySelector(".seat_group8 > .h6");
var rowH7 = document.querySelector(".seat_group8 > .h7");
var rowH8 = document.querySelector(".seat_group8 > .h8");
var rowH9 = document.querySelector(".seat_group8 > .h9");
var rowH10 = document.querySelector(".seat_group8 > .h10");

rowH1.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH1.innerHTML;
    cntArr.push(1);
})
rowH2.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH2.innerHTML;
    cntArr.push(1);
})
rowH3.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH3.innerHTML;
    cntArr.push(1);
})
rowH4.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH4.innerHTML;
    cntArr.push(1);
})
rowH5.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH5.innerHTML;
    cntArr.push(1);
})
rowH6.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH6.innerHTML;
    cntArr.push(1);
})
rowH7.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH7.innerHTML;
    cntArr.push(1);
})
rowH8.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH8.innerHTML;
    cntArr.push(1);
})
rowH9.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH9.innerHTML;
    cntArr.push(1);
})
rowH10.addEventListener('click', function() {
    seatInfo.innerHTML += " H" + rowH10.innerHTML;
    cntArr.push(1);
})

/* 예매완료 */

var booked = document.querySelector(".complete_booking > .booked");

booked.onclick = function() {

    window.open("bookedPop.html", "예매완료 안내", "width=500px height=300px top=500px left=500px");

    // var p = document.createElement("p");
    // var small = document.createElement("small");

    // p.innerHTML = "총 금액 : 15000 X " + cntArr.length + " = " + (15000 * cntArr.length) + "원";
    // small.innerHTML = "금액을 확인하신 후 직접 발권 또는 아래 계좌로 입금 바랍니다<br/>"
    //                   + "KZ은행 : 123123-00-4567890"

    

}
    
/* 좌석정보 등 최종정보 */

var reservChecking= document.querySelector(".complete_booking > .checking");
var times_detail_summary = document.querySelector(".time_detail > .detail_summary");
var reserv_tInfo = document.querySelector(".reservation > .teather_info");
var reserv_dInfo = document.querySelector(".reservation > .date_info");

reservChecking.onclick = function() {

    reserv_tInfo.innerHTML = '극장 : ' + theater_info_result.innerHTML + ' / 상영관 : ' + times_detail_summary.innerHTML + ' / 남은좌석 : ' + time_detail.lastElementChild.innerHTML +'/80석';
    reserv_dInfo.innerHTML = theater_info_date.innerHTML;

}




// var as = rows.children[1].innerHTML;

// console.log(as);

/* 할인안내 팝업 */
// var discountclose = document.querySelector(".discountBox > .close");

// discountclose.onclick = function() {
//     window.close();
// }


// /* 예매완료 팝업 */
// var compleClose = document.querySelector(".btnBox > .close");
// compleClose.onclick = function() {
//     window.close();
// }























