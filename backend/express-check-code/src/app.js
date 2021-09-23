const express = require("express");
const config = require("./config.js")
const loader = require("./loaders/loader")

function serverBootstraping() {
    const app = express();
    const server = app.listen(config.server.port)

    server.on("listening", function() {
        console.info(
            `The server for COVID vaccination is running on PORT: http://localhost:${config.server.port}`
        );
        loader(app);
    });
}

serverBootstraping();