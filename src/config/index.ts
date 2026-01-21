import * as path from 'path';
import * as dotenv from 'dotenv';

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

export default {
    port: process.env.PORT,
   
    jwtSecret: process.env.JWT_SECRET

}