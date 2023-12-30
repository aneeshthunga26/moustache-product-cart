import Navbar from "@/app/components/Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders a navbar with cart", () => {
    render(<Navbar />);
    const element = screen.queryByText("My cart");
    expect(element).toBeInTheDocument();
  });
});
