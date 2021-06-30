var allowclick=true;
$(`.head__burger`).on(`click`,function () {
	if (allowclick) {
		$(`.head__flexo`).slideDown(500);
		allowclick=false;
	}	else {
		$(`.head__flexo`).slideUp(500);
		allowclick=true;
	}
})
setInterval(()=>{
		if ($(this).width()>650) {
			allowclick=true;
			$(`.head__flexo`).show();
		} else if ($(this).width()<650 && allowclick) $(`.head__flexo`).hide();
},50);
$(`[alt="down"]`).on(`click`,function () {
	$(`html`).animate({scrollTop:$(`.footer`).offset().top-200},1000)
})
	$(`.body1__gridEl`).on(`mouseenter`,function () {
		$($(this).find(`img`)[0]).attr(`src`,`./images/smartphoneWhite.png`)
	})
	$(`.body1__gridEl`).on(`mouseleave`,function () {
		$($(this).find(`img`)[0]).attr(`src`,`./images/smartphoneBlack.png`)
	})
		$(`.body4__box`).on(`mouseenter`,function () {
			var img_=$($(this).find(`img`)[0]);
			img_.attr(`src`,img_.attr(`src`).replace(`.png`,`White.png`))
		})
		$(`.body4__box`).on(`mouseleave`,function () {
			var img_=	$($(this).find(`img`)[0]);
			img_.attr(`src`,img_.attr(`src`).replace(`White`,``))
		})
var timer=true;
$(`[indexDot]`).on(`click`,function () {
	if (!timer || $(this).hasClass("blueDot")) return;
	timer=false;
	setTimeout(()=>timer=true,1000);
	$(`[index="${$(`.blueDot`).attr(`indexDot`)}"]`).fadeOut(500,()=>$(`[index="${$(this).attr(`indexDot`)}"]`).fadeIn(500).css({display:"flex"}));
	$(`[indexDot]`).removeClass("blueDot");
	$(this).addClass("blueDot");
})