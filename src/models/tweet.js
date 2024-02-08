const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required: true,
        max:[250,'Tweet cannot be more than 250 characters']
    },
    hashtags:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:'Hashtag'
         }
       ]

    // userEmail:{
    //     type: String,
    // },
    // comments:[
    //     {
    //     // content:{
    //     //     type: String,
    //     //     required: true,
    //    // }
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref:'Comment'
    // }
//]
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet;

// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by: ${this.userEmail}`;
// })

// //hooks

// tweetSchema.pre('save',function(next){
//     console.log('Inside a hook');
//     this.content=this.content+'.....';
//     next();
// })

