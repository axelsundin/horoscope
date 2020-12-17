##Länk till repot
(https://github.com/axelsundin/horoscope.git)

# Horoscope

## Projektbeskrivning

Projektet är att skapa en hemsida där användaren ska skriva in sitt födelsedatum och få tillbaka sitt horoskop. Detta ska göras genom att 
bygga ett REST API där klientsidan skickar anrop till en serversida som ska returnera ett svar. 

I detta fallet ska klientsidan kunna begära 
att spara eller uppdatera ett horoskop genom att skicka ett datum, samt att radera eller visa horoskopet. Serversidan ska kunna räkna ut vilket 
horoskop datumet tillhör.

## Genomförande
Klientsidan har byggts med html och javascript

I html strukturerar jag upp hur sidan ska se ut, med en datuminput, knappar för spara, uppdatera och radera, samt en div där horoskopet skrivs 
ut. Poängen är inte att denna sida ska se bra ut, projektet handlar om att använda REST-anrop.

Jag valde att göra en separat javscript-fil med sidans funktioner. Varje knapp har sin funktion som skickar ett anrop till olika sidor på 
servern. En funktion uppdaterar om horoskopet ska visas, och en funktion skickar själva anropet till vald server.

Serversidorna är byggda i php och hanterar de inkommande anropen. Beroende på vad som skickas från klienten svarar sidorna via echo. 
En av sidorna innehåller bara en funktion som räknar ut horoskopet baserat på datum.








