import express from 'express'
import {getUsers} from './database.js'
import cors from 'cors'

const app = express()

const PORT = 8080;
app.use(cors());

app.get("/user", async (req,res) =>{
    const user = await getUsers()
    res.send(user);
});


app.listen(PORT, () =>{
    console.log("Server started on port " , {PORT});
});