import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("App Test", () => {
  render(<App />);
  //screen.debug();
  expect(screen.getByText(/react/i)).toBeInTheDocument();
});
