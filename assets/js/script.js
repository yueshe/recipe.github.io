$(document).ready(function() {



/* Animations for "Blog" link */
$("#link1").mouseover(function() {
	$("#pop-up1").show();
});
$("#link1").mouseout(function() {
	$("#pop-up1").hide();
});

/* Animations for "About" link */
$("#link2").mouseover(function() {
	$("#pop-up2").show();
});
$("#link2").mouseout(function() {
	$("#pop-up2").hide();
});

/* Animations for "Connect" link */
$("#link3").mouseover(function() {
	$("#pop-up3").show();
});
$("#link3").mouseout(function() {
	$("#pop-up3").hide();
});


/* Scroll */
$("a").click(function() {
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});

