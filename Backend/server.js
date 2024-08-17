import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'


const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URI = process.env.MONGO_DB_URI
if (!URI) {
    console.error('MongoDB uri is not defined')
    process.exit(1)
}

//database connection
mongoose
.connect(URI)
.then(()=>{
    console.log('Connected to MongoDB')
    startServer();
})
.catch((error)=>(
    console.error('Error connecting to MongoDB:', error),
    process.exit(1)
))


//api routes
app.get('/hello',(req,res)=>{
    res.send('server')
})

//startServer function
function startServer(){
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
}
