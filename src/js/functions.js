$(document).ready(function(){
    $('.primary-navigation .expanded').hoverIntent(function(){
        $(this).find('ul').addClass('show-subitem');
        let pos = $(this).position();
    },
    function(){
        $(this).find('ul').removeClass('show-subitem');
    })
    $('.menu-mobile').on('click', function(){
        $('.navigation').removeClass('show-search');
        $('.search-mobile').removeClass('close');
        $(this).toggleClass('close');
        $('header#header .navigation').toggleClass('show-menu-mobile');
        if(!$('#header .navigation').hasClass('show-search') && !$('#header .navigation').hasClass('show-menu-mobile')){
            
            $('#header .container-header').removeClass('show-menu');
        }else{
            
            $('#header .container-header').addClass('show-menu');
        }
    })

    $('.search-mobile').on('click', function(){
        $('.menu-mobile').removeClass('close');
        $('header#header .navigation').removeClass('show-menu-mobile');
        $(this).toggleClass('close');
        $('.navigation').toggleClass('show-search');
        if(!$('#header .navigation').hasClass('show-search') && !$('#header .navigation').hasClass('show-menu-mobile')){
            $('#header .container-header').removeClass('show-menu');
        }else{
            console.log('2')
            $('#header .container-header').addClass('show-menu');
        }
    })

    $('.primary-navigation > nav > ul > li.expanded').each(function(){
        $('<span class="arrow-down-mobile"></span>').insertAfter($(this).find(' > a'));
    })

    $('.arrow-down-mobile').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().find('ul').toggleClass('show-subitem-mobile');
        $(this).parent().toggleClass('active');
    })
})