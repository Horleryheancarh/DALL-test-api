import mongoose from "mongoose";

export default connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));
}