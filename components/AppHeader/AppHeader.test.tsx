import { render, screen } from "../../tests/test-utils";
import { AppHeader } from "./AppHeader";

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

test("test render", async () => {
  render(<AppHeader />);

  const header = screen.getByRole("banner");

  expect(header).toBeVisible();
});

test("Link click", async () => {
  render(<AppHeader />);

  expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
    "href",
    "/blog",
  );
});

test("Burger Menu Shown on Resize", async () => {
  render(<AppHeader />);

  resizeWindow(500, window.innerHeight);

  expect(
    screen.getByRole("button", { name: "Toggle Navigation" }),
  ).toBeVisible();
});
