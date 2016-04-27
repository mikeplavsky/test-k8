let http = require("http");

let srv = http.createServer((req, resp) => {

    console.log("Got it!");

    resp.writeHead(200);
    resp.end("Yep!");

});

console.log("Listening...");
srv.listen(8080);
