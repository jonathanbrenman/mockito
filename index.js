const routes  = require('./routes.json');
const express = require('express');
const app = express();

if (!routes) {
    throw "Missing ./routes.json";
}

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

app.listen(process.env.PORT, () =>
  console.log(`Fake Rest API started at http://localhost:${process.env.PORT}`),
);