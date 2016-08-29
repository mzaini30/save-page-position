function savepageposition(kucinglucu) {
    var posisi = localStorage.getItem(kucinglucu);
    $("html, body").animate({ scrollTop: posisi }, 500);
    $(window).scroll(function() {
        var posisi = $(window).scrollTop();
        localStorage.setItem(kucinglucu, posisi);
    });
}
