const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get('/:name', (req, res) => {
    res.send('Heiki heii, ' + ' ' + req.params.name + ' !' )
  });

app.use('/.netlify/functions/api', router);


module.exports.handler = serverless(app); 
