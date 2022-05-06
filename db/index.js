const { connect } = require('mongoose')

const URI = "mongodb+srv://rutwikgulhane:9UlbubH158fwpaDD@cluster0.heufx.mongodb.net/brillio-db?retryWrites=true&w=majority";

connect(URI)
    .then(conn => console.log("MongoDB Connected...."))
    .catch(console.log)