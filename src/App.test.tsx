import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "@/App";

test("Рендер App компонента и добавление нового Todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "Новый Todo" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
  expect(screen.getByText("Новый Todo")).toBeInTheDocument();
});
