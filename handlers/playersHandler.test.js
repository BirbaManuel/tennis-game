const { getPlayers } = require("./playersHandler")

describe("test handlers", ()=>{
    test("handler getPlayers", ()=>{
        expect(getPlayers()).toBeDefined()
    })
})
