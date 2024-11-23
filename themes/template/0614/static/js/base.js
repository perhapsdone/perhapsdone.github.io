$(function() {
	$(".j-nextshow").click(function(t) {
		t.preventDefault();
		var i = $(this),
			e = i.next();
		if (e.is(":hidden")) {
			e.slideDown()
		} else {
			e.slideUp()
		}
	});
	var t = $(".tab-options li");
	t.click(function() {
		i = $(this).index();
		$(this).addClass("tab-active").siblings().removeClass("tab-active");
		var t = $(this).parents().next().find(".tab-content-item");
		t.eq(i).fadeIn(500).siblings(".tab-content-item").hide()
	});
	$(window).scroll(function() {
		var t = $(document).scrollTop();
		if (t != 0) {
			$(".back-top").css("bottom", "150px")
		}
		if (t == 0) {
			$(".back-top").css("bottom", "-150px")
		}
	});
	$(".backup").click(function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 300)
	});
	$(".nlazy").lazyload({
		effect: "fadeIn"
	});
	$(".scroll-box").DY_scroll();
	$(".scroll-box1").DY_scroll({
		auto: true
	});
	baguetteBox.run(".baguetteBoxOne", {
		animation: "fadeIn"
	});
	$("table").wrap("<div class='table'><div></div></div>");
	$(".contact-phone .ewm-box").click(function(t) {
		t.preventDefault();
		var i = $(this),
			e = i.children(".ewm");
		if (e.is(":hidden")) {
			e.show()
		} else {
			e.hide()
		}
	})
$(".video-play").click(function() {
		var t = $(this).attr("data-src");
		$(".video-backdrop").show().find("iframe").attr("src", t)
	});
	$(".video-backdrop .item-close").click(function() {
		$(this).parent().hide()
	});
	$(".attr-nav li>p").click(function(t) {
		t.preventDefault();
		var e = $(this),
			i = e.next();
		if (i.is(":hidden")) {
			i.slideDown();
			e.parent().addClass("active")
		} else {
			i.slideUp();
			e.parent().removeClass("active")
		}
	});
	$(".faq-list .item-title").click(function(t) {
		t.preventDefault();
		var e = $(this),
			i = e.next();
		if (e.hasClass("active")) {
			i.slideUp();
			e.removeClass("active")
		} else {
			i.slideDown();
			e.addClass("active");
			e.parent().siblings().find(".item-title").removeClass("active");
			e.parent().siblings().find(".item-title").next().slideUp()
		}
	})
});

$(window).load(function() {
	var READ_MORE = $(".more-btn").attr('data-more');
	var READ_LESS = $(".more-btn").attr('data-less');
	var HEIGHT_DES = 96;

	$(".pro1-spec").each(function() {
		if ($(this).height() > HEIGHT_DES) {
			$(this).addClass("on");
			$(this).height(HEIGHT_DES);
			$(this).next().text(READ_MORE);
		}
	})
	$(".more-btn").click(function() {
		var more_span = $(this);
		var desb = more_span.prev();

		if (more_span.text() == READ_MORE) {

			desb.height("auto");

			more_span.text(READ_LESS);
		} else {

			desb.height(HEIGHT_DES);
			more_span.text(READ_MORE);
		}
	})
})

if (window.screen.width < 768) {
	$(".footer .flist1 .footer-title").click(function(e) {
		e.preventDefault();
		var $tk = $('.footer .flist1 .box-list');
		if ($tk.is(":hidden")) {
			$tk.show();
		} else {
			$tk.hide();
		}
	});
	$(".footer .flist2 .footer-title").click(function(e) {
		e.preventDefault();
		var $tk = $('.footer .flist2 .box-list');
		if ($tk.is(":hidden")) {
			$tk.show();
		} else {
			$tk.hide();
		}
	});
	$(".footer .flist3 .footer-title").click(function(e) {
		e.preventDefault();
		var $tk = $('.footer .flist3 .box-list');
		if ($tk.is(":hidden")) {
			$tk.show();
		} else {
			$tk.hide();
		}
	});
}
