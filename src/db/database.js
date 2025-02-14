import mongoose from "moongoose"

const ConnectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1)
    }
}

export default ConnectDB