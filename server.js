import express from 'express'; // Import express
import chalk from 'chalk'; // Import chalk for colored console output
import dotenv from 'dotenv'; // Import dotenv for environment variables
import morgan from 'morgan'; // Import morgan for logging
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
const app = express();


dotenv.config();

//database config
connectDB();


// Middleware to parse JSON bodies
app.use(express.json());

app.use(morgan('dev'))
//routs
app.use('/api/v1/auth',authRoute)

//rest api
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to ecommerce"
    });
});

const port = process.env.port||8080;

app.listen(port, () => {
    console.log(chalk.bgCyan.white(`Server is running on port ${port}`));
});

//05-6:41