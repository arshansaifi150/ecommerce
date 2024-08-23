import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './src/routes/authRoutes.js'
import productRoutes from './src/routes/productRoutes.js'
import isAuth from './src/middleware/auth.js';

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(isAuth)

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
app.use('/',authRoutes)
app.use('/products',productRoutes)

//startServer function
function startServer(){
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
}
