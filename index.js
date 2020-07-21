import "core-js"
import express from "express";
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("hello from home");
}

function handleProfile(req, res){
    res.send("You are on my Profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile)

app.listen(PORT, handleListening);

