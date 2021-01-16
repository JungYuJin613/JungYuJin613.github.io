$(function(){
  const sk_slider = $('.skin_slider li');
  const sk_btm_list = $('.skin_btm_wrap li');
  const sk_left_btn = $('.skinSide.left');
  const sk_right_btn = $('.skinSide.right');

  
  first()

  function first(){
    sk_slider.eq(0).addClass('On');
    sk_btm_list.eq(0).addClass('Act');   
  }
 
  
  sk_right_btn.click(right_Event);
  sk_left_btn.click(left_Event);
  sk_btm_list.click(sk_btm_Event);

  function sk_btm_Event(e){
    e.preventDefault();
    
    const idx = $(this).index();
    reset();
    sk_slider.eq(idx).addClass('On');
    sk_btm_list.eq(idx).addClass('Act');  
    
  }

  function right_Event(e){
      e.preventDefault();
      let idx = $('.skin_slider li.On').index();
      reset();
   
     if(idx < 2){
       sk_slider.eq(idx+1).addClass('On');
       sk_btm_list.eq(idx+1).addClass('Act');   
     }
     if(idx == 2){
       idx = 0;
       sk_slider.eq(idx).addClass('On');
       sk_btm_list.eq(idx).addClass('Act'); 
     }
    }
    
    function left_Event(e){
      e.preventDefault();
      let idx = $('.skin_slider li.On').index();
      reset();
   
     if(idx > 0){
       sk_slider.eq(idx-1).addClass('On');
       sk_btm_list.eq(idx-1).addClass('Act');   
     }
     if(idx == 0){
       idx = 2;
       sk_slider.eq(idx).addClass('On');
       sk_btm_list.eq(idx).addClass('Act'); 
     }
    }


  function reset(){
    sk_slider.removeClass('On');
    sk_btm_list.removeClass('Act');
   }

})