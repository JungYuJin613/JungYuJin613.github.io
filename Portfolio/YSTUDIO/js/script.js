'use strict';

$(document).on('click','a[href="#"]' , function(e){
    e.preventDefault();
});

// GNB MENU
$(function(){
     $('header .menuOpen').on('click',function(){
        $('.gnb').addClass('on');
     });
     $(.'gnb .close, section').on('click',function(){
        $('.gnb').removeClass('on');
     });
});