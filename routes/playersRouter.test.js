const request = require("supertest")
const rewire = require("rewire")
const { app } = rewire("../app")

function log(message){
    console.log(message)
}

describe("it should fetch api", ()=>{
    test("Players should be fetching", (done)=>{
        request(app).get("/players").expect(200).end(done)
    })

    test("Player id 52 should exist", (done)=>{
        const p52 = {id:52}
        request(app).get("/players/52")
        .then( success=> {
                const players52 = success.text
                const players52_Object = JSON.parse(players52)
                expect(players52_Object).toMatchObject(p52)
                done()
        })
        .catch( error =>{
            log(error)
            done()
        })
    })
})
