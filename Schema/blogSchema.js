import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    description: { type: String },
    image:  { type: String }
    
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);