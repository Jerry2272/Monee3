<?php
/*! sendemail 1.1 | http://www.indonez.com | (c) 2020 Indonez | MIT License */

$mailto   = "edunet09@gmail.com";     // Change with your email address 
$name     = ucwords($_POST['name']);
$subject  = $_POST['subject'];
$email    = $_POST['email'];
$message  = $_POST['message'];

	if (!preg_match('%^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,3})?(\.[a-zA-Z]{2,3})?$%', $email)) {
		echo  'email_error';
	} else {
	// Now send the enquiry
	$email_message="\n\n" .
		$message .
		"\n\n" .
		"From : " .
		ucwords($name) .
		"\n" .
		"Email : " .
		$email ;
		
		$email_message = trim(stripslashes($email_message));
		mail($mailto, $subject, $email_message, "From: \"$name\" <".$email.">\nReply-To: \"".ucwords($name)."\" <".$email.">\nX-Mailer: PHP/" . phpversion() );
	}
?>