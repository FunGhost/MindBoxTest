import { todosStore } from "@/stores/todoStore";

test("Добавление новой задачи", () => {
  todosStore.addTodo("New Task");
  expect(
    todosStore.getSnapshot().some((todo) => todo.text === "New Task"),
  ).toBe(true);
});

test("Переключение статуса задачи", () => {
  const id = todosStore.getSnapshot()[0].id;
  const initialStatus = todosStore.getSnapshot()[0].isCompleted;
  todosStore.toggleTodo(id);
  expect(todosStore.getSnapshot()[0].isCompleted).toBe(!initialStatus);
});

test("Удаление всех выполненных задач", () => {
  todosStore.addTodo("Temporary Task");
  todosStore.toggleTodo(todosStore.getSnapshot()[0].id);
  todosStore.removeAllCompleted();
  expect(todosStore.getSnapshot().every((todo) => !todo.isCompleted)).toBe(
    true,
  );
});
