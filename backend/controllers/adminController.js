import doctorModel from "../modal/doctorSchema.js";
import { v2 as cloudinary } from 'cloudinary'

// ______________________________  Adding Doctors  _______________________________ //

export const addDOctor = async (req, res) => {

    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file ? req.file.path : null
        console.log("📂 File data from multer:", req.file);

        console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(401).json({
                success: false,
                message: 'Missing details',
            })
        }
        // check user
        const isExist = await doctorModel.findOne({ email })
        if (isExist) {
            return res.status(401).json({
                success: false,
                message: 'user already exist'
            })
        }

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url
        const doctorData = {
            name,
            email,
            password,
            image:imageUrl,
            speciality,
            experience,
            degree,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.status(200).json({
            success: true,
            message: "Doctor Added"
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }

} 