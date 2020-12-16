<?php

try {

    require 'calcHoroscope.php';

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "POST") {

            // Checks if date in body is set
            if(isset($_POST["month"]) && ($_POST["day"]) && (is_numeric($_POST["month"]))) {

                if(isset($_SESSION["horoscope"])) {

                    $_SESSION["horoscope"] = calcHoroscope($_POST);
                    echo json_encode(true);
                    exit;

                } else {

                    echo json_encode(false);
                    exit;

                }

            } else {

                // Throws exception if no date was included in the body of the request
                throw new Exception("No date was found in the request body...", 500);
            }   

        } else {

            echo json_encode("BAD REQUEST");
            exit;

        }
        
    }
    
} catch(Exception $error) {

    echo json_encode( 
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        ) 
    );

}

?>