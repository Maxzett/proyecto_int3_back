import { Schema, model} from 'mongoose';

const userSchema = new Schema({

    username: {
        type: String,
        required: [true, 'Username is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        minlength: [8, 'Password must be at least 8 characters.'],
        maxlength: [80, 'Password must be less than 82 characters.'],
        required: [true, 'Password is required.']
    },
   

});

const UserModel = model('User', userSchema);

export default UserModel;