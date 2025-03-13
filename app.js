import express from "express"

const app = express()

// Load environment variables from .env file in non-production environments
// In production, environment variables should be set in the hosting platform
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" })
})

// Only start the server if this file is run directly
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

export default app

