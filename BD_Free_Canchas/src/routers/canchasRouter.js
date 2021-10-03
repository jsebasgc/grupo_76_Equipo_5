const express = require("express");
const CanchasController = require("../controllers/canchasController");

class CanchasRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const canchaC = new CanchasController();
        this.router.post("/canchas", canchaC.register);
        this.router.put("/canchas", canchaC.update);
        this.router.delete("/canchas", canchaC.delete);
        this.router.get("/canchas", canchaC.getCanchas);
        
        
    }

}

module.exports = CanchasRouter;