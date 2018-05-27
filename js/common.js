$(document).ready(function(){
    serch();
    toggleMenu();
    gallery();
    likeEv();
    areaRank();
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
    var likeEvidx = $(".likeEv").prop("idx" , true);
    console.log("AA")
    likeEv.on("click" , function(){
        if( likeEv.prop("idx") == true){
            $(this).children("img").attr("src", "./images/likeBtn_on.png");
            $(this).prop("idx",false);
        } else {
            $(this).children("img").attr("src" , "./images/likeBtn.png")
            $(this).prop("idx",true);
        }
        console.log("AA")
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