import express from "express"
import cors from "cors"
const port = process.env.PORT || 8003
const app = express();

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    return res.json({"q":"a"})
})

app.listen(port,()=>{
    console.log("listening on port 8003")
})