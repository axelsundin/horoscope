<?php

try {

    //https://stackoverflow.com/questions/6638060/require-multiple-files
    require './php/addHoroscope.php';

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Checks if date in body is set
            if(isset($_POST["month"]) && ($_POST["day"])) {

                // Saves $_POST["month"] to the $_SESSION
                $_SESSION["month"] = serialize($_POST["month"]);
                $_SESSION["day"] = serialize($_POST["day"]);

                // Sending success (true) back to the client
                echo json_encode(true);
                exit;

            } else {

                // Throws exception if no name was included in the body of the request
                throw new Exception("No date was found in the request body...", 500);
            }

        } elseif($_SERVER['REQUEST_METHOD'] === 'GET') {

            if(isset($_SESSION["month"]) && ($_SESSION["day"])) {
                
                // Sending the date back to the client
                /* echo json_encode(
                    "Returned month: " . unserialize($_SESSION["month"]). " and day: " . unserialize($_SESSION["day"])
                ); */

                $_SESSION["horoscope"] = addHoroscope($_SESSION);
                echo json_encode($_SESSION["horoscope"]);

                exit;

            } else {
                // Sending feedback that no month is saved back to the client
                echo json_encode("No name is saved...");
                exit;

            }                

        } elseif($_SERVER['REQUEST_METHOD'] === 'DELETE') {

            echo json_encode("DELETE REQUEST OK");
            exit;     

        } else {

            echo json_encode("BAD REQUEST");
            exit;

        }
        
    }
    
} catch(Exception $error) {

    echo json_encode(
        "FETING ERROR" . 
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        ) 
    );

}

?>