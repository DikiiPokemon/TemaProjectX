var scrollingBool;
var slideCount; //for Slider
var mobileBool;
var slideInterval = 10000;
var switchInterval

function MobileYesOrNo(){
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $('.header').css({
    'background': '#FFFFFF',
    "backdrop-filter": "none",
    'position': 'absolute' 
  });
 if(document.documentElement.clientWidth > 1000){
  slideCount = $('#Desktop').children().length;
  mobileBool = `#`;
}else{
  slideCount = $('#Mobile').children().length;
  mobileBool =`#M`;
}

  
  scrollingBool = false;// код для мобильных устройств
} else {
  switchInterval = setInterval(nextSlide, slideInterval);
  $('.header').css('position', 'fixed');
    slideCount = $('#Desktop').children().length;
    scrollingBool = true;
    mobileBool = `#`;// код для обычных устройств
}
}

window.addEventListener("orientationchange", function() {
  location.reload();
}, false);


 $(window).scroll(function(){
  if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
{
  $('.JoinUs').fadeOut(250);  //Пользователь долистал до низа страницы
}else {//иначе
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



//Slider
var IdRed; //id of the tag navigation button, that active
var IdWhite;//id of the tag navigation button, that was active
var slideNow = 1;
var previousSlide;//number of the previous slide



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
  }

  
}


var BurgerBool = 0;
var translateWidth = 0;

//Clear and Set Interval of listing slider, burger menu
$(document).ready(function () {
  
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
});

$('#ButtonNext').click(function() {
  nextSlide();
});

$('#MButtonPrevious').click(function() {
  prevSlide();
});

$('#MButtonNext').click(function() {
  nextSlide();
});

$( ".SlideWrapper" ).on( "swipeleft", swipeleftHandler );
$( ".SlideWrapper" ).on( "swiperight", swiperightHandler );

function swipeleftHandler(){
  nextSlide();
}

function swiperightHandler(){
  prevSlide();
}
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

var triggerElementID = null; // this variable is used to identity the triggering element
var fingerCount = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY = 0;
var horzDiff = 0;
var vertDiff = 0;
var minLength = 72; // the shortest distance the user may swipe
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;

// The 4 Touch Event Handlers

// NOTE: the touchStart handler should also receive the ID of the triggering element
// make sure its ID is passed in the event call placed in the element declaration, like:
// <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">

function touchStart(event,passedName) {
    // disable the standard ability to select the touched object
    event.preventDefault();
    // get the total number of fingers touching the screen
    fingerCount = event.touches.length;
    // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
    // check that only one finger was used
    if ( fingerCount == 1 ) {
        // get the coordinates of the touch
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
        // store the triggering element ID
        triggerElementID = passedName;
    } else {
        // more than one finger touched so cancel
        touchCancel(event);
    }
}

function touchMove(event) {
    event.preventDefault();
    if ( event.touches.length == 1 ) {
        curX = event.touches[0].pageX;
        curY = event.touches[0].pageY;
    } else {
        touchCancel(event);
    }
}

function touchEnd(event) {
    event.preventDefault();
    // check to see if more than one finger was used and that there is an ending coordinate
    if ( fingerCount == 1 && curX != 0 ) {
        // use the Distance Formula to determine the length of the swipe
        swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
        // if the user swiped more than the minimum length, perform the appropriate action
        if ( swipeLength >= minLength ) {
            caluculateAngle();
            determineSwipeDirection();
            processingRoutine();
            touchCancel(event); // reset the variables
        } else {
            touchCancel(event);
        }   
    } else {
        touchCancel(event);
    }
}

function touchCancel(event) {
    // reset the variables back to default values
    fingerCount = 0;
    startX = 0;
    startY = 0;
    curX = 0;
    curY = 0;
    deltaX = 0;
    deltaY = 0;
    horzDiff = 0;
    vertDiff = 0;
    swipeLength = 0;
    swipeAngle = null;
    swipeDirection = null;
}

function caluculateAngle() {
    var X = startX-curX;
    var Y = curY-startY;
    var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); //the distance - rounded - in pixels
    var r = Math.atan2(Y,X); //angle in radians (Cartesian system)
    swipeAngle = Math.round(r*180/Math.PI); //angle in degrees
    if ( swipeAngle < 0 ) { swipeAngle =  360 - Math.abs(swipeAngle); }
}

function determineSwipeDirection() {

    if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
        swipeDirection = 'left';
    } else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
        swipeDirection = 'left';
    } else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
        swipeDirection = 'right';
    } else if ( (swipeAngle > 45) && (swipeAngle < 135) ) {
        swipeDirection = 'down';
    } else {
        swipeDirection = 'up';
    }
}

function processingRoutine() {
    var swipedElement = document.getElementById('#Mobile');
    if ( swipeDirection == 'left' ) {
        nextSlide();         
    } else if ( swipeDirection == 'right' ) {
        prevSlide();
    } else if ( swipeDirection == 'up' ) {
        prevSlide();         
    } else if ( swipeDirection == 'down' ) {
        nextSlide();         
    }
}