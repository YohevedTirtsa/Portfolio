$(document).ready(function() {
	/*
	$(".row").each(function(){ 
		var elt = $(this).find("header");
		console.log("hello", elt);
		
	});*/
	
    $(window).resize(function() {
		
		if (!window.matchMedia('(max-width: 736px)').matches) {
			//Hauteur de l'élément le plus grand de la ligne
			
			//A propos de moi
			$("#about .row").each(function(){
				var items = $(this).find("header");
				var height_items = [];
				$(items).each(function(){
					var elt = $(this).height();
					height_items.push(elt);
					console.log("ABOUT", elt);
				});
				var height_max = Math.max.apply(Math,height_items);
				console.log("MAX - " + height_max);
				$(items).each(function(){
					$(this).height(height_max);
				});
			});
			
			//Compétences
			$("#skills .row").each(function(){
				var items = $(this).find("header");
				var height_items = [];
				$(items).each(function(){
					var elt = $(this).height();
					height_items.push(elt);
					console.log("COMPETENCES", elt);
				});
				var height_max = Math.max.apply(Math,height_items);
				console.log("MAX - " + height_max);
				$(items).each(function(){
					$(this).height(height_max);
				});
			});
			
			//Expériences professionelles
			$("#experiences .row").each(function(){
				var items = $(this).find("header");
				var height_items = [];
				$(items).each(function(){
					var elt = $(this).height();
					height_items.push(elt);
					console.log("EXPERIENCES", elt);
				});
				var height_max = Math.max.apply(Math,height_items);
				console.log("MAX - " + height_max);
				$(items).each(function(){
					$(this).height(height_max);
				});
			});
			
			//Formation
			$("#certificates .row").each(function(){
				var items = $(this).find("header");
				var height_items = [];
				$(items).each(function(){
					var elt = $(this).height();
					height_items.push(elt);
					console.log("FORMATION", elt);
				});
				var height_max = Math.max.apply(Math,height_items);
				console.log("MAX - " + height_max);
				$(items).each(function(){
					$(this).height(height_max);
				});
			});
			
		} else {
			//Taille par défaut : définie par la longueur du texte
			
			//A propos de moi
			$("#about .row").each(function(){
				var items = $(this).find("header");
				$(items).each(function(){
					$(this).height("");
				});
			});
			
			//Compétences
			$("#skills .row").each(function(){
				var items = $(this).find("header");
				$(items).each(function(){
					$(this).height("");
				});
			});
			
			//Expériences professionelles
			$("#experiences .row").each(function(){
				var items = $(this).find("header");
				$(items).each(function(){
					$(this).height("");
				});
			});
			
			//Formation
			$("#certificates .row").each(function(){
				var items = $(this).find("header");
				$(items).each(function(){
					$(this).height("");
				});
			});
			
		}
		
    }).resize();
});