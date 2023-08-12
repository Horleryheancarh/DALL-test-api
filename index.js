import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connect from './database/connect.js';
import dalleRoutes from './routes/dalle.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' })
})

const startServer = async() => {
  try {
    connect(process.env.MONGO_URL);

    app.listen(process.env.PORT, () => 
      console.log('Server has started on port 8080')
    );
  } catch (error) {
    console.error(error);
  }
}
