//Contado id
var cont = 0;

$(document).ready(function(){

	$('#hacer').html(localStorage.getItem('listItems')); //Local store para las tareas por hacer
	$('#hechas').html(localStorage.getItem('listItemsDos')); //Local store para las tareas hechas


	//Para crear la nueva tarea
	$('body').keyup(function(e) {
		
		//Al apretar enter se crea la tarea
	    if(e.keyCode == 13) {
	    	var tarea = $("#tarea").val(); //Id desde html

	        if(tarea == ""){
				alert("Debes escribir una tarea"); //input vacia da alert
			}else{
				$("#hacer").append('<div class="padre"><input type="checkbox" id="tarea-nueva-'+cont+'" class="la-tarea" /><label for="tarea-nueva-'+cont+'">' + tarea + '</label><a class="waves-effect waves-light right btn sacar">remove</a><br><div>');
				localStorage.setItem('listItems', $('#hacer').html());
	        	$("#tarea").val("");	
	        	cont++;
			}	                
	    }
	    //Funciones poner y sacar tareas para despues que se cree una nueva tarea
	    sacar();
	    poner();

	});

// function borrar tareas
function sacar(){
	$('.sacar').click(function(){ //Llama boton sacar
		$(this).parent().remove(); //
		localStorage.removeItem('listItems');
		localStorage.removeItem('listItemsDos');
	})
}

function poner(){
	$('[type="checkbox"]').click(function(){
		$($(this).parent()).appendTo("#hechas");
		$(this).remove();
		$("#hechas label").attr("class","label-dos");

		//$("#hechas").append($(this).parent());
		localStorage.setItem('listItemsDos', $('#hechas').html());
		localStorage.getItem('listItems', $('#hacer').html());

	})	
}

//Funciones poner y sacar 
sacar();
poner();

});


