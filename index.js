const http = require("http");
const port = process.env.PORT || 80;
http.createServer((_, res) => { res.setHeader("content-type", "text/html"); res.end("<h1>ex nixpacks: v2</h1>\n"); }).listen(port, () => console.log("listening on " + port));
