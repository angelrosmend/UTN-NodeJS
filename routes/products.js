const express = require('express');
const router = express.Router();
const productsController =require("../controllers/productsControllers")


/* GET users listing. */

router.get('/', (req,res,next) =>{req.app.validateUser(req,res,next)}, productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.create)
router.put('/:id', productsController.update)
router.delete('/:id', productsController.delete)

module.exports = router;

