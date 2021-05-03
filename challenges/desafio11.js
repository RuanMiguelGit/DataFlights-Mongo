db.voos.count({ "aeroportoDestino.pais": { $not: { $eq: "ESTADOS UNIDOS" } } });
