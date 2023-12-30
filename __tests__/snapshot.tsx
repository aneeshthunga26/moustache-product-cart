import Navbar from "@/app/components/Navbar";
import { render } from "@testing-library/react";

it("renders navbar unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
