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
  it("Displays the product information and Add to Cart button", () => {
    render(<ProductDisplay product={product} />);
    //check if product title is present
    const productTitle = screen.queryByText(product.title);
    expect(productTitle).toBeInTheDocument();

    //check if product price is rendered correctly
    const productPrice = screen.queryByText(`\$${product.price.toFixed(2)}`);
    expect(productPrice).toBeInTheDocument();

    //check if product description is present
    const productDescription = screen.queryByText(product.description);
    expect(productDescription).toBeInTheDocument();

    //check if all the size option buttons are rendered correctly
    product.sizeOptions.forEach((so) => {
      const sizeOption = screen.queryByText(so.label);
      expect(sizeOption).toBeInTheDocument();
    });

    //check if add to cart button is present
    const addToCartButton = screen.queryByText("ADD TO CART");
    expect(addToCartButton).toBeInTheDocument();
  });
});
