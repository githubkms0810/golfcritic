$(document).ready(function(){
    serch();
    toggleMenu();
    gallery();
    likeEv();
    areaRank();
    ratingStar();
    commentBox()

    $('.datapicker').datepicker();
    //// 나라선택 팝업
    $('.country').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    /// 갤러리 팝업
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
    
    $('.commentPhoto').magnificPopup({
		delegate: 'li',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });

    /// 필드정보 텍스트팝업
    $('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
    });
    

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 9,
        spaceBetween: 0,
        breakpoints: {
        1024: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 5,
        },
        640: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 2,
        }
        }
    });

    // 유투브 
    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

})

function serch() {
    var serchBox = $(".serchBox >input");
    var realSearch = $(".realSearch");
    
    serchBox.on("focusin" , function(){
        realSearch.css({
            display:"block"
        })
    })
    serchBox.on("focusout" , function(){
        realSearch.css({
            display:"none"
        })
    })
}

function toggleMenu() {
    var dorp = $(".dorp");
    var dropMenu = $(".dropMenu");
    
    dorp.on("click" , function(){
        dropMenu.slideToggle();
    })
}

function gallery() {
    var galleryBox = $(".galleryBox");
    var popupgallery = $(".popup-gallery > a");
    galleryBox.on("click" , function(){
        popupgallery.trigger( "click" );
    })
}

function likeEv() {
    var likeEv = $(".likeEv");

    for( var i=0,len=likeEv.length; i<len; i++){
        likeEv[i].idx = true;
    }

    likeEv.on("click" , function(){
        if( $(this).prop("idx") == true){
            $(this).children("img").attr("src", "./images/likeBtn_on.png");
            $(this).prop("idx",false);
            console.log($(this).prop("idx"))
        } else {
            $(this).children("img").attr("src" , "./images/likeBtn.png")
            $(this).prop("idx",true);
            console.log($(this).prop("idx"))
        }
    })
}

function areaRank() {
    var proRank = $(".proRank");
    var proRankArea = $(".proRankArea");
    var nomalRank = $(".nomalRank");
    var nomalRankArea = $(".normalRankArea");

    proRank.on("click" , function(){
        proRankArea.show();
        nomalRankArea.hide();
    })
    nomalRank.on("click" , function(){
        nomalRankArea.show();
        proRankArea.hide();
    })
}


function ratingStar() {
    var ratingList = $(".ratingBox > ul > li");
    var ratingList2 = $(".ratingBox2 > ul > li");
    var starBoxList = $(".starBox > ul > li");
    var starBoxList2 = $(".starBox2 > ul > li");
    var hoverIdx;
    var imgIdx
    ratingList.hover(function(){
        imgIdx = $(this).children("img").attr("src")
        hoverIdx = $(this).index()
        if( imgIdx == "./images/rating_star.png" || imgIdx == "./images/rating_star_normal.png"){
            return hoverIdx;
        } else {
            $(this).children("img").attr("src" , "./images/rating_hover.png")
        }
        return hoverIdx;
    }, function(){
        imgIdx = $(this).children("img").attr("src")
        if( imgIdx == "./images/rating_star.png" || imgIdx == "./images/rating_star_normal.png"){
            return
        } else {
            $(this).children("img").attr("src" , "./images/rating_normal.png")
        }
    });
    starBoxList.on("click" , function(){
        var imgSrc = $(this).children("img").attr("src")
        ratingList.children("img").attr("src" , "./images/rating_normal.png")
        for( var i=0, len=hoverIdx+1; i<len; i++ ){
            ratingList.eq(i).children("img").attr("src" , imgSrc)
        }
        
        if( $(this).children("img").attr("src") == "./images/rating_star_normal.png") {
            console.log("AA")
            for( var i=0, len=hoverIdx; i<len; i++ ){
                ratingList.eq(i).children("img").attr("src" , "./images/rating_star.png")
            }
            ratingList.eq(hoverIdx).children("img").attr("src" , "./images/rating_star_normal.png")
        }
    });


    ratingList2.hover(function(){
        imgIdx = $(this).children("img").attr("src")
        hoverIdx = $(this).index()
        if( imgIdx == "./images/rating_star.png" || imgIdx == "./images/rating_star_normal.png"){
            return hoverIdx;
        } else {
            $(this).children("img").attr("src" , "./images/rating_hover.png")
        }
        return hoverIdx;
    }, function(){
        imgIdx = $(this).children("img").attr("src")
        if( imgIdx == "./images/rating_star.png" || imgIdx == "./images/rating_star_normal.png"){
            return
        } else {
            $(this).children("img").attr("src" , "./images/rating_normal2.png")
        }
    });

    starBoxList2.on("click" , function(){
        var imgSrc = $(this).children("img").attr("src")
        ratingList2.children("img").attr("src" , "./images/rating_normal2.png")
        for( var i=0, len=hoverIdx+1; i<len; i++ ){
            ratingList2.eq(i).children("img").attr("src" , imgSrc)
        }
        
        if( $(this).children("img").attr("src") == "./images/rating_star_normal.png") {
            for( var i=0, len=hoverIdx; i<len; i++ ){
                ratingList2.eq(i).children("img").attr("src" , "./images/rating_star.png")
            }
            ratingList2.eq(hoverIdx).children("img").attr("src" , "./images/rating_star_normal.png")
        }
    });

}

function commentBox() {
    var boxTitleList = $(".boxTitle > ul > li")
    var proComment = $(".proComment");
    var normalComment = $(".normalComment");
    boxTitleList.on("click" , function(){
        var idx = $(this).index()
        if ( idx == 0 ){
            proComment.show();
            normalComment.hide();
        } else {
            proComment.hide();
            normalComment.show();
        }
    })
}