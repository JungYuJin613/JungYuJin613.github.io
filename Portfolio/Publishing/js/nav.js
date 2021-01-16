$('.select_language').on('click',function(){
  $(this).toggleClass('show');
});

$('.h_open_search').on('click',function(){
  $('.search-container').addClass('show');
});

$('.sch_close').on('click',function(){
  $('.search-container').removeClass('show');
});

  // Nav
  const gnb = $('.gnb'); //Active
  const gnb_menu_list = $('.nav_d1.d1_Over');//Selector
  const sub_menu = $('.sub_menu'); //On
  const sub_menu_list = $('.sub_menu>ul>li'); //현재 순서값에 Over

  //Nav에 Mouse 올렸을때  
  gnb_menu_list.mouseenter(function(){
    const idx = $(this).index();
    // console.log(idx);
    sub_menu_list.removeClass('Over');
    sub_menu.addClass('On');
    sub_menu_list.eq(idx).addClass('Over');
    gnb.addClass('Active');
  })

  //Nav에서 Mouse 떠났을때(함수이용)
  sub_menu_list.mouseleave(function(){
    setTimeout(pc_menu_reset,1000);
  })

  function pc_menu_reset(){
    sub_menu_list.removeClass('Over');
    sub_menu.removeClass('On');
    gnb.removeClass('Active');
  }