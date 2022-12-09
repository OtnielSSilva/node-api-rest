import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://alura:159159@alura.dprdxqe.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;