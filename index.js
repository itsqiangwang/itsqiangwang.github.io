//var prevScrollpos = window.pageYOffset;
//
//window.onscroll = function() {
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//        document.getElementById("menuBar").style.top = "0";
//    } else {
//        document.getElementById("menuBar").style.top = "-100px";
//    }
//    prevScrollpos = currentScrollPos;
//}
//
//var myIndex = document.getElementById('myIndex');
//var myInfo = document.getElementById('myInfo');
//
//window.onclick = function(event) {
//    if (event.target == myIndex) {
//        myIndex.style.display = "none";
//    } else if (event.target == myInfo) {
//        myInfo.style.display = "none";
//    }
//}
//
//function openIndex() {
//    document.getElementById("myIndex").style.display = "block";
//}
//
//function closeIndex() {
//    document.getElementById("myIndex").style.display = "none";
//}
//
//function openInfo() {
//    document.getElementById("myInfo").style.display = "block";
//}
//
//function closeInfo() {
//    document.getElementById("myInfo").style.display = "none";
//}
//
//$(document).ready(function() {
//    $(window).on("scroll resize", function() {
//        var pos = $('.title').offset();
//        $('.projectContainer').each(function() {
//            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
//                var projectName = $(this).find('.projectName');
//
//                $('.title').html(projectName.text());
//                $('.title').prop('href', projectName.data('href'));
//                return;
//            }
//        });
//    });
//    $(document).ready(function() {
//        $(window).trigger('scroll');
//    });
//});