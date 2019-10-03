const request = require("supertest")
const rewire = require("rewire")
const { app } = rewire("../app")

describe("it should fetch api", ()=>{
    test("Players should be display", (done)=>{
        request(app).get("/players").expect(200).end(done)
    })
})
