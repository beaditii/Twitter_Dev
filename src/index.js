import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js'
const app = express();

 import TweetService from './services/tweet-service.js';

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/api',apiRoutes);

app.listen(3000, async() => {
    console.log('server started');
    await connect();

    console.log('Mongo db connected');
   
   

});

























// const TweetRepository=require('./repository/tweet-repository');
// const Comment=require('./models/comment');
//const HashtagRepository=require('./repository/hashtag-repository');
//const Tweet=require('./models/tweet');
// let repo= new HashtagRepository();
// await repo.bulkCreate([
//  {
//     title:'Trend',
//     tweets:[]
//  },
//  {
//     title:'Excited',
//     tweets:[]
//  },
//  {
//     title:'Python',
//     tweets:[]
//  },
//  {
//     title:'Fun',
//     tweets:[]
//  }
// ])

// const tweet=await Tweet.create({
//     content:'Fourth tweet',
//     userEmail:'a@b.com'
// });

// const tweets=await Tweet.find();
//const tweets=await Tweet.find({userEmail:'a@b.com'});

//    const tweet=await Tweet.findById('65c3bdb914d42d671972d74c');
//    tweet.userEmail = 'p@b.com';
//    await tweet.save();

// const tweetRepo=new TweetRepository();

//    const tweet=await tweetRepo.create({
//     content:'tweet with a comment'
//    });
//    console.log(tweet);
//    tweet.comments.push({content:'first comment here'});
//    await tweet.save();
//    console.log(tweet);

//  const tweet=await tweetRepo.create({content:'Tweet with comment schema'});
//  const comment=await Comment.create({content:'new Comment'});
//     console.log(tweet);
//  tweet.comments.push(comment);
//  await tweet.save();
//    console.log(tweet);

// const tweet=await tweetRepo.getAll(0,4);
//     console.log(tweet[0].contentWithEmail);

// const tweet=await tweetRepo.create({content:'with hooks now'});
// console.log(tweet);
//  let service=new TweetService();
   //  const tweet=service.create({
   //    content:'I am #excited and going to do #fun, #newjob'
   //  });
   //  console.log(tweet);