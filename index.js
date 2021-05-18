const routes  = require('./routes.json');
const express = require('express');
const cors    = require('cors');
const app = express();
var port = process.env.PORT || 98765;

if (!routes) {
    throw "Missing ./routes.json";
}

app.use(cors());

const mocksFolder = "./mocks";

routes.forEach(route => {
    console.log(`${route.method.toUpperCase()} ${route.path} ${route.status} -> serving ${mocksFolder}/${route.file}`)
    app[route.method](route.path, (req, res) => {
        return res.status(route.status).json(require(`${mocksFolder}/${route.file}`));
    });
});

app.use("*", (req, res) => {
    return res.status(404).json({
        "error": "not found"
    });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Fake Rest API started at http://localhost:${port}`),
);