const canchas = require("../models/canchas");

class CanchasController {
  constructor() {}

  //Registrar carro
  register(req, res) {
    canchas.create(req.body, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(201).json(data);
      }
    });
  }

  //Actualizar carro
  update(req, res) {
    let { id, complejoDeportivo, numCancha, disponibilidad, phFds, phEs } =
      req.body;
    let objCancha = {
      complejoDeportivo,
      numCancha,
      disponibilidad,
      phFds,
      phEs,
    };
    canchas.findByIdAndUpdate(
      id,
      {
        $set: objCancha,
      },
      (error, data) => {
        if (error) {
          res.status(500).send();
        } else {
          res.status(200).json(data);
        }
      }
    );
  }

  //Eliminar un carro
  delete(req, res) {
    let { id } = req.body;
    canchas.findByIdAndRemove(id, (error, data) => {
      if (error) {
        res.status(500).send();
      } else {
        res.status(200).json(data);
      }
    });
  }

  //Consultar carros
  getAllCanchas(req, res) {
    canchas.find((error, data) => {
      if (error) {
        res.status(500).send();
      } else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports = CanchasController;
