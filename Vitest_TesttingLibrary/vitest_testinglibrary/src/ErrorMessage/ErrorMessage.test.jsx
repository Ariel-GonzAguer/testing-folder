import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders custom the message passed in", () => {
    render(<ErrorMessage message="Other error" />);
    // screen.debug(); //render the markup to the console, so you can see the text
    expect(screen.getByTestId("message-container").textContent).toBe("Other error");
  });
  
});

// this test, tests that component renders correct and how behave with props