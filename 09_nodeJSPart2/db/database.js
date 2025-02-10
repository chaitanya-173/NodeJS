import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(error);
    process.exit(1); // Force exit if DB connection fails
  }
};

export default connectDB;
