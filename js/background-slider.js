var mySwiper = new Swiper('.sw1', {
    speed: 900,
    nextButton: '.right_arrow',
    prevButton: '.left_arrow',
    autoplay:5000
});
var mySwiper = new Swiper('.sw2', {
    speed: 900,
    nextButton: '.arrow-right-1',
    prevButton: '.arrow-left-1'
});
var mySwiper = new Swiper('.sw3', {
    speed: 900,
    nextButton: '.arrow-right-2',
    prevButton: '.arrow-left-2',
    loop:true
});
var mySwiper = new Swiper('.sw4', {
    speed: 900,
    nextButton: '.arrow-right-3',
    prevButton: '.arrow-left-3',
    loop:true
});
var newswiper = new Swiper('.sw0', {
slidesPerView: 4,
 breakpoints: {
   480: {
     slidesPerView: 2
   },
   768: {
     slidesPerView: 3
   },
   999: {
     slidesPerView: 4
   }
 }
})


//initialize adaptive navigation
$('document').ready(function() {
    $('.glyphicon-menu-hamburger').click(function () {
        $('nav').slideToggle(400);
    })
    var win,nav;
    $(window).resize(function () {
      win = $(window).width();
      if(win <= 982){
        $('nav').hide();
      }else{
        $('.about').find('span').show();
        $('nav').show();
      }
    })
})
//click function for more info block
$('.more').click(function (event) {
    event.preventDefault();
    var name = $(this).html();
    if(name == "Подробнее"){
      $('.about').find('span').show(400);
      $(this).html('Скрыть');
    }else{
      $('.about').find('span').hide(400);
      $(this).html('Подробнее');
    }
})
//delete classes function
function del() {
  $('.category-row').find('.swiper-slide').addClass('sl').removeClass('swiper-slide');
  $('.category-row').find('.swiper-wrapper').removeClass();
  $('.category-row').find('.sw0').removeClass();
  newswiper.destroy(true,false);
}
//add classes function
function init() {
  $('.category-row').find('.sl').addClass('swiper-slide').removeClass('sl');;
  $('.category-row > div').addClass('swiper-container').addClass('sw0');
  $('.sw0 > div').addClass('swiper-wrapper');
}

//check if widnow more than 1000px delete classes and slider
var stat = $(window).width();
if(stat>=983){
  del();
}else{

}

// intialize slider if width of window is lower than 1000px and delete if it
// is more than 1000px
$(window).resize(function () {
  win = $(window).width();
  if(win >= 983){
    del();
  }else{
    init();
    var newswiper = new Swiper('.sw0', {
    slidesPerView: 4,
     breakpoints: {
       // when window width is <= 320px
       // when window width is <= 480px
       480: {
         slidesPerView: 2
       },
       // when window width is <= 640px
       768: {
         slidesPerView: 3
       },
       999: {
         slidesPerView: 4
       }
     }
    })
  }
})
