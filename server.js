// This file is the entry point for the application
// It imports the Express app and starts the server

import app from "./app.js"

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`)
})

