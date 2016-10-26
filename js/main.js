
function validateForm(){
							//primero esconde o manda los span
	var spans = document.getElementsByTagName("span");//para interactuar se tiene que convertir en var.+
	
	

	while (0 < spans.length) {
		spans[0].parentElement.removeChild(spans[0]); //¿ por qué la i? [i] uno por uno. 
	}

  	var nombre = document.getElementById("name"); //nombre es un elemento
  	var nombreApellido =  /^[A-Z]/;
  	if (nombre.value == null || nombreApellido.test(nombre.value)== false ) {  //nombre.value es string
 		var span = document.createElement("span");
 		span.innerHTML="introduce tu nombre,M, payaso"; 
 		nombre.parentNode.appendChild(span);

 	}
 	var nombreApellido =  /^[A-Z]/;
 	var apellido = document.getElementById("lastname");
 	if (apellido.value == null || nombreApellido.test(apellido.value)== false) {
 		var span = document.createElement("span");
 		span.innerHTML = "Introduce tu apellido, M, payaso.";
 		apellido.parentNode.appendChild(span);
 	}

 	var i_mail=document.getElementById("input-email");
 	var formatoMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 	console.log(formatoMail.test(i_mail.value));
 	if (i_mail.value == null || formatoMail.test(i_mail.value)== false) {
 		var span = document.createElement("span");
 		span.innerHTML = "Introduce tu correo de manera correcta,gracias";
 		i_mail.parentNode.appendChild(span);
  	}  
	var i_password = document.getElementById("input-password");
	if (i_password.value == "password" || i_password.value == "123456" || i_password.value == "098754" || i_password.value.length < 6 ) {
	var span = document.createElement("span");
	span.innerHTML = "Contraseña no valida, intenta de nuevo";
	i_password.parentNode.appendChild(span);
	}

	var bici = document.getElementsByTagName("select")[0];
	if (bici.value == "0"){
		var span = document.createElement("span");
		span.innerHTML = "Selecciona el tipo de bici, gracias";
		bici.parentNode.appendChild(span);
	}

}

