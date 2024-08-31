import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  it("renders correct pagination", () => {
    render(<Pagination total={50} limit={10} currentPage={1}  />);
    // screen.debug();
    expect(screen.getAllByTestId("page-container").length).toEqual(5);
    expect(screen.getAllByTestId("page-container")[0].textContent).toBe('1');
  });

  it("should emit clicked page", async () => {
    const user = userEvent.setup(); // siempre que se vaya a simular el uso por usuario final, comenzar con esto y usar asincronía para esperar que se ejecute el evento
    const handleClick = vi.fn();
    render(<Pagination total={50} limit={10} currentPage={1} selectPage={handleClick}  />);
    const pageContainer = screen.getAllByTestId("page-container");
    await user.click(pageContainer[0]);

    expect(handleClick).toHaveBeenCalledOnce(1);
    expect(handleClick).toHaveBeenCalledWith(1);
  })
});

// this test, tests for props working correctly using imported functions and if component rendering right, user interactions,