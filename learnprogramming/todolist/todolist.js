/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
    console.log(data.user);
let icon="⏳";
if(data.completed){
    icon = "✅";
}
return{
    title:data.todoTitle,
    isCompleted: data.completed,
    icon: icon,
    category: data.chosenCategory,
    author:{
        firstName: data.user.first,
        lastName: data.user.last
    }
};
  }
/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
    console.log(todos)
    console.log(todo)
todos.push(todo);
return todos;
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
return todos.length;
}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
    console.log(todos[0].title)
return todos[0].title;

}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos){
    console.log(todos[todos.length - 1].title)
return todos[todos.length -1].title;
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
    console.log(todos)
return todos.map(function(todo){
    return todo.title;
});
}