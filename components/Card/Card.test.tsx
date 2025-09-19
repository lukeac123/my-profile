import { fireEvent, render, screen } from "../../tests/test-utils";
import "@testing-library/jest-dom";
import { Card } from "./Card";

test("loads and displays text", async () => {
  render(<Card>I am a card</Card>);

  expect(screen.getAllByText("I am a card")).toBeTruthy();
});

test("loads and displays a component", async () => {
  render(
    <Card>
      <h1>I am a card</h1>
    </Card>
  );

  expect(screen.getAllByRole("heading", { name: "I am a card" }));
});

test("test function call", async () => {
  const spy = jest.fn();
  render(
    <Card role="article" onClick={spy}>
      Card
    </Card>
  );

  fireEvent.click(screen.getByRole("article"));

  expect(spy).toHaveBeenCalledTimes(1);
});
