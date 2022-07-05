
const fs = require('fs');
const cors = require('cors');
const express = require("express");
const app = express();

// List of drug
const dataBase = JSON.parse(fs.readFileSync("medicaments.json"));

// Possible location of the terminal
const locations = ["UK", "FR"];

if (process.argv.length != 4 || !locations.includes(process.argv[3])) {
    console.log("USAGE: node doctoAPI.js PORT LOCATION"); 
    console.log("PORT: number");
    console.log("LOCATION: UK - FR");
}
else {
    doctoServer(process.argv[2], process.argv[3]);
}

function doctoServer(port, location) {
    app.use(cors());

    // URL/drugs?name=
    app.get("/drugs", async (req, res) => {        
        try {
            let searchedDrug = dataBase.filter(drug => {
                return drug.name.toLowerCase() === req.query.name.toLowerCase();
            });

            if (searchedDrug.length === 0) {
                return res.status(404).send("The desired product does not exist...");                
            }

            searchedDrug = searchedDrug[0];

            console.log("Searched drug:");
            console.log(searchedDrug);

            const results = dataBase.filter(drug => { return drug.country === location; }).filter(drug => {
                return drug.composants.includes(searchedDrug.composants[0]);
            });

            console.log()
            console.log("Results:");
            console.log(results);

            console.log()
            console.log()

            if (results.length === 0) {
                return res.status(404).send("No substitutes were found...");
            }

            return res.json(results);

        } catch(error) {
            return res.status(404).send(error);
        }
    });

    return app.listen(port, () => {
        console.log(`Docto API listening at http://localhost:${port}`);
        console.log()
    });
}