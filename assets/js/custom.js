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

if ($("table").length > 0) {
    $("table").wrap("<div class='table-scrollable'></div>");
}

if ($("nav .contents .menu").length > 0) {
    if ($("#markdown-toc").length == 0) {
        $("nav .contents .menu").append('<ul id="markdown-toc"></ul>');
    }

    if ($(".in-toc").length > 0) {
        $(".in-toc").each(function(index) {
            if ($("#markdown-toc li[data-ref='#"+$(this).attr("id")+"'").length == 0) {
                var text = $(this).clone();
                text.find(".no-toc").remove();
                text = $(text).html().trim();
                var toAppend = '<li data-ref="#'+$(this).attr("id")+'"><a href="#'+$(this).attr("id")+'">'+text+'</a></li>';
                $("#markdown-toc").append(toAppend);
            }
        });
    }
}