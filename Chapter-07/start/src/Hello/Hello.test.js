import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

test("Should include users name when rendered", async () => {
  render(<Hello />);

  expect(await screen.findByText(/Bob/)).toBeInTheDocument();
});
