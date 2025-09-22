import { fireEvent, render, screen } from "../../tests/test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import { Card } from "./Card";

expect.extend(toHaveNoViolations);

test("test render and accessibility", async () => {
  render(<Card>I am a card</Card>);

  const card = screen.getByText("I am a card");

  expect(card).toBeVisible();
  expect(await axe(card)).toHaveNoViolations();
});

test("displays child component", async () => {
  render(
    <Card>
      <h1>I am a card</h1>
    </Card>,
  );

  expect(screen.getAllByRole("heading", { name: "I am a card" }));
});

test("test function call", async () => {
  const spy = jest.fn();
  render(
    <Card role="article" onClick={spy}>
      Card
    </Card>,
  );

  fireEvent.click(screen.getByRole("article"));

  expect(spy).toHaveBeenCalledTimes(1);
});

test("accessibility", async () => {
  const spy = jest.fn();
  render(
    <Card role="article" onClick={spy}>
      Card
    </Card>,
  );

  const card = screen.getByRole("article");
  expect(await axe(card)).toHaveNoViolations();
});
