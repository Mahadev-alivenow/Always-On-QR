import Link from "next/link";

function NavBar() {
  return (
    <div className="hidden sm:flex space-x-3 md:space-x-6 ">
      <Link href="#" className="text-gray-500 hover:text-gray-950 font-medium">Features</Link>
      <Link href="#" className="text-gray-500 hover:text-gray-950 font-medium">Pricing</Link>
      <Link href="#" className="text-gray-500 hover:text-gray-950 font-medium">Contact Us</Link>
    </div>
  );
}

export default NavBar;
