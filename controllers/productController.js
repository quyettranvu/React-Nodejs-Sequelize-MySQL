import db from '../models/index.js';

//Create main Model
const Product = db.products
const Review=db.reviews

//Create Product
const addProduct = async(req,res)=>{
    const info ={
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product =await Product.create(info);

    res.status(200).send(product);
    console.log(product);
}

//Get All Products
const getAllProducts= async(req,res)=>{
    // const products  await Product.findAll({
    //     attribute: [
    //         'title',
    //         'price'
    //     ]
    // });
    const products= await Product.findAll({});
    res.status(200).send(products);
}

//Get Single Product
const getOneProduct=async(req,res)=>{
    const product= await Product.findOne({where:{id: req.params.id}});
    res.status(200).send(product);
}

//Update Product
const updateProduct=async(req,res)=>{
    const product= await Product.update(req.body,{where: {id: req.params.id}});
    res.status(200).send(product);
}

//Delete Product
const deleteProduct=async(req,res)=>{
    await Product.destroy({where:{id: req.params.id}});
    res.status(200).send('Product is deleted!');
}

//Get Published Product
const getPublishedProduct = async(req,res)=>{
    const products = await Product.findAll({ where: {published: true}});
    res.status(200).send(products);
}
export default { addProduct,getAllProducts,getOneProduct,updateProduct,deleteProduct,getPublishedProduct}