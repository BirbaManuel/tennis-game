const { getPlayers,getPlayer } = require("./playersHandler")

describe("test handlers", ()=>{
    test("handler getPlayers", ()=>{
        expect(getPlayers()).toBeDefined()
    })

    test("handler getPlayer", ()=>{
        expect(getPlayer()).toBeDefined()
    })
})
