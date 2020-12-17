<?php

// enables use of calcHoroscope()
require 'calcHoroscope.php';

// starts/resumes session
session_start();

// checks if request method is set
if(isset($_SERVER["REQUEST_METHOD"])) {

    // checks if request method is post
    if($_SERVER["REQUEST_METHOD"] === "POST") {
    
        // checks if month and day is set in post
        if(isset($_POST["month"]) && ($_POST["day"])) {

            // checks if $_SESSION["horoscope"] is not set
            if(!isset($_SESSION["horoscope"])) {

                // if true sets $_SESSION["horoscope"] to calculated horoscope and echoes true
                $_SESSION["horoscope"] = calcHoroscope($_POST);
                echo json_encode(true);
                exit;

            } else {

                // otherwise echos false
                echo json_encode(false);
                exit;

            }

        }
    }
        
}

?>