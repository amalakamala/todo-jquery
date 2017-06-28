$(document).ready(function(){


	$('body').keyup(function(e) {

	    if(e.keyCode == 13) {
	        var tarea = $("#tarea").val();
	        if(tarea == ""){
				alert("Debes escribir una tarea");
			}else{
				$("#hacer").append('<div class="padre"><input type="checkbox" class="tarea-nueva" /><label id="label-id" for="tarea-nueva">' + tarea + '</label><a class="waves-effect waves-light btn sacar">remove</a><br><div>');
	        	$("#tarea").val("");	
			}	                
	    }


	    $('.sacar').click(function(){
			$(this).parent().remove();
		})

		$('.tarea-nueva').click(function(){
			$(this).parent().add();
		})

	});

});