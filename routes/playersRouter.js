const express = require("express")
const router = express.Router()
const { getPlayers, getPlayer } = require("../handlers/playersHandler")

/* ROUTES */
router.get("/players", async function(req, res) {
    try {
        if (req){
            const data = await getPlayers()
            return  res.status(200).json(data)
        }
        else {
            return res.status(400).json({parameter_error: "need request"})
        }
    } catch (e) {
        return res.status(500).json({server_error: e})
    }
})

router.get("/players/:id", async function(req, res) {
    try {
        if (req && req.params.id){
            const id = req.params.id
            const player = await getPlayer(id)
            if(player )
                return res.status(200).json(player)
            else return res.status(404).json({})
        }
        else {
            return res.status(400).json({parameter_error: "need request with param 'id'"})
        }
    } catch (e) {
        return res.status(500).json({server_error: e})
    }
})

module.exports = router
/* ROUTES */
