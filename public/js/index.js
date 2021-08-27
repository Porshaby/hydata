const fetch = require('node-fetch');
let apiFile = require('../apiKey.json');

let apiKey = apiFile["apiKey"]

//const playerName = "Porsha_boy"
const ign = ""
const playerUUID = "e"



fetch(`https://api.ashcon.app/mojang/v2/user/${ign}`)
function apicontact() {
    
fetch(`https://api.hypixel.net/player?key=${apiKey}&name=${ign}`)  // fetching from the api
    .then(response => response.json()) // turning the info from the api from bytes to a json
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log("Netorking error", error)) // this is just to catch any errors

    // function please work on this

}