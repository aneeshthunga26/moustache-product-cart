import Navbar from "@/app/components/Navbar";
import ProductDisplay from "@/app/components/ProductDisplay";
import { render } from "@testing-library/react";
import { product } from "./ProductDisplay.test";

it("renders navbar unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});

it("renders the product display unchanged", () => {
  const { container } = render(<ProductDisplay product={product} />);
  expect(container).toMatchSnapshot();
});
