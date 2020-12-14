window.addEventListener("load", initSite)

let collectedDate
document.getElementById("saveBtn").addEventListener("click", saveDate)
document.getElementById("updateBtn").addEventListener("click", getDate)
document.getElementById("deleteBtn").addEventListener("click", deleteDate)

function initSite() {

}

async function saveDate() {
    console.log("clicked save")

    let dateToSave  = document.getElementById("dateInput").value
    if (!dateToSave.length)
    {
        console.log("Fyll i ett datum")
        return
    }

    dateToSave = Array.from(dateToSave)
    let month = dateToSave.slice(5, 7)
    let day = dateToSave.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))
    
    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    console.log("month: " + month + ", day: " + day)

    const collectedDate = await makeRequest("./requestHandler.php", "POST", body)
    console.log(collectedDate)
    
}

// Tillfällig för att testa om jag kan få tillbaka month och date
async function getDate() {

    const collectedDate = await makeRequest("./requestHandler.php", "GET")
    console.log(collectedDate)

}

async function updateDate() {
    console.log("clicked update")

    const dateToUpdate  = document.getElementById("dateInput").value

    if(!dateToUpdate.length) {
        console.log("Du måste skriva in ett datum i rätt format")
        return
    }

    const body = new FormData()
    body.set("date", dateToUpdate)

    const collectedDate = await makeRequest("./requestHandler.php", "POST", body)
    console.log(collectedDate)
    if(typeof collectedDate === 'string') {
        document.getElementById("outputDiv").innerText = collectedDate
    } 
}

async function deleteDate() {
    console.log("clicked delete")

    const deleteRequest = await makeRequest("./requestHandler.php", "DELETE")
    console.log(deleteRequest)
    if(deleteRequest) {
        document.getElementById("outputDiv").innerText = ""
    } 
}

async function makeRequest(path, method, body) {

    try {
        const response = await fetch(path, {
            method,
            body
        })

        return response.json()

    } catch(err) {
        return err
    }

}