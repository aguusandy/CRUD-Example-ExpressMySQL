// imports
import express from "express";
import structuresRoutes from './routes/structures.routes.js';
import {PORT} from './config.js'

// variable app from required express
const app = express();
app.use(express.json());

// function calls
app.use(structuresRoutes);
app.use((request,response,next)=>{
    response.status(404).json({ message:'Page not found' })
})

// listening of the port number
app.listen(PORT);    


