
$('.menu > li').mouseover(function () {

    $(this).children('.sub').stop().slideDown();

}).mouseout(function () {

    $('.sub').stop().slideUp();

});






$(function () {
    $('.category').mouseover(function () {
        $(this).children('.category_in').stop().slideDown(0);
    }).mouseout(function () {
        $('.category_in').stop().slideUp(0)
    });
});

$ (function () {
    $('.category_menus').mouseover(function () {
        $('.slideright').stop().animate({ marginLeft: 250 }, 400)
    });
    $('.category_menus').mouseout(function () {
        $('.slideright').stop().animate({ marginLeft: 0 }, 400)
    });
});

$(function () {
    let intervalId;
    let intervalTime = 5000;
    let resetTimer;

    function resetIntervalTime() {
        intervalTime = 5000;
        clearInterval(intervalId);
        intervalId = setInterval(slider, intervalTime);
    }

    function prev() {
        if (intervalTime < 10000) {
            intervalTime += 3000;
            clearInterval(intervalId);
            intervalId = setInterval(slider, intervalTime);
        }

        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetIntervalTime, 5000);

        $('.slidewrap li:last').prependTo('.slidewrap');
        $('.slidewrap').css('margin-left', -1900);
        $('.slidewrap').stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        if (intervalTime < 10000) {
            intervalTime += 3000;
            clearInterval(intervalId);
            intervalId = setInterval(slider, intervalTime);
        }

        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetIntervalTime, 5000);

        $('.slidewrap').stop().animate({ marginLeft: -1900 }, function () {
            $('.slidewrap li:first').appendTo('.slidewrap');
            $('.slidewrap').css({ marginLeft: 0 });
        });
    }

    function slider() {
        $('.slidewrap').stop().animate({ marginLeft: -1900 }, function () {
            $('.slidewrap li:first').appendTo('.slidewrap');
            $('.slidewrap').css({ marginLeft: 0 });
        });
    }

    intervalId = setInterval(slider, intervalTime);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});


