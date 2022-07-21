const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log("requested.");
  });

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

app.post('/board/insertBoard', (req, res) => {
    const _subject = req.body.subject
    const _content = req.body.content
    const _writer = req.body.writer
    const sqlQuery = "call insertboard_sp (?, ?, ?);";

    db.query(sqlQuery, [_subject, _content, _writer], (err, result) => {
        res.send('success!'); 
    });
});

app.get('/board/readBoard', (req, res) => {
    db.query("select * from blog_board", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
})
