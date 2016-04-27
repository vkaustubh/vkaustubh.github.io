$(document).ready( function () {
    var currentLocation = location.href.toLowerCase();
    $('#navigation ul li a').each( function () {
        if (currentLocation.indexOf(this.href.toLowerCase()) > -1) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }

        if (currentLocation.indexOf('publication') > -1 || 
                currentLocation.indexOf('research') > -1 || 
                currentLocation.indexOf('teaching') > -1) {
            $('#research').addClass('selected');
        }
        else { 
            $('#research').removeClass('selected');
        }
    });

    $('#content a').attr('target', '_blank');
    $('#content a[href*="\#"]').removeAttr('target')

    $(window).scroll( function(event) {
        if ( $(this).scrollTop() > 300 ) {
            $('#top').addClass('topVisible');
        } else {
            $('#top').removeClass('topVisible');
        }
    });

    $('#top').click( function (event) {
        event.preventDefault();
        $('body, html').animate( {
            scrollTop: 0, 
        }, 300);
    });

    $('#navigation ul li').hover( 
        function () {
            $('ul', this).fadeIn();
        }, 
        function () {
            $('ul', this).fadeOut();
        }
    );

});
