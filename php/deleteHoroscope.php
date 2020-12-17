<?php

// starts/resumes session
session_start();

// checks if request method is set
if(isset($_SERVER["REQUEST_METHOD"])) {

    // checks if request method is delete
    if($_SERVER["REQUEST_METHOD"] === "DELETE") {

        // checks if $_SESSION["horoscope"] is set
        if(isset($_SESSION["horoscope"])) {

            // if true clears $_SESSION["horoscope"] and echos true
            unset($_SESSION["horoscope"]);
            echo json_encode(true);
            exit;

        } else {
               
            // otherwise echos false
            echo json_encode(false);
            exit;

        }

    }

}

?>