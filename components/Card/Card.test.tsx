import { render, screen } from "../../tests/test-utils";
import "@testing-library/jest-dom";
import { Card } from "./Card";

test("loads and displays greeting", async () => {
  render(<Card>I am a card</Card>);

  //   expect(screen.getAllByTestId("card")).toBeTruthy();
});
