<?php

$recepient = "vlad.kolisnichenko1989@gmail.com";
$sitename = "My_portfolio";

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	foreach ( $_POST as $key => $value ) {
			if ( $value != "" ) {
				$message .= "" . $key . ":" . " " . $value . "\n";
			}
		}
}


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");