import express from "express"
import cookie from "cookie-parser"
import auth from "./routes/auth"


const app = express()
app.use(express.json())
app.use(cookie())
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/auth",auth)


app.listen(3000)