import * as dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL,
    REDIS_URL: process.env.REDIS_URL,
}