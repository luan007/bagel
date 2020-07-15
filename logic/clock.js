const express = require('express')
var router = express.Router();
var store = require("../simplejson").create("clock");

if (store.db["version"] != 1.0) {
    store.db.clock = Date.now() - 12000 * 60 * 60;
    store.db.version = 1.0;
    store.save();
}

router.get("/data", (req, res) => {
    res.json(store.db).end();
});

// router.post("/data", (req, res) => {
//     store.db.feed = req.body.data;
//     if (store.save()) {
//         store.rev++;
//         store.save();
//     }
// });

// router.get("/rev", (req, res) => {
//     res.json({
//         rev: store.db.rev
//     }).end();
// });

module.exports.router = router;

var _io = io.of("/clock");
_io.on('connection', (socket) => {
    socket.emit('sync', store.db);

    socket.on('sync', (d) => {
        for (var i in d) {
            store.db[i] = d[i];
        }
        store.save();
        _io.emit("sync", store.db);
    });

});