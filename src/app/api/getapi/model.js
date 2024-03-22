import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;