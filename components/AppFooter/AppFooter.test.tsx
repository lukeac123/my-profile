import { render, screen } from "../../tests/test-utils";

import { AppFooter } from "./AppFooter";

test("test render", async () => {
  render(<AppFooter />);

  const footer = screen.getByRole("contentinfo");

  expect(footer).toBeVisible();
});

test("Link click", async () => {
  render(<AppFooter />);

  expect(
    screen.getByRole("link", { name: "https://github.com/lukeac123" }),
  ).toHaveAttribute("href", "https://github.com/lukeac123");
});
