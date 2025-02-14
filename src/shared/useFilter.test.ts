import { useFilter } from "@/shared/useFilter";
import { FilterType, ITodo } from "@/types/Todo.type";

const todos: ITodo[] = [
  { id: 1, text: "Задача 1", isCompleted: true },
  { id: 2, text: "Задача 2", isCompleted: false },
  { id: 3, text: "Задача 3", isCompleted: true },
];

test("Возвращает все todos если фильтр ALL", () => {
  expect(useFilter(FilterType.ALL, todos)).toEqual(todos);
});

test("Возвращает завершенные todos если фильтр COMPLETED", () => {
  expect(useFilter(FilterType.COMPLETED, todos)).toEqual([todos[0], todos[2]]);
});

test("Возвращает не завершенные todos если фильтр NOT_COMPLETED", () => {
  expect(useFilter(FilterType.NOT_COMPLETED, todos)).toEqual([todos[1]]);
});
