
const express = require("express")
const proxy = require("express-http-proxy")
const cors = require("cors")

const port = process.env.PORT || 8000

const app = express();

app.use(cors());
app.use(express.json());
app.use("/customer",proxy("http://localhost:8001"));
app.use("/shopping",proxy("http://localhost:8003"));
app.use("/product",proxy("http://localhost:8002"));


app.listen(port,()=>{
    console.log("listening on port 8000")
})