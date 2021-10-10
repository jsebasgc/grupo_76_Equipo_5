//Importar express
const express = require("express");
//Importar ruta
const CanchasRouter = require('./routers/canchasRouter');
//Importar mongoose
const mongoose = require("mongoose");
//Importar modulo que contiene la url de la bd
const database = require("./database/db");
//Importar cors
const cors = require("cors")


class Server{
    //constructor
    constructor(){
        //Llamar al metodo de conxecion a la BD
        this.conectarBD();
        //Crear un aplicacion express
        this.app = express();
        //Configurar el puerto por el que correra el servidor
        this.app.set("port", process.env.PORT || 3000);
        //Indicar que se manejaran solicitudes con informacion JSON
        this.app.use(express.json());
        this.app.use(cors());
        //Rutas
        const router = express.Router();
        router.get("/", (req, res)=>{
            console.log("Conexión exitosa");
            res.status(200).json({message: "Conexión exitosa"});
        });
        //RUTAS DEL SERVIDOR
        const canchasR = new CanchasRouter();
        this.app.use(canchasR.router);

        //AGREGAR LAS RUTAS CREADAS AL SERVIDOR
        this.app.use(router);

        //Levantar el servidor web
        this.app.listen(this.app.get("port"), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

    conectarBD(){
        mongoose.connect(database.db).then(()=>{
            console.log("Conexión exitosa a la BD");
        }).catch(error=>{
            console.log(error);
        });
    }
}

const objServer = new Server();