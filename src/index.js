const express = require("express");

const {PORT} = require("./config/serverConfig");
const setupAndStartServer = async function(){
    const app = express();
    const mysql = require("mysql2");
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.listen(PORT, function(){
        console.log(`server listening on port ${PORT}`);
    });
}

setupAndStartServer();


