import express from 'express';
import {createTweet,getTweet} from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment} from '../../controllers/comment-controllers.js';
import { signup ,login} from '../../controllers/userAuth-controller.js';
import { authenticate } from '../../middlware/authenticate.js';

const router=express.Router();

router.post('/tweets',authenticate,createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comment',createComment);
router.get('/tweets/:id',getTweet);
router.post('/signup',signup);
router.post('/login',login);

export default router;