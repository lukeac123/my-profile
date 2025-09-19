import { render, screen } from "../../../tests/test-utils";
import { ColorModeToggle } from "./ColorModeToggle";

test("test render", async () => {
  render(<ColorModeToggle />);

  expect(
    screen.getByRole("button", { name: "Toggle ColorMode" }),
  ).toBeVisible();
});
