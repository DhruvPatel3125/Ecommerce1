import express from 'express';
import { registerControler,loginControler,testController } from '../controller/authControler.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();

// routing
//registar || method post

router.post('/register',registerControler )


//login || method post
router.post('/login',loginControler )

//test route
router.get('/test',requireSignIn,isAdmin,testController)

//protected route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

export default router;