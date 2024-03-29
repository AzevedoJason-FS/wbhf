const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const postCtrl = require ('./controllers/posts')
const userCtrl = require ('./controllers/users');
const cookieParser = require('cookie-parser');
const { userVerification } = require('./middleware/AuthMiddleware');
const { auth } = require('./middleware/Auth');

// Connect to MongoDB
const connectMongo = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}

const corsOptions ={
    origin:['http://localhost:3000','https://wbhf-my-app.netlify.app'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/api/posts', postCtrl.getPosts)
app.get('/api/article/:slug', postCtrl.getSinglePost)
app.get('/api/users', userCtrl.getUsers)
app.post('/api/login', userCtrl.login)
app.post('/api/signup', userCtrl.signup)
app.post('/api/new-article', auth, postCtrl.createPost)
app.delete('/api/delete-article/:id', auth, postCtrl.deletePost)
app.post('/api', userVerification)
// app.get('/api/leaderboard', leaderboardCtrl.getLeaderboard)
// app.post('/api/add-items', itemCtrl.addItems)
// app.post('/api/add-user-leaderboard', leaderboardCtrl.addUserLeaderboard)

const port = 8080;

//Connect to MongoDB before listening
connectMongo().then(() => {
    app.listen(port, () => {

    })
})



