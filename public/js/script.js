$(document).ready(function(){
    $('.section-cards').slick({
        lazyLoad:'ondemand',
        slidesToShow:3,
        slideToScroll:1,
        appendArrows: $(this).find('.section-card-buttons'),
        prevArrow: '<button class="prev">&#10094;</button>',
        nextArrow: '<button class="next">&#10095;</button>',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
    $('.slideshow-section-portal').slick({
        slidesToShow:3,
        slideToScroll:1,
        appendArrows: $(this).find('.slideshow-cart-control'),
        prevArrow: '<button class="prev">&#10094;</button>',
        nextArrow: '<button class="next">&#10095;</button>',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
});


