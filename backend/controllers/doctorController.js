import doctorModel from "../modal/doctorSchema.js";

// ___________________  changeAvailablity  ____________________//

export const changeAvailablity = async (req, res) => {

    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.status(200).json({
            success: true,
            message: 'Availablity changed'
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


// ____________________ Doctors List _________________________//
export const doctorsList = async (req, res) => {

    try {

        const doctors = await doctorModel.find({}).select('-password -email')
        res.status(200).json({
            success: true,
            doctors,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}