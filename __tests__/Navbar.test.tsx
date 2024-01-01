import Navbar from "@/app/components/Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../app/hooks/useCart", () =>
  jest.fn(() => {
    return {
      isError: false,
      isLoading: false,
      data: { items: [] },
    };
  }),
);

describe("Navbar", () => {
  it("renders a navbar with cart", () => {
    render(<Navbar />);
    //check if my cart button is present
    const element = screen.queryByText("My cart");
    expect(element).toBeInTheDocument();
  });
});
