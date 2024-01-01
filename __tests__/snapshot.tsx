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
      data: {
        size: 4,
        items: [
          {
            id: "1",
            productId: 1,
            productPrice: 56,
            productSize: "S",
            productTitle: "Classic Tee",
            quantity: 1,
            cartId: "1",
            imageUrl:
              "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
          },
          {
            id: "2",
            productId: 1,
            productPrice: 56,
            productSize: "M",
            productTitle: "Classic Tee",
            quantity: 3,
            cartId: "1",
            imageUrl:
              "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
          },
        ],
      },
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
