const router = require('express').Router();
const proDuctM = require('../models/Product');

const {
    createProduct,
    obtainProduct,
    modifyProduct,
    deleteProduct
} = require('../controls/product');

router.get('/', obtainProduct);
router.post('/', createProduct);
router.put('/:id', modifyProduct);
router.delete('/:id', deleteProduct);
module.exports = router;