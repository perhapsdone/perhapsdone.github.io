$(function() {
	$(".jqzoom").jqzoom({
		title: false,
		zoomWidth: 394,
		zoomHeight: 410,
		xOffset: 4
	});
	$(".prob-pic-item a").click(function(i) {
		i.preventDefault();
		var t = $(this);
		t.addClass("active").parents("li").siblings().find("a").removeClass("active")
	});
	$(".prob-pic-item .item-video").click(function(i) {
		i.preventDefault();
		var t = $(this),
			o = t.data("src");
		$(".m-prob .provideo-box").show().find("iframe").attr("src", o)
	});
	$(".prob-pic-item .item-pics").click(function(i) {
		i.preventDefault();
		var t = $(this);
		$(".m-prob .provideo-box").hide();
		var o = $(".jqzoom .img"),
			e = t.children("img");
		o.attr("src", e.data("src"))
	});
	$(".prob-pic-small").DY_scroll();
	if (window.screen.width < 768) {
		$(".prob-pic-item .item-video").click(function() {
			var i = $(this).attr("data-src");
			$(".video-backdrop").show().find("iframe").attr("src", i)
		})
	}
});
