(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Scan 
    document.addEventListener('DOMContentLoaded', () => {
        const emailLink = document.getElementById('email-link');
        const urlLink = document.getElementById('url-link');
        const content = document.getElementById('content');
    
        emailLink.addEventListener('click', function() {
            content.innerHTML = `
                <form id="email-scan-form" class="text-center">
                    <div class="form-group-scan mt-3">
                        <img src="img/email.png" alt="Email Icon" class="input-icon-scan img-fluid">
                        <textarea class="form-control email-content-scan" rows="10" placeholder="Enter email content here..." required></textarea>
                    </div>
                    <button type="submit" class="btn btn-scan mt-3">Scan</button>
                </form>
            `;
            document.querySelector('.nav-item-scan.active').classList.remove('active');
            emailLink.parentElement.classList.add('active');
        });
    
        urlLink.addEventListener('click', function() {
            content.innerHTML = `
                <form id="url-scan-form" class="text-center">
                    <div class="form-group-scan mt-3">
                        <img src="img/url.png" alt="URL Icon" class="input-icon-scan img-fluid">
                        <input type="url" class="form-control url-input-scan" placeholder="Enter URL here..." required>
                    </div>
                    <button type="submit" class="btn btn-scan mt-3">Scan</button>
                </form>
            `;
            document.querySelector('.nav-item-scan.active').classList.remove('active');
            urlLink.parentElement.classList.add('active');
        });
    });
    
    
})(jQuery);

