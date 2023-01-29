// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  quantity = product.querySelector('.quantity input').value;
  subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

  //... your code goes here
}
function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  const prodName = inputs[0].value;
  const prodPrice = inputs[1].value;
  const product = document.createElement('tr');
  product.className = 'product';
  product.innerHTML = `<td class="product">
             <span>${prodName}</span>
             </td>
             <td class="price">$<span>${prodPrice}</span></td>
             <td class="quantity">
             <input type="number" value="0" min="0" placeholder="Quantity" />
             </td>
             <td class="subtotal">$<span>0</span></td>
             <td class="action">
             <button class="btn btn-remove">Remove</button>
             </td>`;
  document.querySelector('tbody').appendChild(product);         
  product.querySelector('.btn.btn-remove').addEventListener('click', removeProduct);
  return product;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = [...document.querySelectorAll('.product')];
  products.forEach((product) => updateSubtotal(product))
  //... your code goes here

  // ITERATION 3  
  let  grantotal, total;
  products = Array.from(document.querySelectorAll('.product'));
  total = document.querySelector('#total-value > span');
  grantotal = 0;

  products.forEach((product) => grantotal+=updateSubtotal(product));
  total.innerHTML = grantotal; 
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {

  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // let parent = target.parentNode;
  // parent.removeChild();
  // calculateAll();
  // const removeProductBtn = [...document.getElementsByClassName('btn-remove')];
  // removeProductBtn.forEach(function(btn){btn.addEventListener('click', removeProduct)})
  

  let i = event.parentNode.parentNode.rowIndex;
    //note to self: rowIndex includes index of first tr within the thead of table.
    document.getElementById('cart').deleteRow(i);

    calculateAll()
  //... your code goes here
}

// ITERATION 5



window.addEventListener('load', () => {
  calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeButtons = document.querySelectorAll('.btn-remove')
  console.log(removeButtons)
  for(let button of removeButtons){
    button.addEventListener('click', (e) => removeProduct(e.currentTarget))
  }
  //... your code goes here
  const addButton = document.getElementById('create')
  addButton.addEventListener('click', createProduct)
});
