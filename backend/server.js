import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary  from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

// Initialize express
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()
app.use(express.json())
app.use(cors())

//api endpoints 
app.use('/api/admin', adminRouter)
// localhost:4000/api/admin/add-doctor 

// Routes
app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => console.log("Server running" , port ));