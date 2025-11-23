// Write your code here
const products =[]
const product1= {
  name: 'laptop'

}
const product2= {
  name: 'phone'

}
const product3= {
  name: 'headphone'

}
const product4= {
  name:'monitor'
}

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(newProduct) {
  products.push(newProduct);
}

function updateProductName(index, newName) {
  if (products[index]) {
    products[index].name = newName;
  }
}

function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
