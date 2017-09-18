<?php

function connectDB () { // Fonction de connexion à la base de données
		try{
			$dbhost = ''; //lien bdd
			$dbport = ''; // port bdd
			$dbname = ''; // nom bdd
			$charset = 'utf8';

			$dsn = "mysql:host={$dbhost};port={$dbport};dbname={$dbname};charset={$charset}";

			$username = ''; //Root bdd
			$password = ''; //mdp root bdd

			$bdd = new PDO($dsn, $username, $password);
			return $bdd;
		}
		catch (Exception $e){
			echo $e;
		}
}


if( isset ($_POST['login']) &&isset ($_POST['prenom']) && isset ($_POST['nom']) && isset ($_POST['mail']) && isset ($_POST['mdp'])
	&& isset ($_POST['ecole']) && isset ($_POST['ville']) ){

	$login = $_POST['login'];
	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$password = sha1($_POST['mdp']);
	$ecole = $_POST['ecole'];
	$ville = $_POST['ville'];
	
	$loginExist = 0;
	$querycontenu = connectDB()->query('SELECT * FROM user ');	//Connexion à la base et on verifier si le login existe déja
	while ($donnees2 = $querycontenu->fetch()){
		if( $_POST['login']== $donnees2['login'] ){
			$loginExist ++; // Si login existe $loginExist passe à 1
		}
	}
	$querycontenu->closeCursor();		

	if($loginExist === 0){ // Si login existe pas on crée l'utilisateur
		try{
			$req = connectDB()->prepare('INSERT INTO `user` ( `login`,`password`,`mail`, `nom`, `prenom`, `ecole`,`ville`,`niveau`) VALUES (:login, :password, :mail, :nom, :prenom, :ecole, :ville, :niveau)');
			$req->execute(array(
				'login' => $login,
				'password' => $password,
				'mail' => $mail,
				'nom' => $nom,
				'prenom' => $prenom,
				'ecole' => $ecole,
				'ville' => $ville,
				'niveau' => $niveau  
			));
			echo TRUE;
		}
		catch (Exception $e){
			echo $e;
		}
	}else{
		echo "Login déjà existant dans la base, Veuillez en choisir un autre!";
	}
}



?>