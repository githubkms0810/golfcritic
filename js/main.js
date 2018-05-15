$(document).ready(function(){
    var mainImgBox = $('.mainImgBox');
    var newPersonComment = $('.newPersonComment');
    var newAddCourse = $('.newAddCourse');
    mainImgBox.slick({
        infinite : true,
        arrows : false,
        dots : true,
        autoplay: true,
        autoplaySpeed : 3000
    });

    newPersonComment.slick({
        infinite : true,
        arrows : false,
        dots : true,
        autoplay: true,
        autoplaySpeed : 5000
    });

    newAddCourse.slick({
        infinite : true,
        arrows : false,
        dots : true,
        autoplay: true,
        autoplaySpeed : 6000
    });
    console.log("A")
})