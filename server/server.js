const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db');

app.get('/api/selectBoard', (req, res) => {
    db.query("select * from blog_board", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
})


app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})
