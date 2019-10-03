const external = module.exports = {}
const fetch = require("node-fetch")
const PLAYERS_JSON_FILE = require("../data/headtohead.json")
const PLAYERS_URL = "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
/* HANDLERS */
async function getPlayers (){
    try {
        const playersFromENdPoint = await fetch(PLAYERS_URL)
        const players = (playersFromENdPoint.status === 200) && await playersFromENdPoint.json()

        // retreive players list from local json file
        const staticPlayers = PLAYERS_JSON_FILE
        const resultat = (players.players.length >= 0 ) ? players : staticPlayers
        return resultat
    } catch (error){
        return error.message
    }
}

async function getPlayer(id){
    try{
        const { players : arrayOfPlayers } = await getPlayers()
        const resultat =  arrayOfPlayers.find( player => player.id == id)
        return resultat
    } catch (error){

        return error.message
    }
}
/* HANDLERS */

external.getPlayers =  getPlayers
external.getPlayer =  getPlayer
