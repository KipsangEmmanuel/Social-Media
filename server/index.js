import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './src/routes/userRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', router)

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`server up and running on port ${port}`);
})


