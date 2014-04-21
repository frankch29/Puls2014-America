var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerpost = $('.item').first(),//tomamos el primer item y lo agregamos al post
	$lista = $('#contenido');
	ss = sessionStorage,
	ls = localStorage;

if (ls.getItem('autosave')) {
	$titulo.val(ss.getItem('titulo'));
	$url.val(ss.getItem('url'));
};

var id = setInterval(function(){
	ss.setItem('titulo' $titulo.val());
	ss.setItem('url' $url.val())
}, 1000);//resive 2 parametros 1 funcion en que se va a ejecutar y la cantidad 

function mostrarOcultarFormulario(){
	//e.preventDefault();
	$form.slideToggle();//efecto
	//$lista.slideToggle();//Efecto
}

function agregarPost(e){
	e.preventDefault();//Evita que envie formulario 
	//e.stopPropagation();

	var titulo = $titulo.val(), //jalo los valores ingresados y los asigno
		url = $url.val(),
		clone = $primerpost.clone(); //Coneme el primer post del formulario

	clone.find('.titulo_item  a') //busqueme el itulo_item y 
		.text(titulo) //conviertalo al titulo agregado 
		.attr('href', url) //y pongale al hacer click la url ingresada

	clone.hide()

	$lista.prepend(clone); //se agrega el elemento delante de todos o apend para el final de la lista
	mostrarOcultarFormulario();
	$titulo.val("");//reset Val
	$url.val("");// val me trae valores y si se pone "" devuelve null
	//clone.fadeIn(); //efecto de insercion mas suave
	clone.slideDown(); //el efecto de aparicion 
	
}

function grabarInformacion(){
		e.preventDefault();//Evita que envie formulario 
	//e.stopPropagation();

	var titulo = $titulo.val(), //jalo los valores ingresados y los asigno
		url = $url.val(),
		ls = localStorage,//Objeto de js
		ss = sessionStorage;

	ls.setItem('titulo', titulo);//LocalStorage gsuarda los archivos anuq se cierre el navegador
	ls.setItem('url', url);

	ss.setItem('titulo', titulo);//SessionStorage guarda los archivos solo durante la session abierta del navegador
	ss.setItem('url', url);

	mostrarOcultarFormulario();
	$titulo.val("");//reset Val
	$url.val("");
}

// Eventos
$('#publicar_nav a').click( mostrarOcultarFormulario );
$('#formulario').on('submit', /*grabarInformacion*/agregarPost );//cuando el formulario se ejecute el objeto submit hacer agregarPost