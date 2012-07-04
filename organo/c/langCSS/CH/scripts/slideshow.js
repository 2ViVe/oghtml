//function slideSwitch() {
//    var $active = $('#slideshow img.active');
//
//    if ( $active.length == 0 ) $active = $('#slideshow img:last');
//
//    var $next =  $active.next().length ? $active.next()
//        : $('#slideshow img:first');
//
//    $active.addClass('last-active');
//
//    $next.css({opacity: 0.0})
//        .addClass('active')
//        .animate({opacity: 1.0}, 1000, function() {
//            $active.removeClass('active last-active');
//        });
//}
//
//$(function() {
//    setInterval( "slideSwitch()", 5000 );
//});
$(window).load(function() {
    $('#slider').nivoSlider({
        effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices:1, // For slice animations
        animSpeed:500, // Slide transition speed
        pauseTime:10000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        controlNav:true, // 1,2,3... navigation
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        pauseOnHover:false, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
    $(".nivo-controlNav a").addClass("png_bg");
});