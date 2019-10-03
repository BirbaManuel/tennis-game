const external = module.exports = {}
const fetch = require("node-fetch")
const PLAYERS_JSON_FILE = require("../data/headtohead.json")
const PLAYERS_URL = "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
/* HANDLERS */
async function getPlayers (){
    const playersFromENdPoint = await fetch(PLAYERS_URL)
    const players = (playersFromENdPoint.status === 200) && await playersFromENdPoint.json()

    // retreive players list from local json file
    const staticPlayers = PLAYERS_JSON_FILE
    const resultat = (players.players.length >= 0 ) ? players : staticPlayers
    return resultat
}

async function getPlayer(id){
	const { players : arrayOfPlayers } = await getPlayers()
	return arrayOfPlayers.find( player => player.id == id)
}
/* HANDLERS */

external.getPlayers =  getPlayers
external.getPlayer =  getPlayer
