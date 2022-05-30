const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        id: {
            type: Number,

            _id: true
        },
        name: {
            type: String
        },
        price: {
            type: Number,

        },
        desc: {
            type: String,

        },
        createdAt: {
            type: Date,
            default: Date.now
        },


    })
    /*id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type : DataTypes.TEXT
    },
    precio: {
        type : DataTypes.REAL
    },
    cat: {
        type : DataTypes.TEXT
    },
    desc : {
        type : DataTypes.TEXT
    }
    }*/

module.exports = mongoose.model('ProductSch', productSchema)