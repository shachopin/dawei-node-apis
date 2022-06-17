import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

app.use(express.json())
app.get('*', (req, res) => {
  res.json({hello: 'dawei'});
});

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})