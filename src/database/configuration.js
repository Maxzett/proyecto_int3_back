import mongoose from 'mongoose'
import { config } from 'dotenv'

config()
const DATABASE = process.env.DATABASE || 'mongodb+srv://user_ed_it:ed_it123@firstcluster.qnqtlba.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log('Base de datos conectada.');
    } catch (error) {
        console.log(error)
    }
}

export default connect;