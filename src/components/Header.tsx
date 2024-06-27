import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface Menu {
  href: string;
  text: string;
}

const menus: Menu[] = [
  { href: "/", text: "home" },
  { href: "/product", text: "product" },
  { href: "/contact", text: "contact" },
];

export default function Header() {
  return (
    <header className="fixed w-full">
      <div className="mx-auto flex flex-row justify-between items-center px-40">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <div className="flex py-9 md:px-3 space-x-2 md:space-x-4 items-center">
              <img
                src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                className="w-9 h-9 md:w-10 md:h-10 object-cover rounded-full"
                alt="Profile"
              />
              <span className="font-semibold leading-[200%] text-text">
                Jagoweb dev
              </span>
            </div>
          </Link>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <nav className="hidden md:block">
              <ul className="flex space-x-3">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.href}>
                      <div className="px-3 py-2 leading-[180%] text-sm">
                        {menu.text}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button className=" bg-white text-black py-3 px-11 text-sm leading-[160%] border-brand rounded-full">
              Login
            </button>
            <button className="md:hidden p-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
