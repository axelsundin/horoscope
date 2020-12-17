<?php

require 'calcHoroscope.php';

session_start();

if(isset($_SERVER["REQUEST_METHOD"])) {

    if($_SERVER["REQUEST_METHOD"] === "POST") {
        
        if(isset($_POST["month"]) && ($_POST["day"])) {

            if(!isset($_SESSION["horoscope"])) {

                $_SESSION["horoscope"] = calcHoroscope($_POST);
                echo json_encode(true);
                exit;

            } else {

                echo json_encode(false);
                exit;

            }

        }
    }
        
}

?>