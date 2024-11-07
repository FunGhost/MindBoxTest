import { FilterType, ITodo } from "@/types/Todo.type";

export const useFilter = (filter: FilterType, todos: ITodo[]) => {
  switch (filter) {
    case FilterType.ALL:
      return todos;
    case FilterType.COMPLETED:
      return todos.filter((todo) => todo.isCompleted);
    case FilterType.NOT_COMPLETED:
      return todos.filter((todo) => !todo.isCompleted);
    default:
      return todos;
  }
};
