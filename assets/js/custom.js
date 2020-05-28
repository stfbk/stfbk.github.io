$('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href) && this.href != "" && this.href != "#") {
        $(this).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank');
        });
    }
});

function iframe16vs9() {
    var iframes = $("iframe");

    for (var i=0; i<iframes.length; i++) {
        var element = $(iframes[i]);
        var width = $(element).width();
        $(element).height(width*9/16);
    }
}

if ($("iframe").length > 0) {
   iframe16vs9();

   $(window).resize(function() {
       iframe16vs9();
   });
}