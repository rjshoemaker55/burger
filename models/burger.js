const orm = require('../config/orm.js');

module.exports = {
	selectAll: function(cb) {
        console.log('')
        console.log('----------')
        console.log('selectAll function in burger.js hit')
        console.log('----------')
		orm.selectAll(function(data) {
			cb(data);
		});
    },
    
    insertOne: function(name, cb) {
        console.log('')
        console.log('----------')
        console.log('insertOne function in burger.js hit')
        console.log('----------')
        console.log('received ' + name + ' from burgers_controller, sending to orm.js') 
        orm.insertOne(name, function(data) {
            cb(data)
        })
    },

    updateOne: function(id, cb) {
        console.log('')
        console.log('----------')
        console.log('updateOne in burger.js hit')
        console.log('----------')
        orm.updateOne(id, function(data) {
            cb(data)
        })
    }
};
