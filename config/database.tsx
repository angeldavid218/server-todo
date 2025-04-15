import mongoose from 'mongoose';

let connected = false;
export const connectDB = async () => {
  // ensure that only fields that we specified on the schema are passed on the db
  mongoose.set('strictQuery', true);

  // if connected we do an ealy return
  if (connected) {
    console.log('Already connected to MongoDB');
    return;
  }
  // start the connection
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    connected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
