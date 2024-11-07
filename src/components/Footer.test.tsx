import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import { FilterType } from "@/types/Todo.type";

test("Вызов changeValue при клике на кнопку", () => {
  const changeValueMock = jest.fn();
  render(
    <Footer
      completedLength={3}
      valueFilter={FilterType.ALL}
      changeValue={changeValueMock}
      clearCompleted={() => {}}
    />,
  );
  fireEvent.click(screen.getByText("Active"));
  expect(changeValueMock).toHaveBeenCalledWith(FilterType.NOT_COMPLETED);
});

test("Вызов clearCompleted при клике на кнопку", () => {
  const clearCompletedMock = jest.fn();
  render(
    <Footer
      completedLength={2}
      valueFilter={FilterType.ALL}
      changeValue={() => {}}
      clearCompleted={clearCompletedMock}
    />,
  );
  fireEvent.click(screen.getByText("Clear Completed"));
  expect(clearCompletedMock).toHaveBeenCalled();
});
