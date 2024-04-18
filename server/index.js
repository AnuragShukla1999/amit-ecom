import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./routes";
import connectDB from "./config/db";

dotenv.config();

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

app.use(express.json());
app.use(cookieParser);

app.use("/api", router);

const PORT = 8080 || process.env.PORT


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("connect to DB");
        console.log("Server is running ", PORT)
    })
})