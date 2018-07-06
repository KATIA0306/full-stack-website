const mongoose = require('mongoose');
const express = require('express')
const Question = require('./Question');
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/mydb";

mongoose.connect(url);
  mongoose.connection.on('error', function () {
      console.log('Mongoose connection error');
  });
  mongoose.connection.once('open', function callback() {
      console.log("Mongoose connected to the database");
  });
  mongoose.Promise = global.Promise;


const app = express();
app.use(bodyParser.json());


app.get('/api/questions', (req, res) => {
    console.log("received a client get response");
    Question.find({}, (err, result) => {
        console.log("database responded");
        console.log(result);
        res.json (result);
    });
});

app.post('/api/questions', (req, res) => {
    const post = Question(req.body);
    console.log(req.body);
    post.save(function(err) {
        if (err) {
          res.send({error: err.message});
        } else {
            res.send('Success!');
        }
      });
});

app.get('/api/questions/:id', (req, res) => {
    db.collection('api/questions').find({_id: ObjectId(req.params.id)}).toArray((err, items) => {
        if (err) {
            console.error(err);
            res.status(500);
            res.send({'error': err});
        } else {
            res.send({post: items[0]});
        }
    })
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))