<?php

try {

    //https://stackoverflow.com/questions/6638060/require-multiple-files
    
    session_start();

    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER['REQUEST_METHOD'] === 'POST') {

            echo json_encode("POST REQUEST OK");
            exit;

        } elseif($_SERVER['REQUEST_METHOD'] === 'GET') {

            echo json_encode("GET REQUEST OK");
            exit;

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