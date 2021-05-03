db.voos.findOne({ $and: [{ litrosCombustivel: { $not: { $gt: 1000 } } }, { litrosCombustivel:
{ $exists: true } }] }, { vooId: 1, litrosCombustivel: 1, _id: 0 });
