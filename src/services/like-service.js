import { TweetRepository,LikeRepository } from "../repository/index.js";
import Tweet from '../models/tweet.js';
class LikeService{

    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){  // /api/v1/likes/toggles?id=modelid&type=Tweet
        
                
          if(modelType == "Tweet"){
              var likeable=await this.tweetRepository.find(modelId);

               
              
          }
          else if(modelType == "Comment"){
              
          }
          else{
            throw new Error("Unknown model type")
          }

        const exists=await this.likeRepository.findByUserLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
          
        if(exists){
           likeable.likes.pull(exists.id);
           await likeable.save();
           await exists.deleteOne();
           var isRemoved=true;
        }
        else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved=false;
        }

        return isRemoved;
    }
}

export default LikeService;