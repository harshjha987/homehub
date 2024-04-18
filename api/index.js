import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
import listingRouter from "./routes/listing.route.js"
import cookieParser from 'cookie-parser'
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})


const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000,()=>{
    console.log("Server is listening on port 3000!!!");
})
const prodOrigins = [
    getEnvironmentVariable('ORIGIN_1'),
    getEnvironmentVariable('ORIGIN_2'),
    getEnvironmentVariable('ORIGIN_3'),
  ];
  const devOrigin = ['http://localhost:5173'];
  const allowedOrigins = getEnvironmentVariable('NODE_ENV') === 'production' ? prodOrigins : devOrigin;
  app.use(
    cors({
      origin: (origin, callback) => {
        if (getEnvironmentVariable('NODE_ENV') === 'production') {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error(`${origin} not allowed by cors`));
          }
        } else {
          callback(null, true);
        }
      },
      optionsSuccessStatus: 200,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
  );
  

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode,
    })

}
)

