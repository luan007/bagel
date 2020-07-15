var fs = require('fs');

var path = __dirname + "/data/";
module.exports.create = function (store) {

    var db = {};

    var fullpath = path + store + ".json";

    function read(allow_error) {
        if (!fs.existsSync(fullpath)) {
            write(true);
        }
        if (allow_error) {
            db = JSON.parse(fs.readFileSync(fullpath).toString());
        } else {
            try {
                db = JSON.parse(fs.readFileSync(fullpath).toString());
            } catch (e) {};
        }
        console.log("data loaded", fullpath);
    }

    function write(backup_now) {
        try {
            console.log("data backup", fullpath + ".bk");
            fs.copyFileSync(fullpath, fullpath + ".bk");
        } catch (e) {}
        try {
            console.log("data written", fullpath);
            fs.writeFileSync(fullpath, JSON.stringify(db));
        } catch (e) {};
        if (backup_now) {
            try {
                console.log("data backup", fullpath + ".bk");
                fs.copyFileSync(fullpath, fullpath + ".bk");
            } catch (e) {}
        }
    }

    function write_if_changed() {
        try {
            var old = fs.readFileSync(fullpath + ".bk").toString();
            var cur = JSON.stringify(db);
            console.log(old, cur);
            if(cur != old) {
                write(false);
            }
            return true;
        }
        catch(e) {
            console.log(e);
        }
        return false;
    }

    read(true);

    return {
        db: db,
        save: function () {
            return write_if_changed();
        },
        reload: function() {
            return read();
        }
    };




};