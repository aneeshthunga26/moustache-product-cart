import MiniCartItems from "@/app/components/MiniCart/MiniCartItems";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const items = [
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
];

describe("MiniCartItems", () => {
  beforeEach(() => {
    render(<MiniCartItems items={items} />);
  });

  it("Displays the product title", () => {
    const productTitle = screen.queryAllByText("Classic Tee");
    expect(productTitle.length).toBeGreaterThan(0);
  });

  it("Displays the product price", () => {
    const productPrice = screen.queryAllByText("$56.00");
    expect(productPrice.length).toBeGreaterThan(0);
  });

  it("Displays all the sizes in the cart", () => {
    const sizeOptionS = screen.queryByText("Size: S");
    expect(sizeOptionS).toBeInTheDocument();
    const sizeOptionM = screen.queryByText("Size: M");
    expect(sizeOptionM).toBeInTheDocument();
  });

  it("Displays the quantity for each size option", () => {
    const quantityS = screen.queryByText("1x");
    expect(quantityS).toBeInTheDocument();
    const quantityM = screen.queryByText("3x");
    expect(quantityM).toBeInTheDocument();
  });
});
