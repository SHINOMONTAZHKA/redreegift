$( function() {
    $( "#slider-range-min" ).slider({
		range: "min",
		value: 500,
		min: 500,
		max: 50000,
		step: 100,
		slide: function( event, ui ) {
		$( ".amount" ).val(ui.value + ".-");
		}
    });
    $( ".amount" ).val( $( "#slider-range-min" ).slider( "value" ) + ".-" );
});

$( function () {
	var nextStepButton = $(".nextStepButton"),
		faketaxi = $(".faketaxi"),
		stepCaption = $(".middle-conten__item-nextStep .step-caption"),
		stepItemActive = $(".middle-content__main-item.active"),
		stepItem = $(".middle-content__main-item"),
		stepItemCur = 0,
		i = 0;

		faketaxi.on("click", function (e) {
			e.preventDefault();
			$(".checkbox").trigger("click");
				setTimeout(function () {
					stepItemActive.animate({
						left: "-50%",
						opacity: "0",
					}, 600, function () {
						$(this).remove();
					});

					stepCaption[i].classList.remove("active");
				     i = i + 1;
				     
				     if(i >= stepCaption.length){
				         i = 0;
				     }

				     stepCaption[i].classList.add("active");
				}, 200)
		})
});
