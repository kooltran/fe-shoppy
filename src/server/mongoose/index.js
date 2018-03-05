import mongoose from 'mongoose';
import config from 'config';

mongoose.connect(config.db.mongoURL);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('connected', () => console.log('MongoDB connected!'));
db.on('error', err => console.log(`MongoDB error: ${err}`));
db.on('disconnect', () => console.log('MongoDB disconnected'));

export default db;
