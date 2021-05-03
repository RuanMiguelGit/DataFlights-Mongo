db.voos.findOne({ $and: [{ litrosCombustivel: 
{ $not: { $gt: 600 } } }, 
{ 'empresa.nome': { $not: { $in: ['GOL', 'AZUL'] } } }, { litrosCombustivel:
{ $exists: true } }] }, { vooId: 1, 'empresa.nome': 1, litrosCombustivel: 1, _id: 0 });
