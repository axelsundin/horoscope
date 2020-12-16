<?php

function calcHoroscope($date) {
    
   if($date["month"] == 1 AND $date["day"] > 19
   OR $date["month"] == 2 AND $date["day"] < 19) {

     return "Vattumannen";

   } elseif($date["month"] == 2 AND $date["day"] > 18
   OR $date["month"] == 3 AND $date["day"] < 20) {

      return "Fiskarna";

   } elseif($date["month"] == 3 AND $date["day"] > 20
   OR $date["month"] == 4 AND $date["day"] < 20) {

      return "Väduren";

   } elseif($date["month"] == 4 AND $date["day"] > 19
   OR $date["month"] == 5 AND $date["day"] < 21) {

      return "Oxen";

   } elseif($date["month"] == 5 AND $date["day"] > 20
   OR $date["month"] == 6 AND $date["day"] < 22) {

      return "Tvillingarna";

   } elseif($date["month"] == 6 AND $date["day"] > 21 
   OR $date["month"] == 7 AND $date["day"] < 23) {

      return "Kräftan";

   } elseif($date["month"] == 7 AND $date["day"] > 22
   OR $date["month"] == 8 AND $date["day"] < 23) {

      return "Lejonet";

   } elseif($date["month"] == 8 AND $date["day"] > 22
   OR $date["month"] == 9 AND $date["day"] < 23) {

      return "Jungfrun";

   } elseif($date["month"] == 9 AND $date["day"] > 22
   OR $date["month"] == 10 AND $date["day"] < 23) {

      return "Vågen";
 
   } elseif($date["month"] == 10 AND $date["day"] > 22
   OR $date["month"] == 11 AND $date["day"] < 22) {

      return "Skorpionen";

   } elseif($date["month"] == 11 AND $date["day"] > 21
   OR $date["month"] == 12 AND $date["day"] < 21) {

      return "Skytten";

   } elseif($date["month"] == 12 AND $date["day"] > 21
   OR $date["month"] == 1 AND $date["day"] < 20) {

      return "Stenbocken";

   } else {

      return "Error in calculating horoscope";

   }
    
}

?>