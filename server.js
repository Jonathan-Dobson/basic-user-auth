// REQUIRED PACKAGES
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

// ENVIRONMENT VARS
const PORT =        process.env.PORT || 5000
const SSL_PORT =    process.env.SSL_PORT || 443
const SSL_CERT =    process.env.SSL_CERT
const SSL_PRIVKEY = process.env.SSL_PRIVKEY
const SSL_CHAIN =   process.env.SSL_CHAIN
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_DB = 'blog'
const SECRET = process.env.SECRET

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: SECRET }));
app.use("/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blog"));
app.use((err, req, res, next) => {
    console.error(err.message);
    if (err.name === "UnauthorizedError") {
        res.status(400)
    }
    return res.send({ message: err.message });
});

// CONNECT TO MONGODB
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(uri, {}, err => {
  if (err) throw err;
  console.log(`connected to mongodb+srv://${MONGO_USER}@${MONGO_HOST}/${MONGO_DB}`);
});

// START SERVER LISTENING
app.disable('x-powered-by')
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
    console.log(`[+] HTTP Server running on port ${PORT}`);
});

// START SSL IF ENABLED
if(process.env.SSL_MODE=='PRODUCTION'){
    const privateKey = fs.readFileSync(SSL_PRIVKEY, 'utf8');
    const certificate = fs.readFileSync(SSL_CERT, 'utf8');
    const ca = fs.readFileSync(SSL_CHAIN, 'utf8');
    const credentials = {
            key: privateKey,
            cert: certificate,
            ca: ca
    };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(SSL_PORT, () => {
            console.log(`HTTPS Server running on port ${SSL_PORT}`);
    });
}
