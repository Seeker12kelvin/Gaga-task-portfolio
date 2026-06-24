import MenuBtn from "./menuBtn";
import Logo from "../../assets/images/Logo.png";
import { useActiveSection } from "../../hooks/useScrollView";

const Header = () => {
  const navList = [
    { id: 1, name: "Work", href: "hero" },
    { id: 2, name: "About", href: "about" },
    { id: 3, name: "Courses", href: "services" },
    { id: 4, name: "Brand Masterclass", href: "masterclass" },
    { id: 5, name: "Podcast", href: "news" },
    { id: 6, name: "Press", href: "press" },
  ];
  const activeSection = useActiveSection(navList);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full h-25 flex items-center justify-between font-satoshi max-md:gap-4">
      <img src={Logo} alt="Logo" className="h-9 w-24" />

      <nav className="max-w-140.25 w-full flex justify-between max-md:justify-end">
        <ul className="flex items-center gap-6 max-md:hidden">
          {navList.map((data) => (
            <li
              key={data.id}
              className={`font-medium text-[13px] cursor-pointer hover:text-[#C75804] transition-all duration-500 `}
            >
              <a
                onClick={() => handleScroll(data.href)}
                className={`transition-all duration-300 ${
                  activeSection === data.href ? "text-[#C75804]" : ""
                }`}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

        <a className="bg-[#1C0800] py-1.75 px-6 text-white font-bold rounded-xs cursor-pointer">
          Contact
        </a>
      </nav>

      <MenuBtn />
    </header>
  );
};

export default Header;
