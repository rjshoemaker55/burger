const connection = require('./connection')

module.exports = {
    selectAll: function(cb) {

        console.log('')
        console.log('----------')
        console.log('selectAll function in orm.js hit')
        console.log('----------')

        let query = 'SELECT * FROM burgers'

        connection.query(query, function(err, data) {
            if (err) throw err;
            cb(data)
        })

    },

    insertOne: function(name, cb) {

        console.log('')
        console.log('----------')
        console.log('insertOne function in orm.js hit')
        console.log('----------')
        console.log('...trying to query INSERT INTO burgers (burger_name, devoured) VALUES ("' + name + '" , false)')

        let query = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + name + '", false)'

        connection.query(query, function(err, data) {
            if (err) throw err;
            cb(data)
        })

    },

    updateOne: function(id, cb) {

        console.log('')
        console.log('----------')
        console.log('updateOne function in orm.js hit')
        console.log('----------')

        let query = 'UPDATE burgers SET devoured = true WHERE id = ' + id

        connection.query(query, function(err, data) {
            if (err) throw err;
            cb(data)
        })
    }
}

