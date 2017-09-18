$( document ).ready(function() {


	var niveaux = [ "Petite section", "Moyenne section", "Grande section", "CP", 
					"CE1","CE2","CM1","CM2"]; // Tableau de niveaux
	$("#niveau").append("<option id='"+0+"' selected>Veuillez choisir le niveau</option>"); // On ajoute l'option delectionnée par defaut

	for (i = 0; i < niveaux.length; ++i) {
    	$("#niveau").append("<option id="+(i+1)+">"+niveaux[i]+"</option>"); // On genere la select
	}

	

	$('#inscription').click(function() {

			$("#listerror").empty(); // on vide la liste 
			var login = $("#login").val();
		 	var niveau = $("#niveau").find('option:selected').attr('id');
		 	var niveautxt = $("#niveau").children(":selected").text();
			var ecole = $("#ecole").val();
			var ville = $("#ville").val();
			var nom = $("#nom").val();
			var prenom = $("#prenom").val();
			var mail = $("#mail").val();
			var mdp = $("#password").val();
			var errorDiv = $("#listerror").val();
			var cpt=0; //compteeur des erreurs 

			if(nom == "" || nom == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre nom</li> ");
				$("#nom").css({'border-color' : 'red'});
				cpt++;
			}
			 if(prenom == "" || prenom == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre prenom</li> ");
				$("#prenom").css({'border-color' : 'red'});
				cpt++;
			}
			 if(login == "" || login == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre prenom</li>");
				$("#login").css({'border-color' : 'red'});
				cpt++;
			}
			 if(mail == "" || mail == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre adresse mail</li>");
				$("#mail").css({'border-color' : 'red'});
				cpt++;
			}
			 if(mdp == "" || mdp == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre mot de passe</li>");
				$("#password").css({'border-color' : 'red'});
				cpt++;
			}
			 if(ecole == "" || ecole == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner votre établissement</li>") ;
				$("#ecole").css({'border-color' : 'red'});
				cpt++;
			}
			 if(niveau == 0 || niveau == undefined ){
				$("#listerror").append(errorDiv + "<li>Veuillez renseigner le niveau de la classe</li>") ;
				$("#ecole").css({'border-color' : 'red'});
				cpt++;
			}
			 if(ville == "" || ville == undefined ){
				$("#listerror").append( errorDiv + "<li>Veuillez renseigner votre prénom</li>");
				$("#ville").css({'border-color' : 'red'});
				cpt++;
			}
			if(cpt <0){ // S'il n'y a pas eu d'erreurs
				$("error").hide();
				$("#insc").find('input').css({'border-color' : '#ccc'}); // onremet les bordures en gris
				
				$.ajax({
					url : "data/data.php", // on donne l'URL du fichier de traitement
					type : "POST", 
					data : "login"+ login +"&nom=" + nom  + "&prenom=" + prenom +"&mail=" + mail 
							+"&mdp=" + mdp +"&ecole=" + ecole +"&ville="+ ville+"&niveau="+niveautxt,
					success: function(rep) {
						if (rep){ //Si rep est un bool à true 
							$("#container").empty();
							$("#container").append("<h2>Inscription reussie !</h2>");
							$("#container").append("<a href='#' id='lienaccueil'>Retour à l'accueil</a>");

						}
						else{
							$("#container").empty();
							$("#container").append("<h2>Erreur lors de l'inscription !</h2>");
						}
					}
				});

			}
			else {
				$('#error').css({"background-color":"#f2dede"}); //Le parent de la liste des erreurs a le même background
				$("#listerror").show(); // on affiche la liste des erreurs
			}
				
			

	});

	$("mdp2").focusout(function(){

		var mdp = $("#password");
		var mdp2 = $("#password2");

		if( mdp != mdp2){

			Alert("Veuillez saisir deux mots de passe identiques");
		}
	});
	$("mail2").focusout(function(){

		var mail = $("#mail");
		var mail2 = $("#mail2");

		if( mail != mail2){

			Alert("Veuillez saisir deux adresses électroniques identiques");
		}
	});

	$("#nom").keypress(function(key){ //On ne saisi que des lettres dans cet input

		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
	});
	$("#prenom").keypress(function(key){ //On ne saisi que des lettres dans cet input

			if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
	});
	$("#ville").keypress(function(key){ //On ne saisi que des lettres dans cet input

		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
	});
			


});