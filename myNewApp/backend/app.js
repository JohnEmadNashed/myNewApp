      const express = require('express');
      const bodyParser = require ('body-parser');
      const mongoose = require('mongoose');
      const postsRoutes = require('./routes/posts');
      const userRoutes = require('./routes/user');

      const app = express();
      const path = require("path");

      mongoose.connect("mongodb+srv://John:" + process.env.MONGO_ATLAS_PW + "@cluster0.c7v3o.mongodb.net/node-angular?retryWrites=true&w=majority")
      .then(()=> {
          console.log('Connected to MongoDB using Mongoose :)')
      })
      .catch((err)=> {
        console.log(err)
            console.log('Connection to MongoDb failed :(')
      });

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended: false}));
      app.use("/images", express.static(path.join("backend/images")));

      app.use( (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin" , "*");
        res.setHeader("Access-Control-Allow-Headers" , "Origin, X-Requested-with, Content-Type, Accept, Authorization");
        res.setHeader("Access-Control-Allow-Methods","GET, POST, DELETE, PATCH, PUT, OPTIONS");
        next();
      });

      app.use("/api/posts", postsRoutes)
      app.use("/api/user", userRoutes)
      module.exports = app;
