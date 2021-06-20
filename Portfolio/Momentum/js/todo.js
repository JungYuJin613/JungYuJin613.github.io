const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = []; // object 저장함

function saveToDos(){ // toDos array의 내용을 localstorage에 넣는 역할
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
  const li = event.target.parentElement; // 클릭한 html 요소의 부모
  li.remove();
  toDos =  toDos.filter( toDo => toDo.id !== parseInt(li.id));
  // console.log(toDos);
  saveToDos();
}

function paintToDo(newTodo){ // to do 구현부분
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerHTML = newTodo.text; // input값으로 전달된 값이 span에 삽입됨
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li에 span 태그 추가하기
  li.appendChild(button); // li에 button 태그 추가하기
  toDoList.appendChild(li); // todolist form에 li태그 추가하기
}



function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value; // 입력값 저장(새로운 변수에)
  toDoInput.value = ""; // 입력 이후 입력칸 비우기
  const newTodoObj = { // 입력하면 새 obj 만들어주기
    text : newTodo,
    id : Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); // 화면에 to do 그려주기
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
  console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 기존에 있던 to do 저장하기
  parsedToDos.forEach(paintToDo);
} 

function sexyFilter(item){
  return item !== 3
}

[1,2,3,4].filter(sexyFilter);


