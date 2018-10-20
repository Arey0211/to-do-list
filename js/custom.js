// line through if clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

//delete item when X is clicked
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add new to do when enter info
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
	}
});

//dropdown when plus clicked
$("#plus").click(function(){
	$("#input").fadeToggle(1000);
});


