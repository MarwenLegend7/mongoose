const mongoose = require("mongoose");


const handleError =(err)=>{
  console.log(err)
}

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(`mongodb+srv://marwen:marwen@cluster0.fibywiy.mongodb.net/test`, {
      useNewUrlParser: true,
    });
  } catch (err) {
    handleError(err);
  }
};

module.exports = connectDB;