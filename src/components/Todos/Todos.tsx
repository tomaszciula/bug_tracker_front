import Todo from "./Todo";

const Todos = (props: any) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {Array.isArray(props.todos)
        ? props.todos.map((todo: any) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                todos={props.list}
                setTodos={props.setTodos}
              />
            );
          })
        : null}
    </div>
  );
};

export default Todos;