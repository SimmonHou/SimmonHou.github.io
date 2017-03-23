/**
 * Created by SmallTree on 2017/3/23.
 */

window.onload  = function () {

    var headerStar = document.getElementsByClassName('home_star')[0];
    var starImage = document.getElementsByClassName('home_star_img')[0];
    var timer = null;
    var count = 0;
    clearInterval(timer);
    timer = setInterval(function () {
        headerStar.style.transform = 'rotate(' + count*30 + 'deg)';
        count ++;
    },500)

    starImage.onmouseover = function () {
        clearInterval(timer);
    }

    starImage.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            headerStar.style.transform = 'rotate(' + count*30 + 'deg)';
            count ++;
        },500)
    }
}