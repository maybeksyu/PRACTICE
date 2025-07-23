function TodoList({ todos, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          {todo}
          <button onClick={() => removeTodo(index)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;