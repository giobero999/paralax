$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform':'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform':'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform':'translate(0px, -'+ wScroll /20 +'%)'
  });


  /* window scroll efect pics */
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 15)){
    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics  figure').eq(i).addClass('is-showing');
      }, 150 * (i + 1));
    });
  }

  if(wScroll > $('.large-window').offset().top - 500){
    $('.large-window').css({
      'backgroundPosition':'center '+ wScroll - $('.large-window').offset().top  +'px',

    });
  }

  

}); //end scroll
