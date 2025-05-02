import mongoose from "mongoose";
const url = 'mongodb+srv://akhilvikramsingh18:69jSgKZUaVYOS5cW@cluster0.h8g25d8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connect = async() => {
    try {
        await mongoose.connect(url)
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);

    }
}

export default connect;