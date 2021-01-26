function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newUnOderdList = document.createElement("ul");
  content.appendChild(UnOderdList);

  todos.forEach(function (obj) {
    let newList = document.createElement("li");
    newList.innerText = obj["todo"];
    UnOderdList.appendChild(newList);
    newList.addEventListener("click", lineThruFunc);
    function lineThruFunc() {
      if(newList.style.textDecoration === "line-through"){
        newList.style.textDecoration = "none";
      }else{
            newList.style.textDecoration = "line-through";
      }
    }
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);