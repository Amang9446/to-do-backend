const express = require('express')
const router = require('./routes/todoRoutes')
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
})
