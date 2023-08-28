//const express = require('express')
import express from 'express';
//const colors = require('colors');
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import middleware from 'express-middleware';
import authRoutes from './routes/authRoute.js';
import cors from "cors"



//configure env
dotenv.config();

//database config
connectDB();


//rest object
const app = express()

//middlware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth',authRoutes);



//rest api

app.get('/',(req,res) => {
    res.send('<h1>Welcome to my Ecommerce App</h1>')
})

//port
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT,() => {
    console.log(`Server Running on${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})