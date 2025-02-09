# Yves DC Portfolio Website

## Portfolio Tech Stack And Technology

`NextJs` `Tailwindcss` `HTML5` `NodeJs` `CMS: Contentful` 

Features collections of stunning Web development projects built with one or more of the following TechStack and Technologies.
1. HTML5
2. CSS3
3. JavaScript(Vanilla)
4. ReactJS
5. PHP
6. ExpressJs
7. NextJS [Favourate]
8. TailwindCss
9. NodeJs
10. MYSQL
11. SQL
12. MongoDB
13. Prisma
14. Socket.io
15. WebRTC
16. JWT Custom Authentication
17. Clert Auth
18. CMS: `Sanity` `ContentFull`
19. And So Forth
    
``
## Fovorate Lines of Code
``` javascript

/* :: Server.js * Entry Point
------------------------------
*/

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

// Load Environment Variables

dotenv.config();

const port = process.env.PORT;

const app = express();
// API routes
app.use("/api/auth", authRoutes);
app.listen(()=>{
console.log(`Server Started! \n Listening On Port: ${port}`);
},port);

/* :: routes/auth.route.js * Point to =====>  BASE_URL/api/signup or BASE_URL/api/signin or BASE_URL/api/signout 
----------------------------------------------------------------------------------------------------------------
*/

import express from "express";
import {
  checkAuth,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller.js";

// Middleware { verifyToken }

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/check", verifyToken, checkAuth);

export default router;

/* :: controllers/auth.controller.js  *** EXPORTS ALL ROUTES FUNCTIONS 
----------------------------------------------------------------------
*/

/* :: middlewares/auth.middleware.js  *** PROTECT SPECIFIC ROUTES
-------------------------------------------------------------------
*/
```

## Feel Free to Connect

Social Meadia: [Links](https://yvesdc.vercel.app)


