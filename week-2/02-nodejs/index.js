const express = require("express");
const app = express();



const users = [{
    name: "Aadi",
    Kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/",  function(req, res) {
    const aadikidneys = users[0].Kidneys;
    const numberofkidneys = aadikidneys.length;
    let numberofhealthykidneys=0;
    for(let i=0; i<aadikidneys.length; i++){
        if(aadikidneys[i].healthy) 
            numberofhealthykidneys++;
    }
    const numberofunhealthykidneys = numberofkidneys- numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})


app.post("/", function(req, res){
    const ishealthy= req.body.ishealthy;
    users[0].Kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.listen("3000");