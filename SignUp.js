var a = 0;
var ReadyInterval = null;

$('document').ready(function(){


    $('#Start').click(function(){
        $('body').append('<audio autoplay>' +
            '<source src="Ready.mp3" type="audio/mpeg">' +
        '</audio>')
       ReadyInterval = setInterval(function(){
           a++;
           if (a === 2){
            $('#Wrapper').hide();
            $('body').append('<video autoplay>' +
                        '<source src="Scan.mp4" type="video/mp4">' +
                    '</video>')
        }
            if ( a === 7 ){
                window.location.href = "YourTeam.html";
            }
       },1000)
    });
})
