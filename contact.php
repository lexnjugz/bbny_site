<?php

$name = $_POST['name'];
$from = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$atpos = stripos($from, "@");
$strlen = strlen($from);

$to = "info@beautifulbrightandyellow.com";


if ($name != "" && strlen($from)>=2 && $from != "" && $atpos>=1 && strlen($from)>=5 && $subject != "" && strlen($subject)>=2 && $message != "" && strlen($message)>=5 ){
	mail($to,$subject,$message,"From: $from");
	echo "The email has been sent.";
}

else {
	echo "Please fill the field to send message";
}
?>