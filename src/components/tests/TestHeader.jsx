import TestHamburger from "./TestHamburger";

const TestHeader = () => {
  return (
    <header className="relative top-0 z-50">
      <nav className="flex justify-between p-4 w-full text-white _textShadow text-2xl">
        <a href="/" className="font-bold">
          Fish Expo
        </a>
        <div className="flex">
          <a href="/#about" className="px-3 md:block hidden">
            about
          </a>
          <a href="/#fish-" className="px-3 md:block hidden">
            Gallery
          </a>
        </div>
        <button className="py-2 px-5 text-white bg-black md:block hidden">
          <a href="/#contact">Contact Us</a>
        </button>
        <TestHamburger />
      </nav>
    </header>
  );
};

export default TestHeader;
