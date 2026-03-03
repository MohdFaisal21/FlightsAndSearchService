const express = require("express");

const {PORT} = require("./config/serverConfig");
const setupAndStartServer = async function(){
    const app = express();
    app.listen(PORT, function(){
        console.log(`server listening on port ${PORT}`);
    });
}

setupAndStartServer();


