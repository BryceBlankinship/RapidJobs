import express from 'express';
const router = express.Router();
export default router;

import Card from './cardSchema.js';

router.get('/', (req, res) => {
    res.send("Welcome to the RapidJobs Cards API. Refer to the documentation <a href='https://www.rapidjobs.dev/api/documentation'>here</a>")
});

router.get('/:user_id/:card_id', getCard, (req, res) => {
    res.status(200).json(res.card);
});

// Create a card with user_id, card_id, title, and desc
router.post('/:user_id/:card_id', async (req, res) => {
    Card.find({ card_id: req.params.card_id }, async (err, results) => {
        if(results.length){
            res.status(400).json({ message: 'Cannot POST a new card when id ' + req.params.card_id + ' already exists!' })
        }else{
            // create the card in the database
            const card = new Card({
                user_id: req.params.user_id,
                card_id: req.params.card_id,
                title: req.body.title,
                desc: req.body.desc
            });
            try{
                const newCard = await card.save();
                res.status(201).json(newCard);
            }catch(err){
                res.status(400).json({ message: err.message });
            }
        }
    })
});

// Update a card that already exists
router.patch('/:user_id/:card_id', getCard, async (req, res) => {
    try{
        const updatedCard = await Card.updateOne({ user_id: req.params.user_id, card_id: req.params.card_id }, req.body, {new: true});
        res.json(updatedCard);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

// Delete a card
router.delete('/:user_id/:card_id', getCard, async (req, res) => {
    try{
        await res.card.remove(req.params.card_id);
        res.json({ message: 'Deleted card ' + req.params.user_id + ' from user ' + req.params.user_id});
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.get('/:user_id', (req, res) => {
    
});

async function getCard(req, res, next){
    let card;
    try{
        card = await Card.findOne({ user_id: req.params.user_id, card_id: req.params.card_id })
    }catch(err){
        return res.status(500).json({ message: err.message });
    }

    res.card = card;
    next();
}