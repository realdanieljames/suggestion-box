const express = require('express');
//create a router
const router = express.Router();

const Suggestion = require('../models/Suggestion')
const {
    getAllSuggestions,
    getSuggestionsByName,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion
}
    = require('../controllers/suggestionController')


//====================================================================================//
//====================================================================================//


router.get('/all-suggestions', getAllSuggestions)

router.get('/byname-suggestion/:name', getSuggestionsByName)

router.get('/single-suggestion/:id', getSingleSuggestion)

router.post('/create-suggestion', createSuggestion)

router.put('/update-suggestion', updateSuggestion)

// router.delete('/delete-suggestion', deleteSuggestion)



module.exports = router;