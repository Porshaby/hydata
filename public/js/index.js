const fetch = require('node-fetch');
let apiFile = require('../apiKey.json');

let apiKey = apiFile["apiKey"]

//const playerName = "Porsha_boy"
const ign = "midnight_flash"
const playerUUID = "e"



fetch(`https://api.ashcon.app/mojang/v2/user/${ign}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log("networking error", error))


//fetch(`https://api.hypixel.net/player?key=${apiKey}&name=${ign}`)  // fetching from the api
    .then(response => response.json()) // turning the info from the api from bytes to a json
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log("An error has occured, this is the messsage:", error)) // this is just to catch any errors

    // function please work on this

