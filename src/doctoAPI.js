const express = require("express");
const app = express();
const axios = require("axios").default;

const API_URL = "http://localhost:5000";

const country = "Angleterre"
const country_id = 1

function doctoServer(port) {
    app.use(express.json());

    // URL/drugs?name=
    app.get("/drugs", async (req, res) => {
        try {
            console.log(req.query.name);
            //res.json(req.query.name);
            const fs = require('fs');
            const data = fs.readFileSync('./medicaments.txt',
                {encoding:'utf8', flag:'r'});
            const arr = data.split(/\r?\n/);

            var found = 0;
            for (var cursor in arr)
            {
                var line = arr[cursor].split(" ");

                if (line[0] == req.query.name){
                    console.log(JSON.stringify(line[country_id]));
                    res.json(JSON.stringify(line[country_id]));
                    found++;
                    break;
                }
            }

            if (found == 0)
                res.json("no result");

            //console.log(arr[0]);

            //console.log(data);


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