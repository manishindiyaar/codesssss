const express = require('express');
const readline = require('readline');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const ytdl = require('ytdl-core');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});
app.get("/", (req,res)=>{
    const videoLink = req.body.link;
    console.log(videoLink);
    download();

})
const port = 5000;
app.listen(port, ()=> console.log("Server listen to 127.0.0.1", port));

async function download(){
    let n = Math.floor(math.random()*10000);
    let url = videoLink;
    let videoID = ytdl.getURLVideoID(url);

    const output = path.resolve(__dirname, 'video-' + n  + '.mp4')
    const video = ytdl(url);
    ytdl.getInfo(videoID).then(info=>{
        console.log("title:" , info.videoDetails.title)
    })

}