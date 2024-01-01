import MiniCartButton from "@/app/components/MiniCart/MiniCartButton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../app/hooks/useCart", () =>
  jest
    .fn()
    .mockReturnValueOnce({
      isError: false,
      isLoading: false,
      data: { size: 0, items: [] },
    })
    .mockReturnValueOnce({
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
    }),
);

describe("MiniCartButton", () => {
  beforeEach(() => {
    render(<MiniCartButton />);
  });

  it("renders the button without count when there are no cart items", () => {
    const element = screen.queryByText("My cart");
    expect(element).toBeInTheDocument();
    const counter = screen.queryByText("(");
    expect(counter).not.toBeInTheDocument();
    const noItems = screen.queryByText("Cart has no items");
    expect(noItems).toBeInTheDocument();
  });

  it("renders the button with the correct amount of items in the counter", () => {
    const element = screen.queryByText("My cart ( 4 )");
    expect(element).toBeInTheDocument();
  });
});
