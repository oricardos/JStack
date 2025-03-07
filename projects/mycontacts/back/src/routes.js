const express = require("express");

const ContactController = require("./app/controllers/ContactController");
const CategoryController = require("./app/controllers/CategoryController");

const router = express.Router();

router.get(
    "/contacts",
    //Middlewares são executados na sequência em que são declarados
    (request, response, next) => {
        request.appId = 'MeuAppId'
        next()
    },
    ContactController.index);
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contacts', ContactController.store)
router.put('/contacts/:id', ContactController.update)

//category controller
router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);


module.exports = router;
