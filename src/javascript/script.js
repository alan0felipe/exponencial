import siteInfo from '../config/site-info.js';

$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        const target = $(this.hash);
        const headerHeight = $('header').outerHeight(); // Altura do header
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 800);
        }
    });

    // Show contact modal
    $('#contact_btn').on('click', function () {
        $('#contact_modal').fadeIn();
    });

    // Hide contact modal
    $('#close_modal').on('click', function () {
        $('#contact_modal').fadeOut();
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    // Atualiza telefone
    $('.tel-number').text(siteInfo.contact.phone.display);
    $('.tel-button').attr('href', `tel:${siteInfo.contact.phone.formatted}`);

    // Atualiza links de redes sociais
    $('.social-media-buttons a[href*="instagram"]').attr('href', siteInfo.socialMedia.instagram.url);
    $('.social-media-buttons a[href*="facebook"]').attr('href', siteInfo.socialMedia.facebook.url);
    $('.social-media-buttons a[href*="wa.me"]').attr('href', siteInfo.contact.whatsapp.url);

    // Atualiza texto Sobre Nós
    $('.section-description').text(siteInfo.texts.about);
});