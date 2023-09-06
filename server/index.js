const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { log } = require('console');
const cupRoute = require('./routes/cups')
const clientRoute = require('./routes/clients')
const orderRoute = require('./routes/order')
const authRoutes = require("./routes/auth");
const newcupRoute = require("./routes/newcups")
const discupRoute = require("./routes/discountedcups")

require('dotenv/config')

const app = express();

//Used with React!
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cupRoute)
app.use(orderRoute)
app.use(newcupRoute)
app.use(discupRoute)
app.use("/api/users", clientRoute);
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'OnTheGo' //Collection Name
}).then(() => {
    console.log("Connected to the DB")
})
.catch((err) => {
    console.log("No Connection. Error:" + err);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log('Server started on port', PORT)})