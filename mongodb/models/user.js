import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String, required: true},
    // A user can create multiple properties
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property'}] 
})

const userModel = mongoose.model('User', UserSchema);

export default userModel;