var layout_left_width=190;
window.onresize = function() {
    var widths = document.body.scrollWidth-layout_left_width;
    var heights = document.documentElement.clientHeight-38;
    $("#content, #loading-frame").height(heights+25).width(widths-10);
    var heights = document.documentElement.clientHeight-38;
    $("#layout-left").height(heights+25);
}
window.onresize();
//给左侧的链接绑定上事件。
$("#left-nav a").bind('click', function(){
    $("#content").attr('src', $(this).attr("href"));
    return false;
});