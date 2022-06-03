$(document).ready(function(){
    $('.primary-navigation .expanded').hoverIntent(function(){
        $(this).find('ul').addClass('show-subitem');
        let pos = $(this).position();
    },
    function(){
        $(this).find('ul').removeClass('show-subitem');
    })
    $('.menu-mobile').on('click', function(){
        $('header#header .navigation').toggleClass('show-menu-mobile');
    })

    $('.search-mobile').on('click', function(){
        $('.navigation').toggleClass('show-search');
    })

    $('.primary-navigation > nav > ul > li.expanded').each(function(){
        $('<span class="arrow-down-mobile"></span>').insertAfter($(this).find(' > a'));
    })

    $('.arrow-down-mobile').on('click', function(){
        $(this).parent().find('ul').toggleClass('show-subitem-mobile');
    })
})