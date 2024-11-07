import { ITodo } from "@/types/Todo.type";
import db from "../../db.json";

class Todo {
  todos: ITodo[] = db.todos;

  getTodos() {
    return this.todos;
  }

  getLastId() {
    return this.todos[this.todos.length - 1].id;
  }
}

export const todoItems = new Todo();
