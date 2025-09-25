import { fireEvent, render, screen } from "../../../tests/test-utils";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

test("test render", async () => {
  render(<ColorSchemeToggle />);

  expect(
    screen.getByRole("button", { name: "Toggle Dark Mode" }),
  ).toBeVisible();
});

test("test color scheme toggle", async () => {
  render(<ColorSchemeToggle />);

  const toggle = screen.getByRole("button", { name: "Toggle Dark Mode" });
  fireEvent.click(toggle);

  expect(screen.getByRole("button", { name: "Toggle Light Mode" })).toBeVisible;
});
