import express from 'express';
import cors from 'cors';

//routers
import router from './routes/productRouter.js';

const app =express();

var corOptions={
    origin: 'http://localhost:8081'
}

//middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//routers
app.use('/api/products',router);


//testing API
app.get('/',(req,res)=>{
    res.json({messgae: 'Hello from API'});
})



//port and listen
const PORT=process.env.PORT || 8080;

app.listen(PORT,(re)=>{
    console.log(`server is running on port ${PORT}`);
})