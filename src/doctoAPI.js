const express = require("express");
const app = express();
const axios = require("axios").default;

const API_URL = "http://localhost:5000";

function doctoServer(port) {
    app.use(express.json());

    app.get("/", async (req, res) => {
        try {           
            let { data } = await axios.get(`${API_URL}/jspquoi`);
            // treatment
            res.json(data);
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