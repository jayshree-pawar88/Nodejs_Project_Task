import express from 'express';
import bodyParser from 'body-parser';
import Authenticate from '../middlewares/authenticate';
import application from '../constant/application';
import indexRoute from '../routes/index';
import dotenv from 'dotenv'
// dotenv.config();
require('dotenv').config();

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_access, user_id, User-agent");
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

app.use(bodyParser.json());

app.use(Authenticate);
app.use(application.url.base,indexRoute)
export default app;