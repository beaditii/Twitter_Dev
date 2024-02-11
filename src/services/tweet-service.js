 import {TweetRepository,HashtagRepository} from '../repository/index.js';
 
 class TweetService{
         constructor(){
            this.tweetRepository = new TweetRepository();
            this.hashtagRepository=new HashtagRepository();

         }

        async create(data){
            const content=data.content;
            const tags= content.match(/#[a-zA-Z0-9_]+/g)
                      .map((tag)=>tag.substring(1).toLowerCase());
                        // this regex extracts hashtags
            console.log(tags);
            const tweet=await this.tweetRepository.create(data);
            let alreadyPresentTags=await this.hashtagRepository.findByname(tags);
            let titleofPresentTags=alreadyPresentTags.map((tag) => tag.title);
            let newTags=tags.filter(tag=>!titleofPresentTags.includes(tag));
            newTags=newTags.map(tag => { 
                return { 
                    title:tag,
                    tweets:[tweet.id]
                }
            });
            const response=await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            console.log(response);

            
            // todo create hashtags and add here
            /**
             * 1. bulcreate in mongose
             * 2. filter title of hashtags based on multiple tags
             * 3. How to add tweet id inside all the hashtags
             */
            return tweet;
         }

       async get(tweetId){
        const tweet=await this.tweetRepository.getWithComment(tweetId);
         return tweet;
       }
 }

 export default TweetService;

 /*
 this is my #first #tweet. I am really #excited
 */