import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const port = 3001;

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('🚀 Connected to MongoDB');

    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🔥 Server is running on port http://localhost:${port}`);
    });
  })
  .catch(err => console.error('❌ Could not connect to MongoDB', err));
