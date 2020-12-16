<?php

try {

    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "DELETE") {

            if(isset($_SESSION["horoscope"])) {

                unset($_SESSION["horoscope"]);
                echo json_encode(true);
                exit;

            } else {
               
                echo json_encode(false);
                exit;

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