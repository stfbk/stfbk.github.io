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

function setDefaultUserPicture(picture) {
    picture.src = "/assets/images/no-user.jpg";
    return true;
}

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

if ($("#toc").length > 0) {
    $("#toc").html(' \
        <nav> \
            <div class="contents"> \
                <div class="menu" markdown="1"> \
                    <p class="menu-label">Contents</p> \
                </div> \
            </div> \
        </nav> \
    ');

    $("#toc nav .contents .menu").append('<ul id="markdown-toc"></ul>');

    if ($(":header:not(.no-toc)").length > 0) {
        var prevH1List = null;
        var prevH1Item = null;
        var prevH2List = null;
        var prevH2Item = null;

        $(":header:not(.no-toc)").each(function(index) {
            if ($(this).attr("id") == undefined) {
                var id = $(this).text().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();
                $(this).attr("id", id);
            }
            
            if ($("#markdown-toc li[data-ref='#"+$(this).attr("id")+"'").length == 0) {
                var text = $(this).clone();
                text.find(".no-toc").remove();
                text = $(text).html().trim();
                var toAppend = $('<li data-ref="#'+$(this).attr("id")+'"><a href="#'+$(this).attr("id")+'">'+text+'</a></li>');

                if ($(this).is("h1")) {
                    prevH1List = $("#markdown-toc");
                    $(prevH1List).append(toAppend);
                    prevH1Item = toAppend;
                    prevH2List = null;
                } else if ($(this).is("h2")) {
                    if (prevH2List == null) {
                        prevH2List = $("<ul></ul>");
                        $(prevH1Item).append(prevH2List);
                    }
                    $(prevH2List).append(toAppend);
                    prevH2Item = toAppend;
                } else {
                    var prevH3List = $("<ul></ul>");
                    $(prevH2Item).append(prevH3List);
                    $(prevH3List).append(toAppend);
                }
            }
        });
    }

    if ($("#markdown-toc li").length == 0) {
        $("#toc nav").remove();
    }
}

if ($("#set-subtitle").length == 1) {
    var subtitle = $("#set-subtitle").text();
    $(".hero-body .subtitle:first").text(subtitle);
}