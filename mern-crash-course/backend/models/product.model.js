const { default: mongoose } = require("mongoose");



const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true // createdAt, upadtedAt
});

// Apparently mongoose wants you to call things in the upper-case singular
const Product = mongoose.model('Product', productSchema);

export default Product;
