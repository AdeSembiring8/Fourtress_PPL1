import mongoose from "mongoose";

const mongodb_uri: any = process.env.MONGO_URL

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      mongodb_uri
    );
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
