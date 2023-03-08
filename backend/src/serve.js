const app = require("./app")
const dotenv = require("dotenv")

process.env.PORT
dotenv.config()

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Serve running in port ${PORT}`))

module.exports = app