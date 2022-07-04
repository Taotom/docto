const express = require("express");
const app = express();

function doctoServer(port) {
    app.use(express.json());


    // URL/drugs?name=
    app.get("/drugs", async (req, res) => {
        try {
            console.log(req.query.name);
            res.json(req.query.name);
        }
        catch (error) {
            res.status(404).send("Not found");
        }
    })

    return app.listen(port, () => {
        console.log(`Docto API listening at http://localhost:${port}`);
      });
}

doctoServer(3000);