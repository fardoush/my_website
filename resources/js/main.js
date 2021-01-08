// ***********************************


//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #E54B4B;}";
    document.body.appendChild(css);
};



//// progress bar ******* skilll

$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 1000,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});
// ***** owl *****

// $(".count").counterUp({
//     delay: 10,
//     time: 3000
// });





$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});



//// animation 


// === animation

$(document).ready(function() {

    // scroll korle animation dekhabe

    $(window).scroll(function() {

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        // if ((positiontop > 0) && (positiontop < 100)) {


        //     $('#main-content').addClass('animate__animated animate__bounceInLeft');

        // }

        if ((positiontop > 100) && (positiontop < 200)) {

            $('#aboutus').addClass('animate__animated animate__slideInUp');

        }

        if ((positiontop > 400) && (positiontop < 700)) {

            $('#col1').addClass(' animate__animated animate__slideInLeft');
            $('#col2').addClass('animate__animated animate__slideInRight');

        }
        if ((positiontop > 750) && (positiontop < 900)) {

            $('#skill1').addClass('animate__animated animate__slideInUp');

        }
        if ((positiontop > 1300) && (positiontop < 1499)) {

            $('#col3').addClass(' animate__animated animate__slideInLeft');
            $('#col4').addClass('animate__animated animate__slideInRight');

        }
        if ((positiontop > 1501) && (positiontop < 1600)) {

            $('#serviceid').addClass(' animate__animated animate__fadeInDown');


        }

        if ((positiontop > 2800) && (positiontop < 2900)) {

            $('#portid').addClass(' animate__animated animate__fadeInDown');


        }

        if ((positiontop > 4000) && (positiontop < 4200)) {

            $('#blogid').addClass(' animate__animated animate__fadeInDown');


        }




        if ((positiontop > 4400) && (positiontop < 4800)) {

            $('#col5').addClass(' animate__animated animate__bounceInLeft');
            $('#col6').addClass('animate__animated animate__zoomInDown');
            $('#col7').addClass('animate__animated animate__flipInX');

        }
        if ((positiontop > 4900) && (positiontop < 5000)) {

            $('#contid').addClass(' animate__animated animate__rotateInDownLeft');


        }

        if ((positiontop > 5400) && (positiontop < 5600)) {

            $('#col8').addClass(' animate__animated animate__slideInLeft');
            $('#col9').addClass('animate__animated animate__slideInRight');

        }

        if ((positiontop > 3956) && (positiontop < 4056)) {

            $('#contactanim').addClass(' animate__animated animate__rotateInDownLeft');


        }
        if ((positiontop > 4256) && (positiontop < 4456)) {

            $('#cont1').addClass(' animate__animated animate__slideInLeft');
            $('#cont2').addClass('animate__animated animate__slideInRight');

        }

    });
});