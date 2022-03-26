import mongoose from "mongoose";

const userNewsLetterSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
  },
});

export default mongoose.models.EmailUser ||
  mongoose.model("EmailUser", userNewsLetterSchema);
