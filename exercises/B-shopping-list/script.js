
  function shoppingList(arrayOfFood) {
    
  let content = document.querySelector('#content');
  let shoppingUl = document.createElement('ul');
  content.appendChild(shoppingUl);

  arrayOfFood.forEach((object) => {
  let shopping1 = document.createElement('li');
    shopping1.innerHTML = object
    shoppingUl.appendChild(shopping1);
});
}


let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
