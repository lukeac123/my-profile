import { render, screen } from "../../tests/test-utils";
import { CardContent } from "./CardContent";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

test("test render and accessibility", async () => {
  render(<CardContent>I am a card</CardContent>);

  const component = screen.getByText("I am a card");

  expect(await axe(component)).toHaveNoViolations();
});

test("displays child component", async () => {
  render(
    <CardContent>
      <h1>I am a card</h1>
    </CardContent>,
  );

  expect(screen.getAllByRole("heading", { name: "I am a card" }));
});
