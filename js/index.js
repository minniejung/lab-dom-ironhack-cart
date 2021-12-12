// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  const subTotalPrice = Number(price.innerHTML) * Number(quantity.value);

  subTotal.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let sum = 0;

  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach((product, i)=> {
    sum += updateSubtotal(product);
    // console.log(allProducts);
  })

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  const subTotalValue = target.parentElement.parentElement.children[3].getElementsByTagName('span')[0].innerHTML;
  let result = Number(totalValue.innerHTML) - Number(subTotalValue);
  // totalValue.textContent = Number(totalValue) - subTotalValue;
  totalValue.textContent = result;
  // console.log(subTotalValue);
  // console.log(totalValue);
  target.parentElement.parentElement.remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');

  cloneRow(productName, price);
  productName.value = '';
  productName.value = 0;
  //document.querySelector('[name="your-selector-name-here"]');
}

function cloneRow(name, price){
  if ('content' in document.createElement('template')) {

    const tbody = document.querySelector("tbody");
    const template = document.querySelector('#emptyRow');

    let clone = template.content.cloneNode(true);
    let nameClone = clone.querySelector(".product .name span");
    let priceClone = clone.querySelector(".product .price span");
    let btnClone = clone.querySelector(".btn-remove");

    nameClone.innerHTML = name.value;
    priceClone.innerHTML = price.value;
    btnClone.addEventListener('click', removeProduct)
  
    tbody.appendChild(clone);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
    //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(btn=>{btn.addEventListener('click', removeProduct)});

  const createBtn = document.querySelector('.create-product #create')
  createBtn.addEventListener('click', createProduct)
});
