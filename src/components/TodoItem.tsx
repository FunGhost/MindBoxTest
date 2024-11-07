import React, { memo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ITodo } from "@/types/Todo.type";

type TodoItemProps = {
  todo: ITodo;
  toggleCompleted: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = memo(({ todo, toggleCompleted }) => {
  return (
    <>
      <Checkbox
        id={todo.id + "checkbox"}
        onCheckedChange={() => toggleCompleted(todo.id)}
        checked={todo.isCompleted}
      />
      <label
        htmlFor={todo.id + "checkbox"}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {todo.isCompleted ? <s>{todo.text}</s> : todo.text}
      </label>
    </>
  );
});

export default TodoItem;
