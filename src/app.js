import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
app.use(cors({ //use is used for middleware
    origin: process.env.CORS_ORIGIN,
    credentials: true,
})) 


app.use(express.json({limit: "20kb"})) //to parse json data
app.use(express.urlencoded({extended: true,limit: "20kb"})) //to parse urlencoded data
app.use(express.static("public")) //to serve static files
app.use(cookieParser()) //to parse cookies

export { app };