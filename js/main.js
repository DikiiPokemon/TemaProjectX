
$(window).scroll(function(){
    if ($(window).scrollTop() > 1) { //если страница прокручена
      $('#Header').css('opacity', '0.4')
    } else {//иначе
        $('#Header').css('opacity', '1')
    }
 });
