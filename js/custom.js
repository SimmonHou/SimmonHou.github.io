/**
 * Created by SmallTree on 2017/3/23.
 */

window.onload  = function () {

    var headerStar = document.getElementsByClassName('home_star')[0];
    var starImage = document.getElementsByClassName('home_star_img')[0];
    var timer = null;
    var count = 0;
    // clearInterval(timer);
    // timer = setInterval(function () {
    //     headerStar.style.transform = 'rotate(' + count*30 + 'deg)';
    //     count ++;
    // },500)
    //
    // starImage.onmouseover = function () {
    //     clearInterval(timer);
    // }
    //
    // starImage.onmouseout = function () {
    //     clearInterval(timer);
    //     timer = setInterval(function () {
    //         headerStar.style.transform = 'rotate(' + count*30 + 'deg)';
    //         count ++;
    //     },500)
    // }


    //中部展示内容
    var imaArray = ['/images/losangeles/bannerLacook.jpg','/images/losangeles/bannerLashop.jpg'];
    var circleDom = document.getElementsByClassName('single_bottom_ul')[0];
    var timer = null;
    var headerUrl = 'http://www.hellola.cn';
    var liArray = circleDom.getElementsByTagName('img');
    var begin = 0;
    liArray[0].src = headerUrl+ imaArray[begin];
    timer = setInterval(function () {
        begin = begin >1?0:begin;
        liArray[0].src = headerUrl+ imaArray[begin];
        begin ++;
    },2000);

}