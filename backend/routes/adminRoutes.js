import express, { Router } from 'express'
import { addDOctor, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDOctor);
adminRouter.post('/login', loginAdmin);

export default adminRouter