import { ITodo } from "@/types/Todo.type";
import { todoItems } from "@/shared/getTodos";

type listenerType = () => void;

let nextId = todoItems.getLastId();
let todos: ITodo[] = todoItems.getTodos();
let listeners: listenerType[] | [] = [];

export const todosStore = {
  addTodo(text: string) {
    todos = [...todos, { id: ++nextId, text, isCompleted: false }];
    emitChange();
  },
  toggleTodo(id: number) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    emitChange();
  },
  removeTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id);
    emitChange();
  },
  removeAllCompleted() {
    todos = todos.filter((todo) => !todo.isCompleted);
    emitChange();
  },
  subscribe(listener: listenerType) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
