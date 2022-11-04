"use strict";

var conn = require('../config/db-connection'),
VueloModel = () => {};


VueloModel.getAll = (cb) => conn.query("SELECT * FROM VUELO", cb);

VueloModel.getOne = (id, cb) => 
    conn.query("SELECT * FROM VUELO WHERE codigo_vuelo= 18963", id, cb);

VueloModel.post = (data, cb) =>
    conn.query("call public.sp_vuelo_insert ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.codigo_vuelo,
        data.ciudad_origen,
        data.ciudad_destino,
        data.fecha_vuelo,
        data.cantidad_pasajeros,
        data.tipo_avion,
        data.distancia
    ],
    cb);


VueloModel.put = (data, cb) =>
conn.query("call public.sp_vuelo_update ($1,$2,$3,$4,$5,$6,$7)",
[
    data.codigo_vuelo,
    data.ciudad_origen,
    data.ciudad_destino,
    data.fecha_vuelo,
    data.cantidad_pasajeros,
    data.tipo_avion,
    data.distancia
],
cb);

VueloModel.delete = (id, cb) =>
    conn.query(
        "call sp_vuelo_delete($1)", [id], cb
    );

module.exports = VueloModel