<?php

// starts/resumes session
session_start();

// checks if request method is set
if(isset($_SERVER["REQUEST_METHOD"])) {

    // checks if request method is get
    if($_SERVER["REQUEST_METHOD"] === 'GET') {

        // checks if $_SESSION["horoscope"] is set
        if(isset($_SESSION["horoscope"])) {

            // if true echos $_SESSION["horoscope"]
            echo json_encode(($_SESSION["horoscope"]));
            exit;

        } else {

            // otherwise echos false
            echo json_encode(false);
            exit;

        }

    }
        
}

?>