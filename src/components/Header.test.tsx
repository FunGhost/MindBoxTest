import { fireEvent, render, screen } from "@testing-library/react";
import Header from "@/components/Header";

test("Рендер Header и вызов btnFn", () => {
  const btnFnMock = jest.fn();
  render(<Header btnFn={btnFnMock} btnText="Toggle View" />);
  fireEvent.click(screen.getByText("Toggle View"));
  expect(btnFnMock).toHaveBeenCalled();
});
