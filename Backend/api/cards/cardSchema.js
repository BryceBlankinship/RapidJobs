import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    card_id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, {collection: 'cardsCollection'});

export default mongoose.model('Card', cardSchema);