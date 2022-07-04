const express = require("express");
const app = express();

function doctoServer(port) {
    app.use(express.json());

    app.get("/", async (req, res) => {
        try {
            console.log("Hello world!")
        }
        catch (error) {
            res.status(error.response.status).send(error.response.data);
        }
    })

    return app.listen(port, () => {
        console.log(`Docto API listening at http://localhost:${port}`);
      });
}

doctoServer(3000);