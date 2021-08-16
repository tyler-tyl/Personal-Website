// JavaScript Document
$("#sidebarfilters button").each(function() {
    $(this).on("click", function(){
        var filtertag = $(this).attr('class');
		$('.griditem').show();
        if ( $(this).is( ".showall" ) ) { $('.griditem').show(); } 
		else {$('.griditem:not(.' + filtertag + ')').hide();}
    });
});










	
	
	
	
	

