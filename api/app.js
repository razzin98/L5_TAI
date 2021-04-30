'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(cors());

app.use(express.static('public'));

app.listen(3000, () => {
    console.info('Server is running at 3000 port')
});
