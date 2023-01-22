import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

app.use(express.json())
app.use("/api/user", router) //http://localhost:3000/api/user
app.use("/api/blogs", blogRouter)

mongoose.connect("mongodb+srv://admin:Tq8WHooR0NLD3Cot@cluster0.oxkjjae.mongodb.net/Blog?retryWrites=true&w=majority"
).then(() => {
    app.listen(3000, () => { console.log("Connected to Database & Server running on 3000"); })
}).catch((err) => console.log(err));


// Password:  