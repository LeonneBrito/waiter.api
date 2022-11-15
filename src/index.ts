import * as dotenv from 'dotenv';
dotenv.config();

import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const PORT = process.env.PORT || 3001;

mongoose.connect(`mongodb://localhost:${process.env.MONGO_PORT}`)
  .then(() => {
    console.log('🚀 Connected to MongoDB');

    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`🔥 Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('❌ Could not connect to MongoDB', err));
