db.voos.count({ "aeroportoOrigem.pais": { $not: { $eq: "BRASIL" } } });
