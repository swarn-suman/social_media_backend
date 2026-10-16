const express = require('express')
const app = express()
const multer = require('multer')
const uploadFile = require('./services/storage')
const posts = require('./models/posts')

app.use(express.json())
const upload = multer({storage: multer.memoryStorage()})



app.post('/create-post', upload.single("image"), async(req,res)=>{

    const result = await uploadFile(req.file.buffer)

    const post = await posts.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
})


app.get('/feed', async(req,res)=>{
    const post = await posts.find()

    res.status(201).json({
        message: "Feed: ",
        post
    })
})


module.exports = app