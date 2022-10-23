$('.about-edit p:first').slideDown();
$(".bg-pink").click(function(){
    $(this).next().slideToggle(1000);
    $(".about-edit p").not($(this).next()).slideUp(1000);
})
// ========================================================

let countDown = setInterval(()=> {
    let eventDay = new Date("Dec 31, 2022 23:59:59").getTime();
    let currentDay = new Date().getTime();
    let daysDiff = eventDay - currentDay;
    let days = Math.floor(daysDiff/(1000*60*60*24));
    let hours = Math.floor(daysDiff %(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor(daysDiff %(1000*60*60)/(1000*60));
    let seconds = Math.floor(daysDiff %(1000*60)/(1000));
    $('#days').html(days + ' D');
    $('#hours').html(hours + ' h');
    $('#minutes').html(minutes + ' m');
    $('#seconds').html(seconds + ' s')
})
// =================================================================

$('.openMenu').click(function(){
    if($('.menu').width() == 0)
    {
        $('.menu').animate({width:'250px' },500);
        $('.menu a , .menu i').css('display','block');
        $('.openMenu').animate({left:'255px'},500);
        $('#home h1 , #home p:first').animate({marginLeft: '150px'});
    
    }
    else
    {
        $('.menu').animate({width:'0px' },500);
        $('.menu a , .menu i').css('display','none');
        $('.openMenu').animate({left:'5px'},500);
        $('#home h1 , #home p:first').animate({marginLeft: '0px'});
    }
})
$('.menu i').click(function(){
    $('.menu').animate({width:'0px' },500)
    $('.menu a , .menu i').css('display','none')
    $('.openMenu').animate({left:'5px'},500)
})

$('a[href^="#"]').click(function(){
    let hrefLink = $(this).attr('href');
    let sectionOffset = $(hrefLink).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},500)
})
// ==========================================================
let messageText = document.getElementById('messageText');
let counterText = document.getElementById('counterText');
let limit = 100;
counterText.textContent = 0 + '/' + limit;
messageText.addEventListener('input',function(){
    let textLength = messageText.value.length
    counterText.textContent = textLength + '/' + limit;
    if(textLength > limit)
    {
        messageText.style.cssText = 'border-color : red'
        counterText.style.color = 'red'
        $('.btn-danger').css({opacity :'0'})
    }
    else
    {
        messageText.style.cssText = 'border-color : #A3C3EF'
        counterText.style.color = '#9aa1a8'
        $('.btn-danger').css({opacity :'1'})
    }
})
// =================================================================
