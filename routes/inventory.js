// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory');

//helper function for guarding purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

router.get('/list', inventoryController.list);

/*GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, inventoryController.displayAddPage);

/*POST Route for displaying the Add page - CREATE Operation */
router.post('/add', requireAuth, inventoryController.processAddPage);

//Routers for edit
router.get('/edit/:id', inventoryController.displayEditPage);
router.get('/edit/:id', inventoryController.processEditPage);

//Delete
router.get('/delete/:id', inventoryController.performDelete);

module.exports = router;