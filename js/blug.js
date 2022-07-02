//global document,$,window
$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 2000  
    });
    $('.testimonials carousel').carousel();
    var overlayHover = $('.img-col');
    overlayHover.mouseenter(function () {
        $(this).find('.overlay').fadeIn(500);
        $(this).find('.title-img').animate({
            opacity: 1,
            bottom: '40px'
        }, 500);
        $(this).find('.icon-img').animate({
            opacity: 1,
            top: '20px'
        }, 500);
    });
    overlayHover.mouseleave(function () {
        $(this).find('.overlay').fadeOut(400);
        $(this).find('.title-img').animate({
            opacity: 0,
            bottom: '-13px'
        }, 500);
        $(this).find('.icon-img').animate({
            opacity: 0,
            top: '-20px'
        }, 500);   
    });    
    });
