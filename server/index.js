const express = require('express');
app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors());

const sequelize = require('./model/Post')
const postRouter = require('./route/route');
app.use("/posts", postRouter);
sequelize.sync().then((result) => {
    console.log(result)
    app.listen(3001);
    })
    .catch(err => {
        console.log(err);
    })

