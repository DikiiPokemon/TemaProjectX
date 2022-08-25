
//Fixed blocks
$(window).scroll(function(){
    if ($(window).scrollTop() > 1) { //если страница прокручена
      $('#Header').css({'background': 'rgba(255, 255, 255, 0.4)',
      "backdrop-filter": "blur(20px)"
    })
    } else {//иначе
        $('#Header').css({
          'background': '#FFFFFF',
          "backdrop-filter": "none"
        })
    }
 });

 $(window).scroll(function(){
  if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
{
  $('#JU').fadeOut(250);  //Пользователь долистал до низа страницы
}else {//иначе
  /*$('#JU').css('display', 'block')*/
  $('#JU').fadeIn(250);
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
var slideCount = $('#SlideWrapper').children().length;

console.log(slideCount);

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('#SlideWrapper').css('transform', 'translate(0, 0)');
      slideNow = 1;
      previousSlide = slideCount;
      IdRed = `#Button` + slideNow; //Element Id of html for coloring red
      IdWhite = `#Button` + previousSlide;//Element Id of html for uncoloring
      $(IdWhite).css('background', '#fff'); //uncoloring previous active navigation button
      $(IdRed).css('background', '#D12A32');//coloring active navigation button
  } else {
      translateWidth = -$('#ViewArea').width() * (slideNow);
      $('#SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      previousSlide = slideNow;
      slideNow++;
      
      
      IdRed = `#Button` + slideNow;  
      IdWhite = `#Button` + previousSlide;
      $(IdWhite).css('background', '#fff');
      $(IdRed).css('background', '#D12A32');
      console.log(translateWidth)
  }

  
}

var slideInterval = 10000;

var translateWidth = 0;

//Clear and Set Interval of listing slider
$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);


  IdRed = `#Button` + slideNow;  
  $(IdRed).css('background', '#D12A32');

  $('#ThirdHeader').hover(function(){
      clearInterval(switchInterval);
  },function() {
      switchInterval = setInterval(nextSlide, slideInterval);
  });
});


//Previous slide
function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('#ViewArea').width() * (slideCount - 1);
      $('#SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = slideCount;
      previousSlide = 1;
      IdRed = `#Button` + slideNow; 
      IdWhite = `#Button` + previousSlide;
      $(IdWhite).css('background', '#fff'); 
      $(IdRed).css('background', '#D12A32');
  } else {
      translateWidth = -$('#ViewArea').width() * (slideNow - 2) ;
      $('#SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      previousSlide = slideNow + 1
      IdRed = `#Button` + slideNow;  
      IdWhite = `#Button` + previousSlide;
      $(IdWhite).css('background', '#fff');
      $(IdRed).css('background', '#D12A32');
  }
}

$('#ButtonPrevious').click(function() {
  prevSlide();
});

$('#ButtonNext').click(function() {
  nextSlide();
});


//Navigation Buttons
var navBtnId = 0;

$('.NavButton').click(function() {
  navBtnId = $(this).index();
  
  if (navBtnId + 1 != slideNow) {
      translateWidth = -$('#ViewArea').width() * (navBtnId);
      $('#SlideWrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      })
    IdWhite = `#Button` + slideNow;
    $(IdWhite).css('background', '#fff'); 
    IdRed = `#Button` + (navBtnId + 1);  
    $(IdRed).css('background', '#D12A32');
    slideNow = navBtnId + 1;
  }
});