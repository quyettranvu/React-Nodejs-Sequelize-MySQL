import productController from '../controllers/productController.js';

import express from 'express';

const router=express.Router();

router.post('/addProduct',productController.addProduct);

router.get('/allProducts',productController.getAllProducts);

router.get('/published',productController.getPublishedProduct);


router.get('/:id',productController.getOneProduct);

router.put('/:id',productController.updateProduct);

router.delete('/:id',productController.deleteProduct);

export default router;