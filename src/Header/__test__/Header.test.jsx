import { expect, test } from "vitest";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

test("Header Test #1", () => {
  render(<Header title="React App" />);
  const h1Element = screen.getByText(/react/i);
  expect(h1Element).toBeInTheDocument();
});
// getByRol معمولا یک المان رو پیدا میکنه
//  ما با استفاده از برکت که درون آن نیم هست بهش سرنخ میدیم کدوم یکی رو پیدا کنه

test("Header Test #2", () => {
  render(<Header title="React App" />);
  //  از بین هدینگ ها اونیو پیدا میکنه که شامل اسم ریکت باشه
  const h1Element = screen.getByRole("heading", { name: /react/i });
  expect(h1Element).toBeInTheDocument();
});

// در اتریبیوت تایتل مقدار نوشته شده در پرانتز را پیدا کن
test("Header Test #3", () => {
  render(<Header title="React App" />);
  const h1Element = screen.getByTitle("header");
  expect(h1Element).toBeInTheDocument();
});
