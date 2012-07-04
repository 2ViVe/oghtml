<?php

	if(isset($_COOKIE['password'])){
		$pass = $_COOKIE['password'];
		$admin = $_COOKIE['username'];
 		setcookie('password', $pass, time() + 31536000);
 		setcookie('username', $admin, time() + 31536000);
 	} else {
 		echo "<script type='text/javascript'>document.location.href = 'http://apple.com';</script>";
 	}

?>