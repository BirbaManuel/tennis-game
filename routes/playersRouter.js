const express = require("express")
const router = express.Router()
const { getPlayers } = require("../handlers/playersHandler")

/* ROUTES */
router.get("/players", async function(req, res) {
    try {
        if (req){
            const data = await getPlayers()
            return  res.status(200).json(data)
        }
        else {
            return res.status(400).json({error: "need request"})
        }
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

module.exports = router
/* ROUTES */
