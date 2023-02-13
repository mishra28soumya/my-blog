const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
app.use(bodyParser.json());


const withDB = async (operations, res) => {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://Soumya:Soumya@cluster0.utlrqlo.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true }
      );
      const db = client.db("my-blog");
      await operations(db);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Error connecting to db", error });
    }
  };

  app.get("/api/article/:name", async (req, res) => {
    withDB(async (db) => {
      const articleName = req.params.name;
      const articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      res.status(200).json(articleInfo);}, res);
  });


  app.post("/api/article/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;
  
    withDB(async (db) => {
      const articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      await db.collection("articles").updateOne(
        { name: articleName },
        {
          $set: {
            comments: articleInfo.comments.concat({ username, text }),
          },
        }
      );
      const updatedArticleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      res.status(200).json(updatedArticleInfo);
    }, res);
  
  });



const artcilesInfo = {
    'learn-react':{
        comments: []
    },
    'learn-node':{
        comments: []
    },
    'learn-angular':{
        comments: []
    }
};

// app.post("/api/article/:name/add-comment", (req,res)=>{
//     const { username, text } = req.body;
//     const articleName = req.params.name;
//     artcilesInfo[articleName].comments.push({username, text});
//     res.status(200).send(artcilesInfo[articleName])
// })



app.get("/hello", (req,res) => {
    res.send("Hello world")
});

app.post("/hello", (req,res) => {
    res.send(`Posted ${req.body.title}`)
});

app.listen(5001, () => {
    console.log("Server listening on port 5001");
  });