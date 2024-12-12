import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="w-full h-[150px] bg-gradient-to-br from-[#2E2E2E] via-[#272727] to-[#202020] p-6 shadow-lg flex flex-row justify-between items-start">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-gray-100 font-thin mb-4">Welcome</h2>
      </div>
      <nav className="flex flex-row gap-6 text-gray-300  items-center">
        <a href="#" className="hover:text-white transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Contact
        </a>
        <Button
          variant="default"
          size="lg"
          className="hover:bg-[#31B2AA] hover:text-red"
          // className="ml-2 px-6 bg-[#465657] hover:bg-gray-600 hover:text-[#31B2AA] text-gray-100 border-gray-500 "
        >
          Try for free
        </Button>
      </nav>
    </div>
  );
}
