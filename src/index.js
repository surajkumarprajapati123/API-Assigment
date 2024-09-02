const app = require('./app')
const Dbconnections = require('./db/databse')
const dotenv = require('dotenv')
dotenv.config()

const PORT =process.env.PORT || 5000
Dbconnections()

app.listen(PORT,()=>
    {
        console.log(`server is Strated port is ${process.env.PORT}`)
    })
    // app.get("/", () => {
    //     console.log("routes is working");
    //   });