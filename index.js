function handleToggleList() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("ul").append("☰");
        } else {
            $(".item").addClass("active");
            $(this).find("ul").append("✖");
        }
    });
};

function handleTogglesList() {
    $(".toggles").on("click", function() {
        if ($(".items").hasClass("active")) {
            $(".items").removeClass("active");
        } else {
            $(".items").addClass("active");
        }
    });
};

function handleWindowSize() {
    if($(window).width() >= 750) {
        $('.desktopMode').removeClass('dissapear')
    } 
        if ($(window).width() <= 750) {
        $('.desktopMode').addClass('dissapear')
    }
    $(window).resize(() => {
        if($(window).width() >= 750) {
        $('.desktopMode').removeClass('dissapear')
    } 
        if ($(window).width() <= 750) {
        $('.desktopMode').addClass('dissapear')
    }
    });
};


function handleFunctions() {
    handleToggleList();
    handleWindowSize();
    handleTogglesList();
}

$(handleFunctions())