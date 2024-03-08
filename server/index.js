import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
// import dotenv from 'dotenv';
// dotenv.config()

const app = express();

app.use(bodyParser.json({limit: "30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors()); 

const  CONNECTION_URL = 'mongodb+srv://MuskanMohammad:dgwCyN8IRirQDqRD@cluster0.qyaix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true , useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => console.log(`Server is running on ${PORT}`)))
.catch(() => (error)=>console.log(error.message));




