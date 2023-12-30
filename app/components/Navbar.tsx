import MiniCartButton from "./MiniCartButton";

/**
 * Navbar that appears on top of the webpage which contains the Mini cart
 * @returns Navbar JSX Element
 */
export default function Navbar() {
  return (
    <nav
      className="navbar m-auto mt-4 flex-col justify-center items-end bg-gray-100 h-8 w-8/12 px-40"
      data-testid="navbar"
    >
      <div className="mr-10">
        <MiniCartButton />
      </div>
    </nav>
  );
}
