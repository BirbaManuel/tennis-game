const express = require("express")
const router = express.Router()

router.get("/players", async function(req, res) {
	try {
		if (req){
			 return await res.status(200).json({success: "players"})
		}
		else {
			return res.status(400).json({error: "need request"})
		}
	} catch (e) {
		return res.status(500).json({error: e})
	}
})

module.exports = router

/* ROUTES HANDLERS */
function players (){
	return []
}
/* ROUTES HANDLERS */
