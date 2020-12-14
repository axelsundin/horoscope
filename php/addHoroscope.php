<?php

function addHoroscope($date) {
    
    if(unserialize($date["month"]) == 1 AND unserialize($date["day"]) > 19
     OR unserialize($date["month"]) == 2 AND unserialize($date["day"]) < 19) {

        return "Vattumannen";

    } elseif(unserialize($date["month"]) == 2 AND unserialize($date["day"]) > 18
    OR unserialize($date["month"]) == 3 AND unserialize($date["day"]) < 20) {

       return "Fiskarna";

    } elseif(unserialize($date["month"]) == 3 AND unserialize($date["day"]) > 20
    OR unserialize($date["month"]) == 4 AND unserialize($date["day"]) < 20) {

       return "Väduren";

    } elseif(unserialize($date["month"]) == 4 AND unserialize($date["day"]) > 19
    OR unserialize($date["month"]) == 5 AND unserialize($date["day"]) < 21) {

       return "Oxen";

    } elseif(unserialize($date["month"]) == 5 AND unserialize($date["day"]) > 20
    OR unserialize($date["month"]) == 6 AND unserialize($date["day"]) < 22) {

       return "Tvillingarna";

    } elseif(unserialize($date["month"]) == 6 AND unserialize($date["day"]) > 21
    OR unserialize($date["month"]) == 7 AND unserialize($date["day"]) < 23) {

       return "Kräftan";

    } elseif(unserialize($date["month"]) == 7 AND unserialize($date["day"]) > 22
    OR unserialize($date["month"]) == 8 AND unserialize($date["day"]) < 23) {

       return "Lejonet";

    } elseif(unserialize($date["month"]) == 8 AND unserialize($date["day"]) > 22
    OR unserialize($date["month"]) == 9 AND unserialize($date["day"]) < 23) {

       return "Jungfrun";

    } elseif(unserialize($date["month"]) == 9 AND unserialize($date["day"]) > 22
    OR unserialize($date["month"]) == 10 AND unserialize($date["day"]) < 23) {

       return "Vågen";
 
    } elseif(unserialize($date["month"]) == 10 AND unserialize($date["day"]) > 22
    OR unserialize($date["month"]) == 11 AND unserialize($date["day"]) < 22) {

       return "Skorpionen";

    } elseif(unserialize($date["month"]) == 11 AND unserialize($date["day"]) > 21
    OR unserialize($date["month"]) == 12 AND unserialize($date["day"]) < 20) {

       return "Skytten";

    } elseif(unserialize($date["month"]) == 12 AND unserialize($date["day"]) > 21
    OR unserialize($date["month"]) == 1 AND unserialize($date["day"]) < 20) {

       return "Stenbocken";

    }
    
}

?>