
 $(document).ready(function(){
             
  $(window).scroll(function(){

    if($(window).scrollTop()>100){
      $('#menu').addClass('bg-info');
    }else{
      $('#menu').removeClass('bg-info');
    }

  });

});