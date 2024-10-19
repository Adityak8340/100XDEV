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

app.put("/", function(req, res){
    if(isthereatleastoneunhealthykidney()){
        for (let i=0; i<users[0].Kidneys.length; i++){
            if(!users[0].Kidneys[i].healthy){
                users[0].Kidneys[i].healthy = true;
                res.json({msg: "Done!"});
                return;
            }
        }
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys!"
        })
    }
})

app.delete("/", function(req, res){
    if(isthereatleastoneunhealthykidney()){
        const newKidneys = [];
        for (let i=0; i<users[0].Kidneys.length; i++){
            if(users[0].Kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });

            }
        }
        users[0].Kidneys = newKidneys;
        res.json({msg: "Done!"});
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys!"
        })
    }
})

function isthereatleastoneunhealthykidney(){
    for (let i=0; i<users[0].Kidneys.length; i++){
        if(!users[0].Kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

app.listen("3000");