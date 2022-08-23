
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
  if ($(window).scrollTop() > parseInt($('#LastHeader').css('top'))) { //если страница прокручена
    /*$('#JU').css('display', 'none')*/
    $('#JU').fadeOut(250);
  } else {//иначе
    /*$('#JU').css('display', 'block')*/
    $('#JU').fadeIn(250);
  }
});

console.log($('#LastHeader').css('top'))