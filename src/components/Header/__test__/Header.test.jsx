import { expect, test } from "vitest";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

//  الویت آخر ما getByTestIdالویت های اول ما هستند و  getByText,getByRol

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

// الویت آخر ما است
test("Header Test #4", () => {
  render(<Header title="React App" />);
  const h1Element = screen.getByTestId("header-2");
  expect(h1Element).toBeInTheDocument();
});

// FINDBY methods:

test("Header Test #5", async () => {
  render(<Header title="React App" />);
  const h1Element = await screen.findByText(/react/i);
  expect(h1Element).toBeInTheDocument();
});

//QUERY methods:

test("Header Test #6", () => {
  render(<Header title="React App" />);
  const h1Element = screen.queryByText(/vue/i); //Not Exist in dom
  expect(h1Element).not.toBeInTheDocument();
});

// GETALL

test("Header Test #7", () => {
  render(<Header title="React App" />); //hاون هدینگ هاییو میده که
  const headings = screen.queryAllByRole("heading");
  expect(headings.length).toBe(2);
});
