import express, { Router } from 'express'
import { addDOctor, allDoctors, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js';
import { changeAvailablity } from '../controllers/doctorController.js';

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDOctor);
adminRouter.get('/all-doctors', authAdmin,  allDoctors);
adminRouter.post('/change-availablity', authAdmin,  changeAvailablity);
adminRouter.post('/login', loginAdmin);

export default adminRouter