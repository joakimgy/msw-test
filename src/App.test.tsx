import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const mockedResponse = screen.getByText(/mocked response/i);
  expect(mockedResponse).toBeInTheDocument();
});
