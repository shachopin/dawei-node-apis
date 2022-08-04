import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';
import authRouter from './routes/authRoutes.js'
import algoRouter from './routes/algoRoutes.js'
import notFoundMiddleware from './middleware/not-found.js'
app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/algos', algoRouter)
// app.use('/api/v1/jobs', authenticateUser, jobsRouter)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})