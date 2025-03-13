import request from "supertest"
import app from "../app.js"

describe("API Endpoints", () => {
  it("GET / should return Hello, World!", async () => {
    const response = await request(app).get("/")

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("message")
    expect(response.body.message).toBe("Hello, World!")
  })
})

