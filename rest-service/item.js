const mongoose = require('mongoose');

//Itemschema code :

const ItemSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    price: {
      type: Number,
      required: true
    },
    
    image: {
      type: String,
      required: false
    },
  
  }

);

module.exports = mongoose.model('Item', ItemSchema);