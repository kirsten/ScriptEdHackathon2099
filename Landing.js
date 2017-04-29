var a = 0;
var b = 0;
var ButtonInterval = null;
var ClickInterval = null;



$('document').ready(function(){
    $('#Button').mouseover(function(){
        $('#Button').css('text-shadow', '2px 2px 3px #ff3300');
        ButtonTextMove();
    });

    $('#Button').mouseout(function(){
        $('#Button').css('text-shadow', '0px 0px 0px #000000');
        $('#ButtonText').css('-webkit-transform', 'rotate(0deg)');
        clearInterval(ButtonInterval);
    })
    $('#Button').click(function(){
        $('body').append('<audio autoplay>' +
            '<source src="Robot.mp3" type="audio/mpeg">' +
        '</audio>');
        ClickInterval = setInterval(function(){
            b += 1;
            if (b === 3)
            window.location.href = "SignUp.html";
        }, 1000);

    });

function ButtonTextMove(){
    ButtonInterval = setInterval(function(){
        a += 10;
        if( a === 370){
            a = 10;
        }
        $('#ButtonText').css('-webkit-transform', 'rotate('+ a +'deg)')
    }, 50);
}
var countDownDate = new Date("April 29, 2099 09:30:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#CD').text('Time Left: ' + days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + 'seconds');
}, 1000);
});
