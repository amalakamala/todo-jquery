$(document).ready(function(){

	$('#hacer').html(localStorage.getItem('listItems'));
	$('#hechas').html(localStorage.getItem('listItemsDos'));

	$('body').keyup(function(e) {
		

	    if(e.keyCode == 13) {
	    	var tarea = $("#tarea").val();

	        if(tarea == ""){
				alert("Debes escribir una tarea");
			}else{
				$("#hacer").append('<div class="padre"><input type="checkbox" id="tarea-nueva" class="la-tarea" /><label for="tarea-nueva">' + tarea + '</label><a class="waves-effect waves-light right btn sacar">remove</a><br><div>');
				localStorage.setItem('listItems', $('#hacer').html());
	        	$("#tarea").val("");	
			}	                
	    }

	    // console.log($(".padre").toArray());

	    $('.sacar').click(function(){
			$(this).parent().remove();
			localStorage.setItem('listItems', $('#hacer').html());
			localStorage.setItem('listItemsDos', $('#hechas').html());
		})

	    /*
	    $('.padre').each(function( index ) {
  			console.log( index + ": " + $(this).text());
		});
		*/



		$('[type="checkbox"]').click(function(){

			$($(this).parent()).appendTo("#hechas");
			$(this).remove();
			$("#hechas label").attr("class","label-dos");

			//$("#hechas").append($(this).parent());
			localStorage.setItem('listItemsDos', $('#hechas').html());

		})


	});

});