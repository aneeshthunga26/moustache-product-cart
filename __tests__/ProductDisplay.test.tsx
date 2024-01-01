import ProductDisplay from "@/app/components/ProductDisplay";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../app/hooks/useUpdateCart", () =>
  jest.fn(() => {
    return {
      mutate: jest.fn(),
      isPending: false,
    };
  }),
);

export const product = {
  id: 1,
  title: "Classic Tee",
  price: 75,
  description: "Lorem ipsum usmod tempor.",
  imageURL:
    "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
  sizeOptions: [
    {
      id: 1,
      label: "S",
    },
    {
      id: 2,
      label: "M",
    },
    {
      id: 3,
      label: "L",
    },
  ],
};

describe("Product Display", () => {
  beforeEach(() => {
    render(<ProductDisplay product={product} />);
  });

  it("Displays the product title", () => {
    const productTitle = screen.queryByText(product.title);
    expect(productTitle).toBeInTheDocument();
  });

  it("Displays the product price", () => {
    const productPrice = screen.queryByText(`\$${product.price.toFixed(2)}`);
    expect(productPrice).toBeInTheDocument();
  });

  it("Displays the product description", () => {
    const productDescription = screen.queryByText(product.description);
    expect(productDescription).toBeInTheDocument();
  });

  it("Displays the size options", () => {
    product.sizeOptions.forEach((so) => {
      const sizeOption = screen.queryByText(so.label);
      expect(sizeOption).toBeInTheDocument();
    });
  });

  it("Displays the add to cart button", () => {
    const addToCartButton = screen.queryByText("ADD TO CART");
    expect(addToCartButton).toBeInTheDocument();
  });
});
