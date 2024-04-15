
import express from 'express';
// import { ExcelController } from '../controllers/excelController';

const router = express.Router();

// Excel routes
router.get('/download/:mode', (req, res) => {
    res.send('Hello World');
});