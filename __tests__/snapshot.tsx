import Navbar from "@/app/components/Navbar";
import ProductDisplay from "@/app/components/ProductDisplay";
import { render } from "@testing-library/react";
import { product } from "./ProductDisplay.test";

jest.mock("../app/hooks/useUpdateCart", () =>
  jest.fn(() => {
    return {
      mutate: jest.fn(),
      isPending: false,
    };
  }),
);

jest.mock("../app/hooks/useCart", () =>
  jest.fn(() => {
    return {
      isError: false,
      isLoading: false,
      data: { items: [] },
    };
  }),
);

it("renders navbar unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});

it("renders the product display unchanged", () => {
  const { container } = render(<ProductDisplay product={product} />);
  expect(container).toMatchSnapshot();
});
