var scrollingBool;
var slideCount; //for Slider
var mobileBool;


function MobileYesOrNo(){
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $('.header').css({
    'background': '#FFFFFF',
    "backdrop-filter": "none",
    'position': 'absolute' 
  });
 // slideCount = $('#Mobile').children().length;
 if(document.documentElement.clientWidth > 1000){
  slideCount = $('#Desktop').children().length;
  mobileBool = `#`;
}else{
  slideCount = $('#Mobile').children().length;
  mobileBool =`#M`;
}

  
  scrollingBool = false;
  console.log(mobileBool)// код для мобильных устройств
} else {
  $('.header').css('position', 'fixed');
    slideCount = $('#Desktop').children().length;
    scrollingBool = true;
    mobileBool = `#`;// код для обычных устройств
}

}

window.addEventListener("orientationchange", function() {
  location.reload();
}, false);

/*function WindowSize(){
  if (document.documentElement.clientWidth > 767) {
    //Fixed blocks
    $('.header').css('position', 'fixed');
    scrollingBool = true;
    console.log(scrollingBool)
  }else{
    $('.header').css({
      'background': '#FFFFFF',
      "backdrop-filter": "none",
      'position': 'absolute' 
    });
    scrollingBool = false;
    console.log(scrollingBool)
  }
}*/




 $(window).scroll(function(){
  if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
{
  //$('.JoinUs').css('display', 'none');
  $('.JoinUs').fadeOut(250);  //Пользователь долистал до низа страницы
}else {//иначе
  //$('.JoinUs').css('display', 'block');
  $('.JoinUs').fadeIn(250);
}
});

//Button to top appearance
$(window).scroll(function(){
  if ($(window).scrollTop() > 200) { //если страница прокручена
    $('#ButtonConteiner').css('opacity', '1')
  } else {//иначе
      $('#ButtonConteiner').css('opacity', '0')
  }
});

//Button to Top Function Up

$('#BackTop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


console.log($('#LastHeader').css('top'))

//Slider
var IdRed; //id of the tag navigation button, that active
var IdWhite;//id of the tag navigation button, that was active
var slideNow = 1;
var previousSlide;//number of the previous slide


console.log(slideCount);

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.SlideWrapper').css('transform', 'translate(0, 0)');
      slideNow = 1;
      previousSlide = slideCount;
      IdRed = mobileBool + `Button` + slideNow; //Element Id of html for coloring red
      IdWhite = mobileBool + `Button` + previousSlide;//Element Id of html for uncoloring
      $(IdWhite).css('background', '#fff'); //uncoloring previous active navigation button
      $(IdRed).css('background', '#D12A32');//coloring active navigation button
  } else {
      translateWidth = -$('.ViewArea').width() * (slideNow);
      $('.SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      previousSlide = slideNow;
      slideNow++;
      
      
      IdRed = mobileBool + `Button` + slideNow;  
      IdWhite = mobileBool + `Button` + previousSlide;
      $(IdWhite).css('background', '#fff');
      $(IdRed).css('background', '#D12A32');
      console.log(translateWidth)
  }

  
}

var slideInterval = 10000;
var BurgerBool = 0;
var translateWidth = 0;

//Clear and Set Interval of listing slider, burger menu
$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);
  MobileYesOrNo();

  (function () {
    const ua = navigator.userAgent
    const isIOSSafari = /iPhone|iPad|iPod/.test(ua) && /AppleWebKit.*Safari\//i.test(ua) && !ua.includes('Chrome')
    if (isIOSSafari) document.documentElement.classList.add('ios-safari')
  })();

  $('.menu-burger__header').click(function(){
    $('#Mob').toggleClass('open-menu');
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('.header').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
    $('.header__navRu').toggleClass('open-menu');
   
  });

  $('#Desk').click(function(){
    $('.HiddenLangs').toggleClass('show');
    $('.SelectLang').toggleClass('show');
    $('.ButtonLang').toggleClass('show');
  });

  $('#Mob').click(function(){
    $('.HiddenLangs').toggleClass('show');
    $('.SelectLang').toggleClass('show');
    $('.ButtonLang').toggleClass('show');
  });


  if(scrollingBool ){
    $(window).scroll(function(){
    if ($(window).scrollTop() > 1) { //если страница прокручена
    $('.header').css({'background': 'rgba(255, 255, 255, 0.4)',
    "backdrop-filter": "blur(20px)"
  })
  }else {//иначе
    $('.header').css({
      'background': '#FFFFFF',
      "backdrop-filter": "none"
    })
  }
  });
  }else{
    $('.header').css({
      'background': 'none',
      "backdrop-filter": "none"
    })
  }

  IdRed = mobileBool + `Button` + slideNow;  
  console.log(IdRed)
  $(IdRed).css('background', '#D12A32');

  $('.thirdHeader').hover(function(){
      clearInterval(switchInterval);
  },function() {
      switchInterval = setInterval(nextSlide, slideInterval);
  });
});


//Previous slide
function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('.ViewArea').width() * (slideCount - 1);
      $('.SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = slideCount;
      previousSlide = 1;
      IdRed = mobileBool + `Button` + slideNow; 
      IdWhite = mobileBool + `Button` + previousSlide;
      $(IdWhite).css('background', '#fff'); 
      $(IdRed).css('background', '#D12A32');
  } else {
      translateWidth = -$('.ViewArea').width() * (slideNow - 2);
      $('.SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      previousSlide = slideNow + 1
      IdRed = mobileBool + `Button` + slideNow;  
      IdWhite = mobileBool + `Button` + previousSlide;
      $(IdWhite).css('background', '#fff');
      $(IdRed).css('background', '#D12A32');
  }
}


$('.ButtonHello').click(function(){
var x;
if(scrollingBool){
  x = $('.firstHeader').offset().top - $('.header').height() + parseInt($('.firstHeader').css('padding-top'));
}else{
  x = $('.firstHeader').offset().top + parseInt($('.firstHeader').css('padding-top'));
}
$('html, body').animate({scrollTop:x}, '300');
});

$('.ButtonBenefit').click(function(){
  var x;
  if(scrollingBool){
    x = $('.secondHeader').offset().top - $('.header').height();
  }else{
    x = $('.secondHeader').offset().top + parseInt($('.secondHeader').css('padding-top'));
  }
  
  $('html, body').animate({scrollTop:x}, '300');
});

$('.ButtonCustomers').click(function(){
    var x;
    if(scrollingBool){
      x = $('.thirdHeader').offset().top - $('.header').height();
    }else{
      x = $('.thirdHeader').offset().top;
    }
    
    $('html, body').animate({ scrollTop: x }, '300');
});

$('.ButtonJoinUs').click(function(){
  var x;
  if(scrollingBool){
    x = $('.lastHeader').offset().top - $('.header').height();
  }else{
    x = $('.lastHeader').offset().top;
  }
  
  $('html, body').animate({ scrollTop: x }, '300');
});    

$('#ButtonPrevious').click(function() {
  prevSlide();
  console.log("click")
});

$('#ButtonNext').click(function() {
  nextSlide();
  console.log("click")
});

$('#MButtonPrevious').click(function() {
  prevSlide();
  console.log("click")
});

$('#MButtonNext').click(function() {
  nextSlide();
  console.log("click")
});


//Navigation Buttons
var navBtnId = 0;

$('.NavButton').click(function() {
  navBtnId = $(this).index();
  
  if (navBtnId + 1 != slideNow) {
      translateWidth = -$('.ViewArea').width() * (navBtnId);
      $('.SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      })
    IdWhite = mobileBool + `Button` + slideNow;
    $(IdWhite).css('background', '#fff'); 
    IdRed = mobileBool + `Button` + (navBtnId + 1);  
    $(IdRed).css('background', '#D12A32');
    slideNow = navBtnId + 1;
  }
});



//Burger Menu
/*$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('.header').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});*/