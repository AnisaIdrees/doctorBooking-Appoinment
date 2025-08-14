import mongoose from "mongoose";


const dbConnection = async () => {
  return await mongoose.connect(`${process.env.CONNECTION_URL}`)
        .then(() => {
            console.log('db connected');

        })
        .catch((err) => {
            console.log(err, 'db connection error');

        })
}
export default dbConnection